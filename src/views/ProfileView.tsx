import React, { useState } from 'react';
import {
  Award,
  Shield,
  Settings,
  Sparkles,
  Flame,
  Gem,
  Zap,
  CheckCircle2,
  ShoppingBag,
  Volume2,
  Lock,
  UserCheck,
  Camera,
  Smile,
  Check,
  Palette,
  User,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';
import { MascotLingo } from '../components/MascotLingo';
import { SHOP_CATALOG } from '../components/ShopModal';

interface ProfileViewProps {
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
  onOpenCertificate: () => void;
  onOpenCefrTest: () => void;
  onOpenUpgradeModal: () => void;
  onOpenShopModal?: () => void;
}

interface AvatarPreset {
  emoji: string;
  name: string;
  category: 'space' | 'animals' | 'scholars' | 'legends' | 'world';
  description: string;
  bgGradient: string;
  badge?: string;
}

const AVATAR_PRESETS: AvatarPreset[] = [
  // Espaço & Sci-Fi
  {
    emoji: '🚀',
    name: 'Foguete Cósmico',
    category: 'space',
    description: 'Rumo à fluência na velocidade da luz',
    bgGradient: 'from-indigo-600 to-sky-500',
    badge: 'Padrão',
  },
  {
    emoji: '👨‍🚀',
    name: 'Astronauta Alfa',
    category: 'space',
    description: 'Pioneiro em novas galáxias linguísticas',
    bgGradient: 'from-blue-600 to-cyan-500',
  },
  {
    emoji: '👩‍🚀',
    name: 'Astronauta Ômega',
    category: 'space',
    description: 'Exploradora de fronteiras cósmicas',
    bgGradient: 'from-violet-600 to-indigo-500',
  },
  {
    emoji: '🛸',
    name: 'Nave Quântica',
    category: 'space',
    description: 'Tradução mental instantânea',
    bgGradient: 'from-teal-600 to-emerald-400',
  },
  {
    emoji: '🪐',
    name: 'Planeta Saturno',
    category: 'space',
    description: 'Órbita perfeita de foco e estudo diário',
    bgGradient: 'from-amber-600 to-orange-400',
  },
  {
    emoji: '🤖',
    name: 'Androide Poliglota',
    category: 'space',
    description: 'Processador de centenas de regras gramaticais',
    bgGradient: 'from-slate-700 to-zinc-500',
  },
  {
    emoji: '🌌',
    name: 'Galáxia Espiral',
    category: 'space',
    description: 'Universo infinito de histórias e diálogos',
    bgGradient: 'from-purple-800 to-indigo-600',
  },
  {
    emoji: '⭐',
    name: 'Supernova',
    category: 'space',
    description: 'Brilho incomparável em cada conquista',
    bgGradient: 'from-yellow-500 to-amber-600',
  },

  // Mascotes & Animais Sábios
  {
    emoji: '🦉',
    name: 'Coruja Sábia (Lingo)',
    category: 'animals',
    description: 'Vigilante noturna do vocabulário e pronúncia',
    bgGradient: 'from-emerald-600 to-teal-500',
    badge: 'Mascote',
  },
  {
    emoji: '🦊',
    name: 'Raposa Astuta',
    category: 'animals',
    description: 'Estratégia veloz para vencer desafios de gramática',
    bgGradient: 'from-orange-500 to-amber-500',
  },
  {
    emoji: '🦁',
    name: 'Leão Nobre',
    category: 'animals',
    description: 'Liderança e determinação inabalável na Arena',
    bgGradient: 'from-amber-600 to-yellow-500',
  },
  {
    emoji: '🐼',
    name: 'Panda Zen',
    category: 'animals',
    description: 'Foco sereno e consistência em cada lição',
    bgGradient: 'from-slate-800 to-slate-600',
  },
  {
    emoji: '🦅',
    name: 'Águia Real',
    category: 'animals',
    description: 'Visão panorâmica e domínio do CEFR avançado',
    bgGradient: 'from-cyan-700 to-blue-600',
  },
  {
    emoji: '🐺',
    name: 'Lobo Alfa',
    category: 'animals',
    description: 'Espírito destemido na Liga Semanal',
    bgGradient: 'from-indigo-800 to-slate-700',
  },
  {
    emoji: '🐯',
    name: 'Tigre Veloz',
    category: 'animals',
    description: 'Agilidade máxima no Speed Round de vocabulário',
    bgGradient: 'from-orange-600 to-red-500',
  },
  {
    emoji: '🦄',
    name: 'Unicórnio Mágico',
    category: 'animals',
    description: 'Criatividade encantadora e conversação fluida',
    bgGradient: 'from-pink-500 to-purple-500',
  },

  // Mestres & Acadêmicos
  {
    emoji: '🎓',
    name: 'Graduado CEFR',
    category: 'scholars',
    description: 'Excelência acadêmica e precisão gramatical',
    bgGradient: 'from-blue-700 to-indigo-600',
    badge: 'Certificado',
  },
  {
    emoji: '🧙‍♂️',
    name: 'Mago dos Idiomas',
    category: 'scholars',
    description: 'Fórmulas verbais perfeitas e phrasal verbs',
    bgGradient: 'from-purple-700 to-indigo-800',
  },
  {
    emoji: '👩‍🏫',
    name: 'Mentora Global',
    category: 'scholars',
    description: 'Didática e inspiração para a fluência real',
    bgGradient: 'from-rose-600 to-pink-500',
  },
  {
    emoji: '🧑‍💻',
    name: 'Dev Internacional',
    category: 'scholars',
    description: 'Dominando o inglês técnico e de negócios',
    bgGradient: 'from-emerald-700 to-teal-600',
  },
  {
    emoji: '🕵️‍♂️',
    name: 'Detetive Fonético',
    category: 'scholars',
    description: 'Identificando nuances de sotaques e pronúncias',
    bgGradient: 'from-slate-700 to-indigo-900',
  },
  {
    emoji: '🎨',
    name: 'Artista Expressivo',
    category: 'scholars',
    description: 'Comunicação viva, colorida e desinibida',
    bgGradient: 'from-fuchsia-600 to-rose-500',
  },

  // Campeões & Lendas
  {
    emoji: '👑',
    name: 'Coroa da Fluência',
    category: 'legends',
    description: 'Soberano das conversações sem barreiras',
    bgGradient: 'from-amber-500 to-yellow-400',
    badge: 'Elite',
  },
  {
    emoji: '💎',
    name: 'Diamante Cristalino',
    category: 'legends',
    description: 'Pronúncia impecável e resistência a falhas',
    bgGradient: 'from-cyan-500 to-blue-400',
  },
  {
    emoji: '⚡',
    name: 'Relâmpago da Ofensiva',
    category: 'legends',
    description: 'Sequência veloz de dias sem perder o foco',
    bgGradient: 'from-amber-400 to-orange-500',
  },
  {
    emoji: '🛡️',
    name: 'Guardião Gramatical',
    category: 'legends',
    description: 'Defesa sólida contra erros de concordância',
    bgGradient: 'from-sky-700 to-indigo-800',
  },
  {
    emoji: '🏆',
    name: 'Campeão da Arena',
    category: 'legends',
    description: 'Destaque no topo do pódio dos rankings',
    bgGradient: 'from-amber-600 to-orange-600',
  },
  {
    emoji: '🔥',
    name: 'Fênix Ardente',
    category: 'legends',
    description: 'Aprende com cada erro e se supera a cada dia',
    bgGradient: 'from-red-600 to-amber-500',
  },

  // Mundo & Conexão Global
  {
    emoji: '🌍',
    name: 'Cidadão do Mundo',
    category: 'world',
    description: 'Conexão aberta com todas as culturas globais',
    bgGradient: 'from-blue-600 to-emerald-500',
  },
  {
    emoji: '✈️',
    name: 'Viajante Internacional',
    category: 'world',
    description: 'Bagagem repleta de diálogos em aeroportos e viagens',
    bgGradient: 'from-sky-500 to-indigo-600',
  },
  {
    emoji: '🎯',
    name: 'Meta Batida',
    category: 'world',
    description: 'Foco diário nos minutos de estudo programados',
    bgGradient: 'from-rose-600 to-red-500',
  },
  {
    emoji: '☕',
    name: 'Café & Bate-Papo',
    category: 'world',
    description: 'Pronto para uma conversa fluida e descontraída',
    bgGradient: 'from-amber-800 to-amber-600',
  },
];

const QUICK_EMOJIS = ['🦊', '🦁', '🦉', '🚀', '⭐', '💎', '👑', '⚡', '🎓', '🦄', '🐲', '🐬', '🌺', '🎸', '⚽', '🎯'];

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  onUpdateUser,
  onOpenCertificate,
  onOpenCefrTest,
  onOpenUpgradeModal,
  onOpenShopModal,
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'avatars' | 'shop' | 'settings'>('stats');
  const [avatarCategory, setAvatarCategory] = useState<'all' | 'space' | 'animals' | 'scholars' | 'legends' | 'world'>('all');
  const [customEmojiInput, setCustomEmojiInput] = useState('');
  const [notification, setNotification] = useState<{ message: string; emoji: string } | null>(null);

  const competenciesList = [
    { key: 'listening', label: 'Compreensão Auditiva (Listening)', score: user.competencies.listening, color: 'bg-sky-500' },
    { key: 'speaking', label: 'Expressão Oral (Speaking)', score: user.competencies.speaking, color: 'bg-emerald-500' },
    { key: 'reading', label: 'Leitura & Textos (Reading)', score: user.competencies.reading, color: 'bg-indigo-500' },
    { key: 'writing', label: 'Construção Escrita (Writing)', score: user.competencies.writing, color: 'bg-purple-500' },
    { key: 'grammar', label: 'Domínio Gramatical (Grammar)', score: user.competencies.grammar, color: 'bg-amber-500' },
    { key: 'vocabulary', label: 'Retenção de Vocabulário (Vocabulary)', score: user.competencies.vocabulary, color: 'bg-rose-500' },
    { key: 'pronunciation', label: 'Pronúncia & Fonética (Pronunciation)', score: user.competencies.pronunciation, color: 'bg-teal-500' },
  ];

  const shopItems = [
    {
      id: 'freeze-potion',
      name: 'Congelamento de Ofensiva (Streak Freeze)',
      desc: 'Protege sua sequência de dias caso você esqueça de estudar um dia.',
      costGems: 40,
      icon: '🧊',
    },
    {
      id: 'double-xp',
      name: 'Poção de XP em Dobro (30 min)',
      desc: 'Dobre seus pontos de experiência em todas as fases e histórias.',
      costGems: 30,
      icon: '🧪',
    },
    {
      id: 'wizard-costume',
      name: 'Traje: Sábio Cósmico para o Lingo',
      desc: 'Veste seu mascote Lingo com chapéu estrelado e visor holográfico dourado.',
      costGems: 60,
      icon: '🧙‍♂️',
    },
  ];

  const handleBuyItem = (item: (typeof shopItems)[0]) => {
    if (user.gems < item.costGems) {
      alert('Você precisa de mais Gemas Lingo! Complete fases e revisões para ganhar mais.');
      return;
    }
    const updatedInventory = [...user.inventory, item.id];
    onUpdateUser({
      gems: user.gems - item.costGems,
      inventory: updatedInventory,
    });
    alert(`Parabéns! Você adquiriu ${item.name}!`);
  };

  const handleSelectAvatar = (emoji: string, name?: string) => {
    onUpdateUser({ avatar: emoji });
    setNotification({
      message: name ? `Avatar "${name}" selecionado!` : `Avatar ${emoji} atualizado com sucesso!`,
      emoji,
    });
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.35 },
      });
    } catch {
      // ignore
    }
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleApplyCustomEmoji = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customEmojiInput.trim();
    if (!clean) return;
    // Extract first graphical character / emoji
    const emojiChar = Array.from(clean)[0] || clean.slice(0, 2);
    handleSelectAvatar(emojiChar, `Personalizado (${emojiChar})`);
    setCustomEmojiInput('');
  };

  const currentPreset = AVATAR_PRESETS.find((p) => p.emoji === user.avatar);

  const filteredAvatars =
    avatarCategory === 'all'
      ? AVATAR_PRESETS
      : AVATAR_PRESETS.filter((p) => p.category === avatarCategory);

  return (
    <div className="space-y-6 pb-16">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-top duration-300">
          <span className="text-2xl">{notification.emoji}</span>
          <div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Salvo no perfil
            </div>
            <div className="text-xs font-semibold text-slate-200">{notification.message}</div>
          </div>
        </div>
      )}

      {/* Profile Header Card */}
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          {/* Avatar with click-to-edit action */}
          <div className="relative group">
            <div
              onClick={() => setActiveTab('avatars')}
              title="Clique para escolher outro avatar"
              className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${
                currentPreset?.bgGradient || 'from-indigo-600 to-sky-500'
              } flex items-center justify-center text-4xl shadow-lg ring-4 ring-white cursor-pointer transition-transform group-hover:scale-105 active:scale-95`}
            >
              {user.avatar}
            </div>

            <button
              onClick={() => setActiveTab('avatars')}
              title="Alterar avatar visual"
              className="absolute -bottom-1 -right-1 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md transition-all hover:scale-110 active:scale-90 cursor-pointer border-2 border-white flex items-center justify-center"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>

            {user.isMinor && (
              <span className="absolute -top-2 -left-1 px-2 py-0.5 bg-amber-500 text-white text-[10px] font-black rounded-full shadow-xs">
                Kids Safe
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h3 className="text-xl font-black text-slate-900">{user.name}</h3>
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-mono font-bold rounded-lg">
                CEFR {user.cefrLevel}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
            <div className="flex items-center gap-3 mt-2 justify-center sm:justify-start">
              <span className="text-[11px] font-semibold text-slate-600">
                Plano: <span className="font-extrabold capitalize text-indigo-600">{user.plan}</span>
              </span>
              <button
                onClick={onOpenUpgradeModal}
                className="text-[11px] text-amber-600 font-bold hover:underline cursor-pointer"
              >
                (Gerenciar Planos)
              </button>
              <button
                onClick={() => setActiveTab('avatars')}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <Smile className="w-3 h-3" />
                <span>Mudar Avatar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certificate CTA */}
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <button
            onClick={onOpenCertificate}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Emitir Certificado CEFR</span>
          </button>
          <button
            onClick={onOpenCefrTest}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
          >
            Refazer Teste de Nivelamento
          </button>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl max-w-xl mx-auto text-xs font-bold">
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer ${
            activeTab === 'stats'
              ? 'bg-white shadow-xs text-indigo-700 font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Evolução
        </button>
        <button
          onClick={() => setActiveTab('avatars')}
          className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'avatars'
              ? 'bg-white shadow-xs text-indigo-700 font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Smile className="w-3.5 h-3.5 text-indigo-500" />
          <span>Avatares</span>
        </button>
        <button
          onClick={() => setActiveTab('shop')}
          className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer ${
            activeTab === 'shop'
              ? 'bg-white shadow-xs text-indigo-700 font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Loja de Itens
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-white shadow-xs text-indigo-700 font-extrabold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Configurações
        </button>
      </div>

      {/* 1. Stats and Competencies */}
      {activeTab === 'stats' && (
        <div className="space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Fases Concluídas</span>
              <div className="text-2xl font-black text-slate-900 mt-1">{user.completedPhaseIds.length}</div>
              <span className="text-[10px] text-indigo-600 font-semibold">Territórios explorados</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Ofensiva Diária</span>
              <div className="text-2xl font-black text-amber-500 mt-1 flex items-center gap-1">
                <Flame className="w-6 h-6 fill-amber-500" />
                <span>{user.dailyStreak ?? user.streakDays} dias</span>
              </div>
              <span className="text-[10px] text-slate-500">Meta diária: {user.dailyGoalMinutes} min</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Gemas Coletadas</span>
              <div className="text-2xl font-black text-sky-500 mt-1 flex items-center gap-1">
                <Gem className="w-5 h-5 fill-sky-400" />
                <span>{user.gems}</span>
              </div>
              <span className="text-[10px] text-slate-500">Saldo disponível</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase">XP Total</span>
              <div className="text-2xl font-black text-indigo-600 mt-1 flex items-center gap-1">
                <Zap className="w-5 h-5 fill-indigo-500" />
                <span>{user.xp}</span>
              </div>
              <span className="text-[10px] text-slate-500">Pontos de fluência</span>
            </div>
          </div>

          {/* 7 Competencies Progress Breakdown */}
          <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-black text-sm sm:text-base text-slate-900">Diagnóstico Real por Competência</h4>
                <p className="text-xs text-slate-500">
                  Atualizado continuamente pelo Lingo Brain com base nos seus acertos e tentativas.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {competenciesList.map((comp) => (
                <div key={comp.key} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{comp.label}</span>
                    <span className="font-mono text-slate-900">{comp.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${comp.color} rounded-full transition-all duration-500`}
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. Avatar Selection & Customization Section */}
      {activeTab === 'avatars' && (
        <div className="space-y-6">
          {/* Active Avatar Spotlight Card */}
          <div className="p-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl shadow-md border border-indigo-700/50">
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                {/* Glowing Avatar Preview */}
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-indigo-400 rounded-3xl blur-sm opacity-70 animate-pulse" />
                  <div
                    className={`relative w-24 h-24 rounded-3xl bg-gradient-to-tr ${
                      currentPreset?.bgGradient || 'from-indigo-600 to-sky-500'
                    } flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/20`}
                  >
                    {user.avatar}
                  </div>
                  <span className="absolute -bottom-2 -right-1 px-2.5 py-0.5 bg-emerald-500 text-white text-[10px] font-black rounded-full shadow-md flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ativo
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-[10px] font-mono font-bold uppercase rounded-full">
                    Identidade Visual da Conta
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white">
                    {currentPreset ? currentPreset.name : `Avatar Customizado (${user.avatar})`}
                  </h4>
                  <p className="text-xs text-indigo-200 max-w-md">
                    {currentPreset
                      ? currentPreset.description
                      : 'Seu símbolo visual personalizado exibido no perfil, na Arena da Liga e nas comemorações de fase.'}
                  </p>
                  <div className="flex items-center gap-2 pt-1 justify-center sm:justify-start text-xs font-semibold text-indigo-300">
                    <span>Usuário: <strong className="text-white">{user.name}</strong></span>
                    <span>•</span>
                    <span>Nível: <strong className="text-amber-300">{user.cefrLevel}</strong></span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-center max-w-xs w-full sm:w-auto">
                <span className="text-[11px] text-indigo-200 block font-semibold">Onde este avatar aparece?</span>
                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-white font-bold">
                  <span>🏆 Arena da Liga</span>
                  <span>•</span>
                  <span>🎮 Jogos</span>
                  <span>•</span>
                  <span>📜 Certificados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Catalog & Filter Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  <span>Galeria de Avatares Temáticos</span>
                </h4>
                <p className="text-xs text-slate-500">
                  Clique em qualquer avatar para equipá-lo instantaneamente na sua conta.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-bold scrollbar-none">
                <button
                  onClick={() => setAvatarCategory('all')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'all'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Todos ({AVATAR_PRESETS.length})
                </button>
                <button
                  onClick={() => setAvatarCategory('space')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'space'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  🚀 Espaço
                </button>
                <button
                  onClick={() => setAvatarCategory('animals')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'animals'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  🦉 Mascotes
                </button>
                <button
                  onClick={() => setAvatarCategory('scholars')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'scholars'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  🎓 Mestres
                </button>
                <button
                  onClick={() => setAvatarCategory('legends')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'legends'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  👑 Lendas
                </button>
                <button
                  onClick={() => setAvatarCategory('world')}
                  className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                    avatarCategory === 'world'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  🌍 Mundo
                </button>
              </div>
            </div>

            {/* Avatars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 pt-1">
              {filteredAvatars.map((preset) => {
                const isSelected = user.avatar === preset.emoji;
                return (
                  <div
                    key={preset.name}
                    onClick={() => handleSelectAvatar(preset.emoji, preset.name)}
                    className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-md ring-2 ring-indigo-400/40'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Badge if present */}
                    {preset.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[9px] font-black uppercase rounded-md">
                        {preset.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${preset.bgGradient} flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110`}
                      >
                        {preset.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-extrabold text-sm text-slate-900 truncate">{preset.name}</h5>
                        <span className="text-[10px] text-slate-400 capitalize block font-medium">
                          {preset.category === 'space' && 'Espacial'}
                          {preset.category === 'animals' && 'Mascote'}
                          {preset.category === 'scholars' && 'Acadêmico'}
                          {preset.category === 'legends' && 'Lendário'}
                          {preset.category === 'world' && 'Global'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                      {preset.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-indigo-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                          <span>Equipado</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-500 group-hover:text-indigo-600 transition-colors">
                          Escolher avatar
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-indigo-600">
                        {isSelected ? '★' : '→'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Exclusive Shop Skins Collection Showcase */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="font-black text-sm sm:text-base text-slate-900 flex items-center gap-2">
                    <Gem className="w-4 h-4 fill-sky-400 text-sky-500" />
                    <span>Skins Exclusivas da Loja de Gemas</span>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black uppercase rounded-md shadow-2xs">
                      Especiais
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    Desbloqueie com suas Gemas na Loja e equipe instantaneamente como seu avatar oficial.
                  </p>
                </div>
                {onOpenShopModal && (
                  <button
                    onClick={onOpenShopModal}
                    className="px-3.5 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 font-extrabold text-xs rounded-xl border border-sky-200 flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Ir para a Loja ({user.gems} 💎)</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SHOP_CATALOG.filter((i) => i.category === 'skin').map((skin) => {
                  const isOwned = user.inventory.includes(skin.id);
                  const isEquipped = skin.avatarEmoji === user.avatar;

                  return (
                    <div
                      key={skin.id}
                      onClick={() => {
                        if (isOwned && skin.avatarEmoji) {
                          handleSelectAvatar(skin.avatarEmoji, skin.name);
                        } else if (onOpenShopModal) {
                          onOpenShopModal();
                        }
                      }}
                      className={`relative p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                        isEquipped
                          ? 'border-indigo-600 bg-indigo-50/70 shadow-md ring-2 ring-indigo-300'
                          : isOwned
                          ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-400'
                          : 'border-slate-200 bg-slate-50/70 hover:border-indigo-300 opacity-90'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${skin.gradient} flex items-center justify-center text-2xl shadow-xs shrink-0 transition-transform group-hover:scale-105`}
                        >
                          {skin.icon}
                        </div>
                        <div className="min-w-0">
                          <h6 className="font-extrabold text-xs text-slate-900 truncate">{skin.name}</h6>
                          <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                            {isOwned ? (
                              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> No Inventário
                              </span>
                            ) : (
                              <span className="flex items-center gap-0.5 text-sky-700 font-bold">
                                <Gem className="w-3 h-3 fill-sky-400" /> {skin.costGems}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                        {isEquipped ? (
                          <span className="text-indigo-700 font-black flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Ativo
                          </span>
                        ) : isOwned ? (
                          <span className="text-emerald-700 font-extrabold group-hover:underline">
                            Equipar Skin
                          </span>
                        ) : (
                          <span className="text-indigo-600 font-bold group-hover:underline">
                            Desbloquear na Loja
                          </span>
                        )}
                        <span className="text-slate-400">→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom Emoji / Symbol Input Box */}
            <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Smile className="w-4 h-4 text-indigo-600" />
                <h5 className="text-xs font-extrabold text-slate-900">
                  Ou digite qualquer emoji personalizado para sua conta:
                </h5>
              </div>

              <form onSubmit={handleApplyCustomEmoji} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  maxLength={4}
                  placeholder="Ex: 🦄, ⚽, 🐉, 🥷"
                  value={customEmojiInput}
                  onChange={(e) => setCustomEmojiInput(e.target.value)}
                  className="w-full sm:w-64 px-3.5 py-2 text-center sm:text-left text-sm font-bold bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!customEmojiInput.trim()}
                  className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors"
                >
                  Salvar Emoji Personalizado
                </button>
              </form>

              {/* Quick Picks row */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <span className="text-[10px] text-slate-400 font-semibold mr-1">Sugestões rápidas:</span>
                {QUICK_EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleSelectAvatar(emoji, `Avatar ${emoji}`)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-base flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-2xs"
                    title={`Equipar ${emoji}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Shop & Inventory */}
      {activeTab === 'shop' && (
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-base text-slate-900">Loja de Itens & Inventário</h4>
                <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-black uppercase rounded-md">
                  Gemas & Skins
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Troque suas Gemas por Congeladores de Ofensiva (Streak Freeze) e skins exclusivas para seu avatar.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 text-sky-700 font-black text-xs rounded-xl border border-sky-200">
                <Gem className="w-4 h-4 fill-sky-400 text-sky-500" />
                <span>{user.gems} Gemas</span>
              </div>
              {onOpenShopModal && (
                <button
                  onClick={onOpenShopModal}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Abrir Loja Completa</span>
                </button>
              )}
            </div>
          </div>

          {/* Current Inventory Summary Card */}
          <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-indigo-200 flex items-center justify-center text-xl shadow-xs">
                🎒
              </div>
              <div>
                <span className="font-bold text-slate-800 block">Itens no seu Inventário ({user.inventory.length} total)</span>
                <span className="text-slate-500 text-[11px]">
                  Congelador de Ofensiva: <strong>{user.inventory.filter((i) => i === 'freeze-potion').length} un</strong> • Poção XP: <strong>{user.inventory.filter((i) => i === 'double-xp').length} un</strong>
                </span>
              </div>
            </div>
            {onOpenShopModal && (
              <button
                onClick={onOpenShopModal}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-extrabold underline cursor-pointer"
              >
                Gerenciar e Equipar Skins →
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shopItems.map((item) => {
              const alreadyOwned = user.inventory.includes(item.id);
              return (
                <div key={item.id} className="p-4 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <h5 className="font-extrabold text-sm text-slate-900">{item.name}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs font-black text-sky-600">
                      <Gem className="w-3.5 h-3.5 fill-sky-400" />
                      <span>{item.costGems} Gemas</span>
                    </div>
                    <button
                      onClick={() => handleBuyItem(item)}
                      disabled={alreadyOwned || user.gems < item.costGems}
                      className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-colors cursor-pointer ${
                        alreadyOwned
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : user.gems < item.costGems
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                      }`}
                    >
                      {alreadyOwned ? 'Adquirido' : 'Comprar'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Settings & Protection */}
      {activeTab === 'settings' && (
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
          <h4 className="font-black text-base text-slate-900">Preferências & Proteção de Menores</h4>

          <div className="space-y-4 text-xs">
            {/* Avatar shortcut in settings */}
            <div className="flex items-center justify-between p-3.5 bg-indigo-50 rounded-2xl border border-indigo-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-indigo-200 flex items-center justify-center text-2xl shadow-xs">
                  {user.avatar}
                </div>
                <div>
                  <span className="font-bold text-indigo-950 text-sm block">Avatar da Conta</span>
                  <span className="text-indigo-700">Selecione uma identidade visual para suas conquistas e ranking</span>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('avatars')}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Alterar Avatar</span>
              </button>
            </div>

            {/* Minor Protection / Kids Safe Mode */}
            <div className="flex items-center justify-between p-3.5 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="space-y-0.5">
                <span className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                  <Shield className="w-4 h-4 text-amber-600" />
                  Modo Proteção de Menores (Kids Safe)
                </span>
                <p className="text-amber-800">
                  Desativa mensagens abertas de terceiros, aplica filtro rigoroso de vocabulário e remove anúncios externos comportamentais.
                </p>
              </div>
              <input
                type="checkbox"
                checked={user.isMinor}
                onChange={(e) => onUpdateUser({ isMinor: e.target.checked })}
                className="w-5 h-5 rounded-md text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
            </div>

            {/* Audio Effects Toggle */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div>
                <span className="font-bold text-slate-800 text-sm block">Efeitos Sonoros</span>
                <span className="text-slate-500">Tocar sons de comemoração e cliques</span>
              </div>
              <input
                type="checkbox"
                checked={user.soundEnabled}
                onChange={(e) => onUpdateUser({ soundEnabled: e.target.checked })}
                className="w-5 h-5 rounded-md text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
            </div>

            {/* Auto Speak Toggle */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div>
                <span className="font-bold text-slate-800 text-sm block">Pronúncia Automática</span>
                <span className="text-slate-500">Reproduzir áudio em inglês automaticamente ao abrir exercícios</span>
              </div>
              <input
                type="checkbox"
                checked={user.autoSpeak}
                onChange={(e) => onUpdateUser({ autoSpeak: e.target.checked })}
                className="w-5 h-5 rounded-md text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
            </div>

            {/* Speech Speed Slider */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center font-bold text-slate-800 text-sm">
                <span>Velocidade da Voz em Inglês</span>
                <span className="font-mono text-indigo-600">{user.speechSpeed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.2"
                step="0.1"
                value={user.speechSpeed}
                onChange={(e) => onUpdateUser({ speechSpeed: parseFloat(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Lenta (0.7x)</span>
                <span>Normal (1.0x)</span>
                <span>Rápida (1.2x)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
