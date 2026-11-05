import React, { useState } from 'react';
import { X, Check, Sparkles, Crown, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PlanType } from '../types';

interface PlanUpgradeModalProps {
  currentPlan: PlanType;
  onClose: () => void;
  onSelectPlan: (plan: PlanType) => void;
}

export const PlanUpgradeModal: React.FC<PlanUpgradeModalProps> = ({
  currentPlan,
  onClose,
  onSelectPlan,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(currentPlan === 'free' ? 'plus' : currentPlan);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      id: 'free' as PlanType,
      title: 'Plano Free',
      subtitle: 'Acesso democrático e completo',
      priceMonthly: 'R$ 0',
      priceAnnual: 'R$ 0',
      badge: 'Para Todos',
      features: [
        'Curso completo do nível A1 ao C2',
        'Mapa dinâmico e 7 mundos pedagógicos',
        'Lingo Brain e revisões inteligentes',
        'Professor de IA funcional (com limites)',
        'Biblioteca didática completa',
        'Anúncios discretos que não interrompem aulas',
      ],
      isPopular: false,
    },
    {
      id: 'plus' as PlanType,
      title: 'Plano Plus',
      subtitle: 'Acelere sua fluência',
      priceMonthly: 'R$ 29,90/mês',
      priceAnnual: 'R$ 19,90/mês',
      badge: 'Mais Recomendado',
      features: [
        'Tudo do plano gratuito',
        '100% livre de qualquer anúncio',
        'Conversação por voz ilimitada com Professor IA',
        'Análise fonética e articulatória aprofundada',
        'Simulações imersivas (entrevistas, viagens)',
        'Relatórios avançados de retenção e pronúncia',
      ],
      isPopular: true,
    },
    {
      id: 'family' as PlanType,
      title: 'Plano Family',
      subtitle: 'Para pais, filhos e famílias',
      priceMonthly: 'R$ 49,90/mês',
      priceAnnual: 'R$ 34,90/mês',
      badge: 'Até 6 Perfis',
      features: [
        'Tudo do plano Plus',
        'Até 6 contas individuais e independentes',
        'Painel parental e relatórios de evolução',
        'Proteção especial para menores de idade',
        'Metas de estudo compartilhadas',
      ],
      isPopular: false,
    },
  ];

  const handleConfirmPlan = () => {
    onSelectPlan(selectedPlan);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-lg font-black text-slate-900">Planos & Assinaturas Lingo World</h3>
            <p className="text-xs text-slate-500">Escolha a experiência que melhor atende seus objetivos</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Billing cycle toggle */}
        <div className="px-6 pt-4 flex justify-center">
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              <span>Anual</span>
              <span className="px-1.5 py-0.2 bg-emerald-400 text-emerald-950 text-[10px] rounded-full font-black">
                -33% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => {
            const isSelected = selectedPlan === p.id;
            const price = billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly;

            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                className={`relative rounded-2xl p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/40 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {p.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs">
                    {p.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-black text-slate-900 text-base">{p.title}</h4>
                    {p.id === 'plus' && <Crown className="w-5 h-5 text-amber-500" />}
                    {p.id === 'family' && <Users className="w-5 h-5 text-indigo-500" />}
                    {p.id === 'free' && <HeartHandshake className="w-5 h-5 text-emerald-500" />}
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{p.subtitle}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-black text-slate-900">{price}</span>
                    {p.id !== 'free' && billingCycle === 'annual' && (
                      <span className="block text-[11px] text-emerald-600 font-bold">Faturado anualmente com desconto</span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-slate-700">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {currentPlan === p.id ? 'Seu Plano Atual' : `Selecionar ${p.title}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Policy and Action */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Garantia de 7 dias ou seu dinheiro de volta. Cancele quando quiser.</span>
          </div>
          <button
            onClick={handleConfirmPlan}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            {selectedPlan === currentPlan ? 'Manter Plano' : 'Ativar Plano Selecionado'}
          </button>
        </div>
      </div>
    </div>
  );
};
