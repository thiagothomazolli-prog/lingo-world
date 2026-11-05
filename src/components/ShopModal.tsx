import React, { useState } from 'react';
import {
  X,
  Gem,
  ShoppingBag,
  Check,
  Shield,
  Sparkles,
  Zap,
  Flame,
  CheckCircle2,
  Package,
  ArrowRight,
  Info,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  costGems: number;
  category: 'consumable' | 'skin';
  icon: string;
  avatarEmoji?: string;
  gradient: string;
  badge?: string;
  maxStock?: number;
}

export const SHOP_CATALOG: ShopItem[] = [
  // 1. Consumíveis e Proteções de Ofensiva
  {
    id: 'freeze-potion',
    name: 'Congelador de Ofensiva (Streak Freeze)',
    description: 'Protege sua sequência diária se você esquecer ou não puder estudar por um dia. Consumido automaticamente quando necessário.',
    costGems: 40,
    category: 'consumable',
    icon: '🧊',
    gradient: 'from-sky-500 to-blue-600',
    badge: 'Mais Popular',
    maxStock: 5,
  },
  {
    id: 'double-xp',
    name: 'Poção de XP em Dobro (30 min)',
    description: 'Dobra todos os pontos de experiência ganhos em fases do mapa, desafios de velocidade e histórias interativas.',
    costGems: 35,
    category: 'consumable',
    icon: '🧪',
    gradient: 'from-purple-500 to-indigo-600',
    maxStock: 5,
  },
  {
    id: 'streak-repair',
    name: 'Kit de Restauração de Ofensiva',
    description: 'Permite recuperar até 3 dias perdidos da sua ofensiva caso sua sequência tenha sido reiniciada acidentalmente.',
    costGems: 65,
    category: 'consumable',
    icon: '❤️‍🔥',
    gradient: 'from-amber-500 to-orange-600',
    badge: 'Salva-Vidas',
    maxStock: 3,
  },
  {
    id: 'chest-boost',
    name: 'Baú Raro de Vocabulário & Áudio',
    description: 'Desbloqueia instantaneamente 5 novos cartões com frases idiomáticas avançadas gravadas por falantes nativos.',
    costGems: 30,
    category: 'consumable',
    icon: '📦',
    gradient: 'from-emerald-500 to-teal-600',
    maxStock: 10,
  },

  // 2. Skins Exclusivas para Avatar da Conta
  {
    id: 'skin-cyber-dragon',
    name: 'Dragão Cibernético Quântico',
    description: 'Skin mítica com chamas de neon. Exibe imponência na Arena da Liga e em todas as suas vitórias de fase.',
    costGems: 80,
    category: 'skin',
    icon: '🐉',
    avatarEmoji: '🐉',
    gradient: 'from-cyan-600 to-blue-700',
    badge: 'Mítico',
  },
  {
    id: 'skin-golden-phoenix',
    name: 'Fênix Imperial de Fogo',
    description: 'Skin de fênix resplandecente. O símbolo dos poliglotas que renascem com cada erro superado.',
    costGems: 95,
    category: 'skin',
    icon: '🦅',
    avatarEmoji: '🦅',
    gradient: 'from-amber-500 to-red-600',
    badge: 'Lendário',
  },
  {
    id: 'skin-steampunk-owl',
    name: 'Coruja Steampunk com Monóculo',
    description: 'Mascote com engrenagens de latão e lentes de alta precisão fonética para os mestres do CEFR.',
    costGems: 75,
    category: 'skin',
    icon: '🦉',
    avatarEmoji: '🦉',
    gradient: 'from-amber-700 to-yellow-600',
  },
  {
    id: 'skin-cosmic-astronaut',
    name: 'Explorador do Hiperespaço',
    description: 'Traje estelar com viseira de ouro para cruzar as galáxias do vocabulário internacional.',
    costGems: 70,
    category: 'skin',
    icon: '👨‍🚀',
    avatarEmoji: '👨‍🚀',
    gradient: 'from-indigo-600 to-violet-700',
  },
  {
    id: 'skin-neon-samurai',
    name: 'Samurai Neon da Noite',
    description: 'Guerreiro da fluência, cortando a hesitação e falando com precisão cirúrgica.',
    costGems: 85,
    category: 'skin',
    icon: '🥷',
    avatarEmoji: '🥷',
    gradient: 'from-fuchsia-600 to-purple-800',
    badge: 'Exclusivo',
  },
  {
    id: 'skin-mythic-crown',
    name: 'Coroa Imperial dos Poliglotas',
    description: 'A jóia dourada definitiva que coroa o topo dos maiores acumuladores de XP do Lingo World.',
    costGems: 110,
    category: 'skin',
    icon: '👑',
    avatarEmoji: '👑',
    gradient: 'from-yellow-400 to-amber-600',
    badge: 'Realeza',
  },
  {
    id: 'skin-quantum-tiger',
    name: 'Tigre Quântico Prismático',
    description: 'Velocidade e garras afiadas para vencer qualquer rodada de listening ou gramática em tempo recorde.',
    costGems: 80,
    category: 'skin',
    icon: '🐯',
    avatarEmoji: '🐯',
    gradient: 'from-orange-500 to-pink-600',
  },
  {
    id: 'skin-magic-unicorn',
    name: 'Unicórnio Celestial das Galáxias',
    description: 'Brilho cósmico e imaginação sem limites para destravar conversas fluidas com nativos.',
    costGems: 75,
    category: 'skin',
    icon: '🦄',
    avatarEmoji: '🦄',
    gradient: 'from-pink-500 to-indigo-500',
  },
];

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateUser,
}) => {
  const [filter, setFilter] = useState<'all' | 'consumable' | 'skin' | 'inventory'>('all');
  const [purchaseToast, setPurchaseToast] = useState<{
    message: string;
    icon: string;
  } | null>(null);

  if (!isOpen) return null;

  // Inventory counting
  const getItemCountInInventory = (itemId: string) => {
    return user.inventory.filter((id) => id === itemId).length;
  };

  const handleBuy = (item: ShopItem) => {
    if (user.gems < item.costGems) {
      alert(`Você tem ${user.gems} Gemas, mas este item custa ${item.costGems} Gemas. Complete fases, revise flashcards ou mantenha sua ofensiva diária para acumular mais!`);
      return;
    }

    // Check max stock if consumable
    if (item.category === 'consumable' && item.maxStock) {
      const currentCount = getItemCountInInventory(item.id);
      if (currentCount >= item.maxStock) {
        alert(`Você já possui o estoque máximo (${item.maxStock}) deste item no seu inventário! Use-os antes de comprar mais.`);
        return;
      }
    }

    // Check if skin already owned
    if (item.category === 'skin' && user.inventory.includes(item.id)) {
      alert('Você já possui esta skin exclusiva no seu inventário!');
      return;
    }

    const updatedGems = user.gems - item.costGems;
    const updatedInventory = [...user.inventory, item.id];

    // If it's a skin, automatically equip it as the avatar or keep existing
    const partialUpdate: Partial<UserProfile> = {
      gems: updatedGems,
      inventory: updatedInventory,
    };

    if (item.category === 'skin' && item.avatarEmoji) {
      partialUpdate.avatar = item.avatarEmoji;
    }

    onUpdateUser(partialUpdate);

    // Confetti effect
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.3 },
      });
    } catch {
      // ignore
    }

    setPurchaseToast({
      message: item.category === 'skin'
        ? `Skin "${item.name}" desbloqueada e equipada!`
        : `"${item.name}" adicionado ao seu inventário!`,
      icon: item.icon,
    });

    setTimeout(() => {
      setPurchaseToast(null);
    }, 4000);
  };

  const handleEquipSkin = (item: ShopItem) => {
    if (!item.avatarEmoji) return;
    onUpdateUser({ avatar: item.avatarEmoji });

    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.35 },
      });
    } catch {
      // ignore
    }

    setPurchaseToast({
      message: `Avatar atualizado para ${item.avatarEmoji} (${item.name})!`,
      icon: item.avatarEmoji,
    });

    setTimeout(() => {
      setPurchaseToast(null);
    }, 3500);
  };

  // Filter items
  const displayItems = SHOP_CATALOG.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'consumable') return item.category === 'consumable';
    if (filter === 'skin') return item.category === 'skin';
    if (filter === 'inventory') return user.inventory.includes(item.id);
    return true;
  });

  const streakFreezeCount = getItemCountInInventory('freeze-potion');
  const doubleXpCount = getItemCountInInventory('double-xp');
  const streakRepairCount = getItemCountInInventory('streak-repair');
  const ownedSkinsCount = SHOP_CATALOG.filter((i) => i.category === 'skin' && user.inventory.includes(i.id)).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Floating Toast Notification */}
        {purchaseToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-top duration-300">
            <span className="text-2xl">{purchaseToast.icon}</span>
            <div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Compra Realizada
              </div>
              <div className="text-xs font-semibold text-slate-200">{purchaseToast.message}</div>
            </div>
          </div>
        )}

        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">Loja de Gemas & Inventário</h3>
                <span className="px-2 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase rounded-md shadow-xs">
                  Oficial
                </span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                Gaste suas Gemas com congeladores de ofensiva e skins exclusivas de avatar.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            {/* Live Gems Wallet Counter */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-inner">
              <Gem className="w-5 h-5 fill-amber-300 text-amber-300 animate-pulse" />
              <div>
                <span className="text-[10px] text-indigo-100 font-bold block uppercase tracking-wider leading-none">
                  Saldo
                </span>
                <span className="font-mono text-lg font-black text-white">{user.gems}</span>
                <span className="text-[11px] font-bold text-indigo-200 ml-1">Gemas</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Inventory Summary Bar */}
        <div className="bg-indigo-50/70 border-b border-indigo-100 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 flex-wrap text-slate-700">
            <span className="font-extrabold text-indigo-900 flex items-center gap-1">
              <Package className="w-4 h-4 text-indigo-600" />
              <span>No seu inventário:</span>
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
              <span>🧊 Congelador de Ofensiva:</span>
              <strong className="text-indigo-700 font-bold">{streakFreezeCount} un</strong>
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
              <span>🧪 XP Dobrado:</span>
              <strong className="text-indigo-700 font-bold">{doubleXpCount} un</strong>
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
              <span>🎨 Skins Desbloqueadas:</span>
              <strong className="text-indigo-700 font-bold">{ownedSkinsCount} skins</strong>
            </span>
          </div>

          {streakFreezeCount > 0 ? (
            <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>Ofensiva protegida contra 1 falta</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[11px] text-amber-700 font-bold">
              <Info className="w-3.5 h-3.5" />
              <span>Adquira um Congelador para não perder sua sequência!</span>
            </div>
          )}
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-indigo-700 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos os Itens ({SHOP_CATALOG.length})
            </button>
            <button
              onClick={() => setFilter('consumable')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                filter === 'consumable'
                  ? 'bg-white text-indigo-700 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🧊 Proteções & Bônus</span>
            </button>
            <button
              onClick={() => setFilter('skin')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                filter === 'skin'
                  ? 'bg-white text-indigo-700 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>✨ Skins de Avatar</span>
            </button>
            <button
              onClick={() => setFilter('inventory')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                filter === 'inventory'
                  ? 'bg-white text-indigo-700 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🎒 Meu Inventário ({user.inventory.length})</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Mostrando <strong>{displayItems.length}</strong> itens disponíveis
          </div>
        </div>

        {/* Catalog Items Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {displayItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-3xl mx-auto text-slate-400">
                🎒
              </div>
              <h4 className="font-extrabold text-base text-slate-800">Seu inventário está vazio nesta categoria</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore as abas de Proteções ou Skins para adquirir novos itens com suas Gemas acumuladas!
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Ver Catálogo Completo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayItems.map((item) => {
                const isSkin = item.category === 'skin';
                const isOwned = user.inventory.includes(item.id);
                const isEquipped = isSkin && item.avatarEmoji === user.avatar;
                const ownedCount = getItemCountInInventory(item.id);
                const canAfford = user.gems >= item.costGems;
                const isMaxStock = !isSkin && item.maxStock && ownedCount >= item.maxStock;

                return (
                  <div
                    key={item.id}
                    className={`relative p-5 rounded-3xl border-2 transition-all flex flex-col justify-between group ${
                      isEquipped
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-md ring-2 ring-indigo-400/30'
                        : isOwned && isSkin
                        ? 'border-emerald-300 bg-emerald-50/30 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-indigo-100 text-indigo-700 text-[9px] font-black uppercase rounded-md shadow-2xs">
                        {item.badge}
                      </span>
                    )}

                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-105 shrink-0`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            {isSkin ? 'Skin Exclusiva' : 'Proteção / Bônus'}
                          </span>
                          <h4 className="font-extrabold text-sm text-slate-900 leading-snug">{item.name}</h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed min-h-[40px]">
                        {item.description}
                      </p>

                      {/* Quantity Owned Indicator */}
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        {isSkin ? (
                          <span className="text-[11px] font-semibold">
                            {isOwned ? (
                              <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Adquirido na coleção
                              </span>
                            ) : (
                              <span className="text-slate-400">Item Colecionável</span>
                            )}
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium">
                            No inventário: <strong className="text-slate-900 font-bold">{ownedCount} un</strong>
                            {item.maxStock && <span className="text-slate-400 text-[10px]"> (máx: {item.maxStock})</span>}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      {/* Price in Gems */}
                      <div className="flex items-center gap-1.5">
                        <Gem className="w-4 h-4 fill-sky-400 text-sky-500 shrink-0" />
                        <span className="font-mono text-sm font-black text-slate-900">{item.costGems}</span>
                        <span className="text-[10px] text-slate-500 font-bold">Gemas</span>
                      </div>

                      {/* Action Button */}
                      {isSkin && isOwned ? (
                        isEquipped ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-100 text-indigo-700 font-black text-xs rounded-xl">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                            <span>Equipado</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => handleEquipSkin(item)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1"
                          >
                            <span>Equipar</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )
                      ) : (
                        <button
                          disabled={!canAfford || Boolean(isMaxStock)}
                          onClick={() => handleBuy(item)}
                          className={`px-4 py-2 font-black text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                            !canAfford
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                              : isMaxStock
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white shadow-sm'
                          }`}
                          title={!canAfford ? 'Gemas insuficientes' : undefined}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{isMaxStock ? 'Máximo atingido' : 'Comprar'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>
              <strong>Dica de Ofensiva:</strong> Mantenha ao menos 1 Congelador no inventário para salvar sua sequência de dias caso não consiga estudar hoje!
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Voltar ao Aprendizado
          </button>
        </div>
      </div>
    </div>
  );
};
