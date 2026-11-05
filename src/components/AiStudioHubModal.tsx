import React, { useState, useRef } from 'react';
import { API_BASE_URL } from '../config';
import {
  X,
  Sparkles,
  Music,
  Image as ImageIcon,
  Video,
  MapPin,
  Dna,
  Mic,
  MicOff,
  Play,
  Pause,
  ExternalLink,
  RefreshCw,
  Download,
  Send,
  Volume2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakText } from '../utils/storage';

interface AiStudioHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'music' | 'image' | 'video' | 'maps' | 'science' | 'voice';
}

export const AiStudioHubModal: React.FC<AiStudioHubModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'music',
}) => {
  const [activeTab, setActiveTab] = useState<'music' | 'image' | 'video' | 'maps' | 'science' | 'voice'>(initialTab);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 1. Music (Lyria) State
  const [musicPrompt, setMusicPrompt] = useState('An upbeat acoustic guitar song about English phrasal verbs.');
  const [musicModel, setMusicModel] = useState<'clip' | 'pro'>('clip');
  const [musicResult, setMusicResult] = useState<{ audioUrl: string | null; lyrics: string; modelUsed: string } | null>(null);

  // 2. Image (Nano Banana 2.1) State
  const [imagePrompt, setImagePrompt] = useState('A cosmic astronaut studying English vocabulary with glowing holographic words.');
  const [imageAspectRatio, setImageAspectRatio] = useState<'1:1' | '16:9' | '4:3' | '9:16'>('1:1');
  const [imageResult, setImageResult] = useState<{ imageUrl: string | null; text: string } | null>(null);
  const [editImageBase64, setEditImageBase64] = useState<string | null>(null);

  // 3. Video (Omni Flash) State
  const [videoPrompt, setVideoPrompt] = useState('A smooth cinematic drone shot through London bridges with sunset reflections.');
  const [videoAspectRatio, setVideoAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [videoResult, setVideoResult] = useState<string | null>(null);
  const [uploadVideoPhoto, setUploadVideoPhoto] = useState<string | null>(null);

  // 4. Maps Grounding State
  const [mapsQuery, setMapsQuery] = useState('Historic bookshops and cozy study cafes in London');
  const [mapsResult, setMapsResult] = useState<{ text: string; places: any[] } | null>(null);

  // 5. Science & STEM State
  const [scienceTopic, setScienceTopic] = useState('Hemoglobin');
  const [scienceResult, setScienceResult] = useState<any | null>(null);

  // 6. Voice & Transcribe State
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [liveVoiceReply, setLiveVoiceReply] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  if (!isOpen) return null;

  // --- Handlers ---

  // 1. Generate Music (Lyria)
  const handleGenerateMusic = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gemini/generate-music`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: musicPrompt, modelType: musicModel }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na geração de música');
      setMusicResult({
        audioUrl: data.audioDataUrl,
        lyrics: data.lyrics || '',
        modelUsed: data.modelUsed || (musicModel === 'pro' ? 'lyria-3-pro-preview' : 'lyria-3-clip-preview'),
      });
      confetti({ particleCount: 40, spread: 60 });
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Generate Image (Nano Banana 2.1)
  const handleGenerateImage = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gemini/generate-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imagePrompt,
          aspectRatio: imageAspectRatio,
          base64Image: editImageBase64 ? editImageBase64.split(',')[1] : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na geração de imagem');
      setImageResult({
        imageUrl: data.imageUrl,
        text: data.text || '',
      });
      confetti({ particleCount: 40, spread: 60 });
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Generate Video (Omni Flash)
  const handleGenerateVideo = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gemini/generate-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: videoPrompt,
          aspectRatio: videoAspectRatio,
          imageBase64: uploadVideoPhoto ? uploadVideoPhoto.split(',')[1] : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na geração de vídeo');
      setVideoResult(data.videoUrl);
      confetti({ particleCount: 50, spread: 70 });
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 4. Maps Grounding
  const handleQueryMaps = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gemini/maps-grounding`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: mapsQuery }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro no Maps grounding');
      setMapsResult({
        text: data.text,
        places: data.places || [],
      });
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 5. Science & STEM
  const handleQueryScience = async (topicName?: string) => {
    const q = topicName || scienceTopic;
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/gemini/science-query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: q }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na consulta científica');
      setScienceResult(data);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 6. Voice & Microphone Recording for Transcription
  const handleStartRecording = async () => {
    setErrorMessage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Data = (reader.result as string).split(',')[1];
          setIsLoading(true);
          try {
            // Send to transcription endpoint
            const res = await fetch(`${API_BASE_URL}/api/gemini/transcribe`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ audioBase64: base64Data, mimeType: 'audio/webm' }),
            });
            const data = await res.json();
            const transcript = data.transcript || 'Hello Professor Lingo!';
            setTranscribedText(transcript);

            // Connect to Live Conversation
            const convRes = await fetch(`${API_BASE_URL}/api/gemini/live-conversation`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userSpeechText: transcript }),
            });
            const convData = await convRes.json();
            setLiveVoiceReply(convData.replyText || '');
            speakText(convData.replyText || transcript);
          } catch (e: any) {
            setErrorMessage('Erro ao transcrever áudio: ' + e.message);
          } finally {
            setIsLoading(false);
          }
        };
      };

      recorder.start();
      setIsRecording(true);
    } catch (err: any) {
      setErrorMessage('Permissão de microfone negada ou não disponível.');
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Image Upload Helper
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-50 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  Lingo AI Studio Hub & Labs
                </h2>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-mono font-bold rounded-full">
                  Gemini Multi-Modal
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Gere músicas com Lyria, imagens com Nano Banana 2.1, vídeos com Omni Flash, explore mapas e biociências.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto scrollbar-none text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('music')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'music' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Music className="w-3.5 h-3.5 text-pink-500" />
            <span>Músicas (Lyria)</span>
          </button>

          <button
            onClick={() => setActiveTab('image')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'image' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>Imagens (Nano Banana 2.1)</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'video' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-purple-500" />
            <span>Vídeos (Omni Flash)</span>
          </button>

          <button
            onClick={() => setActiveTab('maps')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'maps' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Cultura (Google Maps)</span>
          </button>

          <button
            onClick={() => setActiveTab('science')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'science' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Dna className="w-3.5 h-3.5 text-emerald-500" />
            <span>Biociências (Science Skills)</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'voice' ? 'bg-white text-indigo-600 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-sky-500" />
            <span>Voz & Transcrição</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. MUSIC GENERATION (Lyria) */}
          {activeTab === 'music' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-pink-200" />
                  <h3 className="font-black text-base">Gerador de Rimas e Canções Educativas (Lyria)</h3>
                </div>
                <p className="text-xs text-pink-100 mt-1">
                  Crie faixas e jingles em inglês para fixar gramática e vocabulário com facilidade usando os modelos <code>lyria-3-clip-preview</code> e <code>lyria-3-pro-preview</code>.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-800">Descreva a música ou rima educativa:</label>
                  <textarea
                    rows={3}
                    value={musicPrompt}
                    onChange={(e) => setMusicPrompt(e.target.value)}
                    placeholder="Ex: An upbeat educational pop song about regular and irregular past tense verbs with acoustic chords."
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span>Modelo:</span>
                    <button
                      type="button"
                      onClick={() => setMusicModel('clip')}
                      className={`px-3 py-1.5 rounded-xl border text-xs transition-colors cursor-pointer ${
                        musicModel === 'clip' ? 'bg-indigo-600 text-white border-indigo-600 font-extrabold' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      Lyria Clip (30s)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMusicModel('pro')}
                      className={`px-3 py-1.5 rounded-xl border text-xs transition-colors cursor-pointer ${
                        musicModel === 'pro' ? 'bg-indigo-600 text-white border-indigo-600 font-extrabold' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      Lyria Pro (Faixa Completa)
                    </button>
                  </div>

                  <button
                    onClick={handleGenerateMusic}
                    disabled={isLoading || !musicPrompt.trim()}
                    className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    <span>{isLoading ? 'Compondo Música...' : 'Gerar Música com Lyria'}</span>
                  </button>
                </div>

                {/* Music Player & Lyrics Result */}
                {musicResult && (
                  <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Faixa Gerada com Sucesso ({musicResult.modelUsed})
                      </span>
                    </div>

                    {musicResult.audioUrl ? (
                      <audio controls className="w-full mt-2" src={musicResult.audioUrl}>
                        Seu navegador não suporta reprodução de áudio.
                      </audio>
                    ) : (
                      <div className="p-3 bg-amber-50 text-amber-800 text-xs rounded-xl border border-amber-200">
                        🎵 Áudio sintetizado de demonstração preparado. Acompanhe a letra e cante junto!
                      </div>
                    )}

                    {musicResult.lyrics && (
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                        {musicResult.lyrics}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. IMAGE GENERATION (Nano Banana 2.1) */}
          {activeTab === 'image' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-amber-200" />
                  <h3 className="font-black text-base">Estúdio de Imagens & Flashcards Visuais (Nano Banana 2.1)</h3>
                </div>
                <p className="text-xs text-amber-100 mt-1">
                  Crie ilustrações pedagógicas e edite imagens com o modelo <code>gemini-nano-banana-2.1</code> com suporte a diferentes resoluções e proporções.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-800">Prompt da Imagem:</label>
                  <textarea
                    rows={2}
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="Ex: A futuristic classroom with floating 3D English words and a friendly owl mascot in 4K."
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Proporção (Aspect Ratio):</label>
                    <div className="flex items-center gap-2">
                      {(['1:1', '16:9', '4:3', '9:16'] as const).map((ratio) => (
                        <button
                          key={ratio}
                          type="button"
                          onClick={() => setImageAspectRatio(ratio)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-colors ${
                            imageAspectRatio === ratio ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Editar Imagem Existente (Opcional):</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(e, setEditImageBase64)}
                      className="block w-full text-xs text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  onClick={handleGenerateImage}
                  disabled={isLoading || !imagePrompt.trim()}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  <span>{isLoading ? 'Criando Imagem com Nano Banana 2.1...' : 'Gerar Imagem com gemini-nano-banana-2.1'}</span>
                </button>

                {/* Image Output Card */}
                {imageResult && (
                  <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Imagem Produzida em Alta Definição
                    </span>
                    {imageResult.imageUrl && (
                      <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-96 flex items-center justify-center bg-slate-900 shadow-md">
                        <img src={imageResult.imageUrl} alt="AI Generated Flashcard" className="max-h-96 w-auto object-contain" />
                      </div>
                    )}
                    {imageResult.text && (
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        {imageResult.text}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. VIDEO GENERATION (Omni Flash) */}
          {activeTab === 'video' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-purple-200" />
                  <h3 className="font-black text-base">Estúdio de Animação e Vídeo (Omni Flash)</h3>
                </div>
                <p className="text-xs text-purple-100 mt-1">
                  Crie vídeos do zero ou anime fotografias em movimento cinematográfico com <code>gemini-omni-1.1-flash</code> via Interactions API.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-800">Descrição do Movimento / Roteiro do Vídeo:</label>
                  <textarea
                    rows={2}
                    value={videoPrompt}
                    onChange={(e) => setVideoPrompt(e.target.value)}
                    placeholder="Ex: A camera panning around Big Ben in London while students are conversing cheerfully."
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Proporção do Vídeo:</label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setVideoAspectRatio('16:9')}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                          videoAspectRatio === '16:9' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        16:9 (Horizontal / Paisagem)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVideoAspectRatio('9:16')}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                          videoAspectRatio === '9:16' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        9:16 (Vertical / Reels)
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Animar Foto (Image-to-Video):</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(e, setUploadVideoPhoto)}
                      className="block w-full text-xs text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  onClick={handleGenerateVideo}
                  disabled={isLoading || !videoPrompt.trim()}
                  className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Video className="w-4 h-4" />}
                  <span>{isLoading ? 'Processando Vídeo com Omni Flash...' : 'Gerar Vídeo com gemini-omni-1.1-flash'}</span>
                </button>

                {videoResult && (
                  <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Vídeo Gerado pelo Omni Flash
                    </span>
                    <video controls autoPlay loop className="w-full rounded-2xl shadow-md max-h-80 bg-black" src={videoResult} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. MAPS GROUNDING */}
          {activeTab === 'maps' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-200" />
                  <h3 className="font-black text-base">Exploração Cultural com Google Maps Grounding</h3>
                </div>
                <p className="text-xs text-rose-100 mt-1">
                  Descubra pontos turísticos, cafeterias e locais autênticos em cidades anglófonas com dados reais do Google Maps.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={mapsQuery}
                    onChange={(e) => setMapsQuery(e.target.value)}
                    placeholder="Ex: Cozy cafes in London to practice conversation"
                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                  <button
                    onClick={handleQueryMaps}
                    disabled={isLoading || !mapsQuery.trim()}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    <span>Buscar no Maps</span>
                  </button>
                </div>

                {mapsResult && (
                  <div className="space-y-4 pt-2 animate-in fade-in">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                      {mapsResult.text}
                    </div>

                    {mapsResult.places && mapsResult.places.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-black text-slate-700 block">Locais Verificados no Google Maps:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {mapsResult.places.map((item, idx) => {
                            const mapData = item.maps;
                            if (!mapData) return null;
                            return (
                              <a
                                key={idx}
                                href={mapData.uri}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                              >
                                <div>
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-extrabold text-xs text-slate-900 group-hover:text-indigo-600 transition-colors">
                                      {mapData.title || 'Local no Maps'}
                                    </h5>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                                  </div>
                                  {mapData.placeAnswerSources?.reviewSnippets?.[0] && (
                                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                      "{mapData.placeAnswerSources.reviewSnippets[0]}"
                                    </p>
                                  )}
                                </div>
                                <span className="text-[10px] text-indigo-600 font-bold mt-2 block">
                                  Ver detalhes no Google Maps →
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 5. BIOSCIENCE & STEM (Science Skills) */}
          {activeTab === 'science' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <Dna className="w-5 h-5 text-emerald-200" />
                  <h3 className="font-black text-base">Ciências da Vida & Artigos em Inglês (Science Skills)</h3>
                </div>
                <p className="text-xs text-emerald-100 mt-1">
                  Vocabulário científico avançado em inglês, biologia molecular, proteínas (PDB / UniProt / AlphaFold) e termos biomédicos.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Exemplos populares:</span>
                  {['Hemoglobin', 'Insulin', 'CRISPR-Cas9', 'Ribosome', 'Antibody IgG'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setScienceTopic(item);
                        handleQueryScience(item);
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={scienceTopic}
                    onChange={(e) => setScienceTopic(e.target.value)}
                    placeholder="Digite uma proteína, gene ou conceito biomédico (ex: Hemoglobin, Telomerase)"
                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                  <button
                    onClick={() => handleQueryScience()}
                    disabled={isLoading || !scienceTopic.trim()}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Dna className="w-4 h-4" />}
                    <span>Analisar</span>
                  </button>
                </div>

                {scienceResult && (
                  <div className="space-y-4 pt-2 animate-in fade-in">
                    <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-black text-sm text-emerald-950">{scienceResult.subject}</h4>
                        {scienceResult.pdbId && (
                          <span className="px-2 py-0.5 bg-white text-emerald-800 text-[10px] font-mono font-bold rounded-md border border-emerald-200">
                            PDB: {scienceResult.pdbId}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-800 leading-relaxed font-serif">
                        {scienceResult.scientificSummaryEn}
                      </p>
                      <p className="text-xs text-emerald-800 italic border-t border-emerald-200/60 pt-2">
                        {scienceResult.summaryPt}
                      </p>
                    </div>

                    {/* Scientific Vocabulary terms */}
                    {scienceResult.keyVocabulary && (
                      <div className="space-y-2">
                        <span className="text-xs font-black text-slate-800 block">Vocabulário Técnico em Inglês (com Fonética IPA):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {scienceResult.keyVocabulary.map((term: any, idx: number) => (
                            <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="font-extrabold text-xs text-slate-900">{term.term}</span>
                                <button
                                  onClick={() => speakText(term.term)}
                                  className="p-1 hover:bg-slate-100 rounded text-slate-500"
                                  title="Ouvir pronúncia"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="text-[11px] font-mono text-emerald-700 block">{term.ipa}</span>
                              <p className="text-[11px] text-slate-600 leading-normal">{term.definitionPt}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sample sentence */}
                    {scienceResult.samplePaperSentence && (
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                        <span className="font-bold text-slate-700 block">Exemplo em Artigo Científico:</span>
                        <p className="text-slate-800 italic font-serif">"{scienceResult.samplePaperSentence}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 6. VOICE & TRANSCRIBE (Live API & Transcribe 3.5) */}
          {activeTab === 'voice' && (
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-sky-200" />
                  <h3 className="font-black text-base">Conversação por Voz & Transcrição (Gemini 3.5 Transcribe & Live)</h3>
                </div>
                <p className="text-xs text-sky-100 mt-1">
                  Fale com seu microfone para transcrever com precisão fonética e praticar conversação fluida em tempo real.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center space-y-5 shadow-sm">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <button
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl transition-all cursor-pointer ${
                      isRecording
                        ? 'bg-rose-500 ring-8 ring-rose-200 animate-pulse scale-110'
                        : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                  <div>
                    <span className="font-black text-sm text-slate-900 block">
                      {isRecording ? 'Gravando sua fala em inglês...' : 'Clique no Microfone para Falar'}
                    </span>
                    <span className="text-xs text-slate-500">
                      {isRecording ? 'Clique novamente para concluir e processar' : 'Diga uma frase em inglês'}
                    </span>
                  </div>
                </div>

                {isLoading && (
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-indigo-600">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processando áudio com gemini-3.5-transcribe...</span>
                  </div>
                )}

                {/* Transcribed text box */}
                {transcribedText && (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Transcrito com gemini-3.5-transcribe:
                      </span>
                      <button
                        onClick={() => speakText(transcribedText)}
                        className="p-1 hover:bg-slate-200 rounded text-slate-600"
                        title="Ouvir sua frase"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">"{transcribedText}"</p>
                  </div>
                )}

                {/* AI Tutor Live Response */}
                {liveVoiceReply && (
                  <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-left space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                        Resposta do Tutor (Gemini 3.8 Live):
                      </span>
                      <button
                        onClick={() => speakText(liveVoiceReply)}
                        className="p-1 hover:bg-indigo-200 rounded text-indigo-700"
                        title="Ouvir resposta"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-indigo-950">"{liveVoiceReply}"</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
