package com.lingoworld.app;

import android.media.AudioAttributes;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.Voice;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.util.ArrayList;
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
            tts = new TextToSpeech(this, this);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (getBridge() != null && getBridge().getWebView() != null) {
            WebView webView = getBridge().getWebView();
            WebSettings settings = webView.getSettings();
            settings.setMediaPlaybackRequiresUserGesture(false);
            webView.addJavascriptInterface(new AndroidTTSBridge(), "AndroidTTS");
        }
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
                ttsReady = true;

                if (pendingSpeech != null) {
                    speakInternal(pendingSpeech.text, pendingSpeech.lang, pendingSpeech.rate, pendingSpeech.gender);
                    pendingSpeech = null;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
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
            Locale targetLocale = (lang != null && lang.toLowerCase().startsWith("pt"))
                    ? new Locale("pt", "BR")
                    : Locale.US;

            tts.setLanguage(targetLocale);

            // Try to pick a matching Male or Female English voice if available on the device
            try {
                Set<Voice> voices = tts.getVoices();
                if (voices != null && !voices.isEmpty()) {
                    List<Voice> maleVoices = new ArrayList<>();
                    List<Voice> femaleVoices = new ArrayList<>();
                    List<Voice> allMatchingLang = new ArrayList<>();

                    String targetLangPrefix = targetLocale.getLanguage().toLowerCase();
                    for (Voice v : voices) {
                        if (v.getLocale() != null && v.getLocale().getLanguage().toLowerCase().equals(targetLangPrefix)) {
                            if (v.isNetworkConnectionRequired()) continue;
                            allMatchingLang.add(v);
                            String name = v.getName().toLowerCase();
                            if (name.contains("male") && !name.contains("female")
                                    || name.contains("-iom")
                                    || name.contains("-tpd")
                                    || name.contains("-gbd")
                                    || name.contains("-rjs")
                                    || name.contains("david")
                                    || name.contains("guy")
                                    || name.contains("daniel")
                                    || name.contains("mark")) {
                                maleVoices.add(v);
                            } else if (name.contains("female")
                                    || name.contains("-sfg")
                                    || name.contains("-tpf")
                                    || name.contains("-iob")
                                    || name.contains("-gba")
                                    || name.contains("samantha")
                                    || name.contains("zira")
                                    || name.contains("jenny")) {
                                femaleVoices.add(v);
                            }
                        }
                    }

                    if (isMale && !maleVoices.isEmpty()) {
                        tts.setVoice(maleVoices.get(0));
                    } else if (!isMale && !femaleVoices.isEmpty()) {
                        tts.setVoice(femaleVoices.get(0));
                    } else if (allMatchingLang.size() >= 2) {
                        tts.setVoice(allMatchingLang.get(isMale ? 0 : 1));
                    }
                }
            } catch (Exception ignored) {
            }

            // Set distinct natural pitch for male vs female voices
            float pitch = isMale ? 0.82f : 1.15f;
            float safeRate = Math.max(0.5f, Math.min(1.5f, rate));

            tts.setPitch(pitch);
            tts.setSpeechRate(safeRate);

            int result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "utt_" + System.currentTimeMillis());
            return result == TextToSpeech.SUCCESS;
        } catch (Exception e) {
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
