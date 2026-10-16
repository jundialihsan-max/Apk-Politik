import React, { useState } from 'react';
import { Scale, CheckCircle2, RotateCcw, AlertTriangle, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';
import { DILEMMA_SCENARIOS, DilemmaScenario } from '../data/chaptersData';

interface DilemmaSimulatorProps {
  onOpenChapterById: (chapterId: number) => void;
  onBackToCurriculum: () => void;
}

export const DilemmaSimulator: React.FC<DilemmaSimulatorProps> = ({ onOpenChapterById, onBackToCurriculum }) => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({});

  const scenario = DILEMMA_SCENARIOS[activeScenarioIndex];
  const currentChoiceId = selectedChoices[scenario.id];
  const currentChoice = scenario.pilihan.find((p) => p.id === currentChoiceId);

  const handleSelectChoice = (choiceId: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [scenario.id]: choiceId,
    }));
  };

  const handleReset = () => {
    setSelectedChoices({});
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Elegant Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToCurriculum}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#16110a] hover:bg-[#221a0f] text-amber-300 hover:text-amber-100 border border-amber-700/50 hover:border-amber-400 text-xs font-royal uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Kurikulum 200 Bab</span>
        </button>

        <span className="text-xs text-stone-500 font-royal uppercase tracking-widest hidden sm:inline">
          Laboratorium Kasus Nyata
        </span>
      </div>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-amber-900/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-royal text-amber-400 tracking-widest uppercase">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>KAWAH CANDRADIMUKA KEPEMIMPINAN</span>
          </div>
          <h2 className="mt-2 font-royal text-3xl sm:text-4xl font-bold text-gold-gradient">
            Simulasi Dilema Etika & Negosiasi
          </h2>
          <p className="mt-2 text-stone-300 font-editorial italic text-base max-w-2xl">
            Uji integritas batin dan ketajaman diplomasi Anda dalam skenario politik nyata. 
            Setiap keputusan membawa konsekuensi terhadap indeks etika, stabilitas, dan wibawa kepemimpinan.
          </p>
        </div>

        {/* Scenario Stepper */}
        <div className="flex items-center gap-2">
          {DILEMMA_SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioIndex(idx)}
              className={`px-3.5 py-1.5 rounded text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer ${
                activeScenarioIndex === idx
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-[#151009] text-stone-400 border border-amber-900/30 hover:text-amber-200'
              }`}
            >
              Kasus {idx + 1}
            </button>
          ))}
          <button
            onClick={handleReset}
            title="Reset Pilihan"
            className="p-1.5 text-stone-500 hover:text-amber-300 transition-colors ml-2"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Dilemma Stage */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Context & Options (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-lg bg-[#120e08] border border-amber-900/40 space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
              <span className="text-amber-400 font-royal uppercase">Pilar: {scenario.pilar}</span>
              <span>Rujukan: Bab {scenario.babRujukan}</span>
            </div>

            <h3 className="font-royal text-xl sm:text-2xl font-bold text-amber-100">
              {scenario.judul}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              {scenario.latarBelakang}
            </p>

            <div className="pt-2 font-royal text-xs uppercase tracking-wider text-amber-300 font-bold">
              Pertanyaan Kepemimpinan: {scenario.pertanyaan}
            </div>
          </div>

          {/* Interactive Choices */}
          <div className="space-y-3">
            <div className="text-xs font-royal text-amber-400/80 uppercase tracking-widest">
              Tentukan Keputusan Strategis Anda:
            </div>
            {scenario.pilihan.map((pil) => {
              const isChosen = currentChoiceId === pil.id;
              return (
                <button
                  key={pil.id}
                  onClick={() => handleSelectChoice(pil.id)}
                  className={`w-full text-left p-4 rounded border transition-all cursor-pointer flex items-start gap-3 ${
                    isChosen
                      ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-[#100c07] border-amber-950 hover:border-amber-800 hover:bg-[#16110a]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-royal font-bold shrink-0 mt-0.5 ${
                      isChosen
                        ? 'bg-amber-400 text-stone-950'
                        : 'bg-[#1f160e] text-stone-400 border border-amber-900/40'
                    }`}
                  >
                    {pil.id}
                  </span>
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-stone-200 block leading-snug">
                      {pil.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Analysis & Consequences (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-lg bg-[#140f09] border border-amber-600/30 space-y-6">
          <div className="flex items-center gap-2 text-xs font-royal text-amber-400 uppercase tracking-widest border-b border-amber-900/40 pb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Kajian Dampak & Bedah Falsafah</span>
          </div>

          {!currentChoice ? (
            <div className="py-12 text-center text-stone-400 space-y-3">
              <Scale className="w-10 h-10 mx-auto text-amber-600/40" />
              <p className="text-sm">
                Pilih salah satu opsi tindakan di sebelah kiri untuk melihat evaluasi konsekuensi etis dan wibawa kepemimpinan.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Impact Scores */}
              <div className="space-y-3 bg-[#0d0a06] p-4 rounded border border-amber-950">
                <span className="text-xs font-royal text-amber-300 uppercase tracking-wider block">
                  Matriks Konsekuensi Pilihan {currentChoice.id}:
                </span>

                <div className="space-y-2 text-xs font-sans">
                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Integritas Etika</span>
                      <span className={currentChoice.dampakEtika > 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {currentChoice.dampakEtika > 0 ? `+${currentChoice.dampakEtika}` : currentChoice.dampakEtika}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${currentChoice.dampakEtika > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                        style={{ width: `${Math.min(100, Math.max(10, (currentChoice.dampakEtika + 10) * 5))}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Stabilitas Lembaga</span>
                      <span className={currentChoice.dampakStabilitas > 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {currentChoice.dampakStabilitas > 0 ? `+${currentChoice.dampakStabilitas}` : currentChoice.dampakStabilitas}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${currentChoice.dampakStabilitas > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                        style={{ width: `${Math.min(100, Math.max(10, (currentChoice.dampakStabilitas + 10) * 5))}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-300 mb-1">
                      <span>Wibawa Kepemimpinan</span>
                      <span className={currentChoice.dampakWibawa > 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {currentChoice.dampakWibawa > 0 ? `+${currentChoice.dampakWibawa}` : currentChoice.dampakWibawa}
                      </span>
                    </div>
                    <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${currentChoice.dampakWibawa > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                        style={{ width: `${Math.min(100, Math.max(10, (currentChoice.dampakWibawa + 10) * 5))}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Consequence Narrative */}
              <div className="space-y-1.5">
                <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
                  Konsekuensi Lapangan:
                </span>
                <p className="text-sm text-stone-200 leading-relaxed font-sans">
                  {currentChoice.konsekuensi}
                </p>
              </div>

              {/* Philosophical Wisdom Note */}
              <div className="p-3.5 rounded bg-[#1c1409] border border-amber-500/30 space-y-1">
                <span className="text-xs font-royal text-amber-300 uppercase tracking-widest block">
                  Ulasan Falsafah:
                </span>
                <p className="text-xs text-amber-100/90 font-editorial italic leading-relaxed text-sm">
                  {currentChoice.penjelasanFalsafah}
                </p>
              </div>

              {/* Action: Open Chapter */}
              <button
                onClick={() => onOpenChapterById(scenario.babRujukan)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-royal text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>Pelajari Pendalaman di Bab {scenario.babRujukan}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
