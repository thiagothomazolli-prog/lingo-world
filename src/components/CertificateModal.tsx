import React from 'react';
import { X, Award, Printer, CheckCircle, ShieldCheck } from 'lucide-react';
import { UserProfile } from '../types';

interface CertificateModalProps {
  user: UserProfile;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  user,
  onClose,
}) => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const validationCode = `LW-${user.currentLanguage.toUpperCase()}-${user.cefrLevel}-${Math.abs(
    user.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 1000) * 73
  )}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]">
        {/* Top Header */}
        <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-sm font-extrabold text-slate-800">Certificado de Conquista Lingo World</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 overflow-y-auto">
          <div className="p-8 sm:p-10 bg-linear-to-b from-amber-50/40 via-white to-indigo-50/30 border-8 border-double border-amber-300/80 rounded-2xl shadow-inner text-center relative select-none">
            {/* Watermark Crest */}
            <div className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none">
              <Award className="w-80 h-80 text-amber-600" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-block px-4 py-1 bg-indigo-900 text-white text-xs font-black tracking-widest uppercase rounded-full">
                Lingo World Academy
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
                CERTIFICADO DE PROFICIÊNCIA
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 italic">
                Certificamos solenemente que
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-indigo-700 underline decoration-amber-400 decoration-wavy decoration-2">
                {user.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                concluiu com êxito as competências de listening, speaking, reading, writing e gramática correspondentes ao nível:
              </p>

              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-lg rounded-xl shadow-md">
                <span>NÍVEL CEFR {user.cefrLevel} — INGLÊS</span>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4 text-left border-t border-slate-200/80 mt-6 text-xs text-slate-500">
                <div>
                  <span className="block font-bold text-slate-700">Data de Emissão:</span>
                  <span>{currentDate}</span>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-slate-700">Código de Validação:</span>
                  <span className="font-mono text-indigo-600 font-bold">{validationCode}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-4 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Certificado institucional emitido pela plataforma global Lingo World</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Compartilhe seu progresso no LinkedIn ou com amigos!
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
