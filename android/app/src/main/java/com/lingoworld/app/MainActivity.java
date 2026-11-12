package com.lingoworld.app;

import android.media.AudioAttributes;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Set;

public class MainActivity extends BridgeActivity implements TextToSpeech.OnInitListener {
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private PendingSpeech pendingSpeech = null;

    private static class PendingSpeech {
        final String text;
        final String lang;
        final float rate;
        final String gender;

        PendingSpeech(String text, String lang, float rate, String gender) {
            this.text = text;
            this.lang = lang;
            this.rate = rate;
            this.gender = gender;
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        try {
            // Prefer Google Speech Services (Neural/WaveNet US voices) over robotic OEM engines
            tts = new TextToSpeech(this, this, "com.google.android.tts");
        } catch (Exception e) {
            try {
                tts = new TextToSpeech(this, this);
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        if (getBridge() != null && getBridge().getWebView() != null) {
            WebView webView = getBridge().getWebView();
            WebSettings settings = webView.getSettings();
            settings.setMediaPlaybackRequiresUserGesture(false);
            webView.addJavascriptInterface(new AndroidTTSBridge(), "AndroidTTS");
        }
    }

    private void notifyWebSpeakingState(final boolean speaking) {
        runOnUiThread(() -> {
            try {
                if (getBridge() != null && getBridge().getWebView() != null) {
                    String js = "window.dispatchEvent(new CustomEvent('lingo-tts-state', { detail: { speaking: " + speaking + " } }));";
                    getBridge().getWebView().evaluateJavascript(js, null);
                }
            } catch (Exception ignored) {
            }
        });
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS && tts != null) {
            try {
                AudioAttributes attrs = new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_MEDIA)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                        .build();
                tts.setAudioAttributes(attrs);
                tts.setLanguage(Locale.US);
                tts.setPitch(1.0f);

                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override
                    public void onStart(String utteranceId) {
                        notifyWebSpeakingState(true);
                    }

                    @Override
                    public void onDone(String utteranceId) {
                        notifyWebSpeakingState(false);
                    }

                    @Override
                    public void onError(String utteranceId) {
                        notifyWebSpeakingState(false);
                    }
                });

                ttsReady = true;

                if (pendingSpeech != null) {
                    speakInternal(pendingSpeech.text, pendingSpeech.lang, pendingSpeech.rate, pendingSpeech.gender);
                    pendingSpeech = null;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            // Fallback to default TTS engine if com.google.android.tts was not available
            try {
                tts = new TextToSpeech(this, status2 -> {
                    if (status2 == TextToSpeech.SUCCESS && tts != null) {
                        tts.setLanguage(Locale.US);
                        tts.setPitch(1.0f);
                        ttsReady = true;
                        if (pendingSpeech != null) {
                            speakInternal(pendingSpeech.text, pendingSpeech.lang, pendingSpeech.rate, pendingSpeech.gender);
                            pendingSpeech = null;
                        }
                    }
                });
            } catch (Exception ignored) {
            }
        }
    }

    private int scoreUsVoice(Voice v, boolean wantMale) {
        String name = v.getName().toLowerCase();
        int score = v.getQuality(); // QUALITY_VERY_HIGH = 500, QUALITY_HIGH = 400, QUALITY_NORMAL = 300

        // Prefer Neural / WaveNet network voices first when available, then high-quality local US voices
        if (name.contains("network") || name.contains("wavenet") || name.contains("neural")) {
            score += 150;
        }

        // Google US English voice identifiers:
        // Male US voices: iom, tpd
        // Female US voices: sfg, tpf, iob, iog
        boolean isKnownMale = name.contains("-iom") || name.contains("-tpd")
                || (name.contains("male") && !name.contains("female"))
                || name.contains("david") || name.contains("guy") || name.contains("christopher") || name.contains("eric");
        boolean isKnownFemale = name.contains("-sfg") || name.contains("-tpf") || name.contains("-iob") || name.contains("-iog")
                || name.contains("female") || name.contains("samantha") || name.contains("zira") || name.contains("jenny") || name.contains("aria");

        if (wantMale && isKnownMale) {
            score += 300;
        } else if (!wantMale && isKnownFemale) {
            score += 300;
        } else if (wantMale && isKnownFemale) {
            score -= 200;
        } else if (!wantMale && isKnownMale) {
            score -= 200;
        }

        return score;
    }

    private boolean speakInternal(String text, String lang, float rate, String gender) {
        if (tts == null || text == null || text.trim().isEmpty()) {
            return false;
        }
        if (!ttsReady) {
            pendingSpeech = new PendingSpeech(text, lang, rate, gender);
            return true;
        }

        try {
            boolean isMale = "male".equalsIgnoreCase(gender);
            // Strictly American English (en-US) as requested
            Locale targetLocale = Locale.US;
            tts.setLanguage(targetLocale);

            try {
                Set<Voice> voices = tts.getVoices();
                if (voices != null && !voices.isEmpty()) {
                    List<Voice> usVoices = new ArrayList<>();

                    for (Voice v : voices) {
                        Locale loc = v.getLocale();
                        if (loc != null
                                && "en".equalsIgnoreCase(loc.getLanguage())
                                && ("US".equalsIgnoreCase(loc.getCountry()) || "USA".equalsIgnoreCase(loc.getCountry()) || v.getName().toLowerCase().startsWith("en-us"))) {
                            usVoices.add(v);
                        }
                    }

                    if (!usVoices.isEmpty()) {
                        Collections.sort(usVoices, new Comparator<Voice>() {
                            @Override
                            public int compare(Voice a, Voice b) {
                                return Integer.compare(scoreUsVoice(b, isMale), scoreUsVoice(a, isMale));
                            }
                        });
                        tts.setVoice(usVoices.get(0));
                    }
                }
            } catch (Exception ignored) {
            }

            // NEVER warp pitch away from 1.0f so voice stays 100% human and natural (never robotic!)
            tts.setPitch(1.0f);
            float safeRate = (rate < 0.75f) ? 0.72f : 0.96f;
            tts.setSpeechRate(safeRate);

            Bundle params = new Bundle();
            params.putFloat(TextToSpeech.Engine.KEY_PARAM_VOLUME, 1.0f);

            notifyWebSpeakingState(true);
            int result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, "utt_" + System.currentTimeMillis());
            if (result != TextToSpeech.SUCCESS) {
                notifyWebSpeakingState(false);
                return false;
            }
            return true;
        } catch (Exception e) {
            notifyWebSpeakingState(false);
            e.printStackTrace();
            return false;
        }
    }

    public class AndroidTTSBridge {
        @JavascriptInterface
        public boolean speak(String text, String lang, float rate, String gender) {
            return speakInternal(text, lang, rate, gender);
        }

        @JavascriptInterface
        public void stop() {
            try {
                pendingSpeech = null;
                if (tts != null) {
                    tts.stop();
                }
                notifyWebSpeakingState(false);
            } catch (Exception ignored) {
            }
        }

        @JavascriptInterface
        public boolean isReady() {
            return ttsReady;
        }
    }

    @Override
    public void onDestroy() {
        if (tts != null) {
            try {
                tts.stop();
                tts.shutdown();
            } catch (Exception ignored) {
            }
        }
        super.onDestroy();
    }
}
