import React, { useState, useEffect } from 'react';
import { X, Shield, TrendingUp, DollarSign, Users, Cpu, Layers, CheckCircle2, Download, RefreshCw, Sparkles } from 'lucide-react';
import { WORLDS_DATA } from '../data/courseData';
import { UserProfile } from '../types';
import { API_BASE_URL } from '../config';

interface AdminModalProps {
  user: UserProfile;
  onClose: () => void;
  onResetUserProgress: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  user,
  onClose,
  onResetUserProgress,
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'curriculum' | 'costs' | 'database'>('metrics');
  const [metricsData, setMetricsData] = useState({
    activeStudents: 14280,
    freeUsers: 12150,
    plusSubscribers: 1810,
    familySubscribers: 320,
    mrrBRL: 76840,
    arrBRL: 922080,
    averageCostPerStudentUSD: 0.014,
    freeUserRetentionRate: '68.4%',
    plusConversionRate: '12.6%',
    topWeaknessIdentified: 'Past Tense & Prepositions (In/On/At)',
    totalHoursStudied: 149300,
  });
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/admin/metrics`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.activeStudents) {
          setMetricsData(data);
        }
      })
      .catch((err) => console.log('Using default mock admin metrics:', err));
  }, []);

  const handleExportBackup = () => {
    const backupJson = JSON.stringify(user, null, 2);
    const blob = new Blob([backupJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lingo_world_backup_${user.id}_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight">Painel Administrativo & Gestão de Produto</h3>
              <p className="text-xs text-slate-400">Lingo World Governance & Business Intelligence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="px-6 border-b border-slate-200 bg-slate-50 flex gap-4 text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Métricas de Negócio
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'costs'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Custos de IA & Sustentabilidade
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'curriculum'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Gestão do Currículo (7 Mundos)
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'database'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Dados & Persistência
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              {/* Top Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Estudantes Ativos</span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{metricsData.activeStudents.toLocaleString()}</div>
                  <span className="text-[10px] text-emerald-600 font-bold">+18.2% este mês</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Receita Mensal (MRR)</span>
                  <div className="text-xl sm:text-2xl font-black text-indigo-600 mt-1">R$ {metricsData.mrrBRL.toLocaleString()}</div>
                  <span className="text-[10px] text-slate-500 font-semibold">ARR: R$ {metricsData.arrBRL.toLocaleString()}</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Conversão Plus</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">{metricsData.plusConversionRate}</div>
                  <span className="text-[10px] text-slate-500 font-semibold">Meta anual: 15%</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Retenção Free</span>
                  <div className="text-xl sm:text-2xl font-black text-sky-600 mt-1">{metricsData.freeUserRetentionRate}</div>
                  <span className="text-[10px] text-slate-500 font-semibold">D30 Retention</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="font-extrabold text-sm text-slate-900">Distribuição da Base de Alunos</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Usuários no Plano Gratuito (Free)</span>
                      <span className="font-bold text-slate-900">{metricsData.freeUsers.toLocaleString()} (85%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[85%]" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-600">Assinantes Plus</span>
                      <span className="font-bold text-slate-900">{metricsData.plusSubscribers.toLocaleString()} (12.7%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[12.7%]" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-600">Assinantes Plano Família</span>
                      <span className="font-bold text-slate-900">{metricsData.familySubscribers.toLocaleString()} (2.3%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full w-[2.3%]" />
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="font-extrabold text-sm text-slate-900">Dificuldade Pedagógica Mais Detectada</h4>
                  <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900">
                    <p className="font-bold text-sm mb-1">{metricsData.topWeaknessIdentified}</p>
                    <p>O Lingo Brain já mobilizou automaticamente 3.420 missões adaptativas personalizadas para reforçar essa competência na base de alunos.</p>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Total de Horas Estudadas:</span>
                    <span className="font-bold text-slate-800">{metricsData.totalHoursStudied.toLocaleString()} horas</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'costs' && (
            <div className="space-y-4">
              <div className="p-5 bg-linear-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100 space-y-2">
                <h4 className="font-black text-slate-900 text-sm">Estrutura de Custos Computacionais & IA</h4>
                <p className="text-xs text-slate-600">
                  Estimativas arquiteturais de custo real por usuário ativo conforme a diretriz 3.5 e 23 do projeto:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Custo Médio / Aluno Ativo</span>
                  <div className="text-2xl font-black text-indigo-600">~US$ 0.014</div>
                  <p className="text-[11px] text-slate-500">Aproximadamente R$ 0,08 por estudante/mês.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Margem Bruta por Assinante Plus</span>
                  <div className="text-2xl font-black text-emerald-600">92.4%</div>
                  <p className="text-[11px] text-slate-500">Suficiente para subsidiar mais de 35 alunos gratuitos.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Modelo de IA Integrado</span>
                  <div className="text-lg font-black text-slate-800">Gemini 3.8 Flash</div>
                  <p className="text-[11px] text-slate-500">Alta inteligência com excelente latência e eficiência de tokens.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-sm text-slate-900">Mundos Ativos no Currículo</h4>
                <span className="text-xs text-slate-500 font-semibold">{WORLDS_DATA.length} Mundos Estruturados</span>
              </div>
              <div className="space-y-2">
                {WORLDS_DATA.map((w) => (
                  <div key={w.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 text-sm">{w.title}</span>
                        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 font-mono text-[10px] rounded-full font-bold">
                          {w.levelBadge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{w.description}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {w.phases.length} fases ativas
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-sm text-slate-900">Backup & Integridade de Dados</h4>
                <p className="text-xs text-slate-600">
                  O progresso do estudante é persistido de forma robusta e compatível tanto com o cliente local quanto com sincronização em nuvem.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={handleExportBackup}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Exportar Backup JSON</span>
                  </button>
                  <button
                    onClick={onResetUserProgress}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Resetar Progresso de Teste</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
