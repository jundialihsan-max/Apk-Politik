import React, { useState } from 'react';
import { Crown, Sparkles, BookOpen, Compass, Sun, Moon, Star, Wind, Flame, Droplets, Mountain, Globe2, ArrowLeft } from 'lucide-react';
import { HASTABRATA_DATA, HastabrataElement, Chapter } from '../data/chaptersData';

interface HastabrataMatrixProps {
  onOpenChapterById: (chapterId: number) => void;
  onBackToCurriculum: () => void;
}

export const HastabrataMatrix: React.FC<HastabrataMatrixProps> = ({ onOpenChapterById, onBackToCurriculum }) => {
  const [selectedElement, setSelectedElement] = useState<HastabrataElement>(HASTABRATA_DATA[0]);

  const getElementIcon = (nama: string) => {
    if (nama.includes('Surya')) return <Sun className="w-6 h-6 text-amber-400" />;
    if (nama.includes('Candra')) return <Moon className="w-6 h-6 text-amber-200" />;
    if (nama.includes('Kartika')) return <Star className="w-6 h-6 text-yellow-300" />;
    if (nama.includes('Angkasa')) return <Compass className="w-6 h-6 text-sky-400" />;
    if (nama.includes('Maruta')) return <Wind className="w-6 h-6 text-teal-300" />;
    if (nama.includes('Dahana')) return <Flame className="w-6 h-6 text-orange-500" />;
    if (nama.includes('Baruna')) return <Droplets className="w-6 h-6 text-blue-400" />;
    return <Mountain className="w-6 h-6 text-amber-600" />;
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
          Khasanah Budaya Jawa
        </span>
      </div>

      {/* Top Banner with curatorial framing */}
      <div className="relative rounded-lg p-8 bg-gradient-to-r from-[#17120a] via-[#120e08] to-[#0d0905] border border-amber-500/30 overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-royal text-amber-400 tracking-widest uppercase">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>KOSMOLOGI KEPEMIMPINAN NUSANTARA</span>
          </div>
          <h2 className="mt-2 font-royal text-3xl sm:text-4xl font-bold text-gold-gradient">
            Falsafah Hastabrata & Etika Genetik Jawa
          </h2>
          <p className="mt-3 text-stone-300 font-editorial text-lg italic leading-relaxed">
            Delapan watak keagungan anasir alam semesta sebagai kompas moral seorang negarawan sejati. 
            Menghindarkan kekuasaan dari watak lalim, keserakahan pribadi, dan arogansi tahta.
          </p>
        </div>
      </div>

      {/* Two-Zone Interactive Sandbox Layout (from education reference) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: The 8 Cosmic Elements Grid (60%) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs font-royal uppercase tracking-wider text-amber-400">
            <span>Pilih Salah Satu Anasir Alam (Hastabrata)</span>
            <span className="text-stone-400 font-mono">8 Watak Kosmik</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HASTABRATA_DATA.map((elem) => {
              const isSelected = selectedElement.nama === elem.nama;
              return (
                <button
                  key={elem.nama}
                  onClick={() => setSelectedElement(elem)}
                  className={`p-4 rounded text-left flex flex-col justify-between h-36 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                      : 'bg-[#120e08] border-amber-950 hover:border-amber-800 hover:bg-[#18130c]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{elem.simbol}</span>
                    <span className="text-[10px] font-mono text-stone-500">Bab {elem.babTerkait}</span>
                  </div>
                  <div>
                    <span className="font-royal text-xs font-bold text-amber-200 block truncate">
                      {elem.nama.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-stone-400 block truncate mt-0.5">
                      {elem.unsur}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Secondary Pillars: Tri Dharma & Catur Kotamaning Nrpati */}
          <div className="mt-8 pt-6 border-t border-amber-900/30 space-y-4">
            <h3 className="font-royal text-lg font-bold text-amber-300">
              Doktrin Pengiring: Tri Dharma & Catur Kotamaning Nrpati
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-[#100c07] border border-amber-900/40 space-y-2">
                <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
                  Tri Dharma Mangkunegaran
                </span>
                <p className="text-xs text-amber-100 font-editorial italic text-sm">
                  1. Rumangsa melu handarbeni (Ikut merasa memiliki).<br />
                  2. Wajib melu hangrungkebi (Wajib ikut membela).<br />
                  3. Mulat sarira hangrasa wani (Berani mawas diri).
                </p>
                <p className="text-[11px] text-stone-400 pt-1">
                  Mendasari Bab 7 & Bab 101 dalam pembentukan loyalitas moral pengurus organisasi.
                </p>
              </div>

              <div className="p-4 rounded bg-[#100c07] border border-amber-900/40 space-y-2">
                <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
                  Catur Kotamaning Nrpati
                </span>
                <p className="text-xs text-amber-100 font-editorial italic text-sm">
                  1. Guna: Memiliki keahlian & kompetensi riil.<br />
                  2. Kerti: Memiliki karya nyata bagi rakyat.<br />
                  3. Purusa: Berani menegakkan kebenaran.<br />
                  4. Bhandhu: Memiliki jaringan kawan yang beretika.
                </p>
                <p className="text-[11px] text-stone-400 pt-1">
                  Mendasari Bab 30 dalam penataan meritokrasi birokrasi dan lembaga pendidikan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone: Deep Dive Concept Deck for Selected Element (40%) */}
        <div className="lg:col-span-5 p-6 rounded-lg bg-[#140f09] border border-amber-500/40 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                {getElementIcon(selectedElement.nama)}
              </div>
              <div>
                <h3 className="font-royal text-xl font-bold text-amber-200">
                  {selectedElement.nama}
                </h3>
                <span className="text-xs text-amber-400/80 font-mono uppercase tracking-wider">
                  Unsur: {selectedElement.unsur}
                </span>
              </div>
            </div>
            <span className="text-3xl">{selectedElement.simbol}</span>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-royal text-amber-400 uppercase tracking-widest">
              Makna & Filosofi Kosmik
            </h4>
            <p className="text-sm text-stone-200 leading-relaxed font-editorial italic text-base">
              "{selectedElement.makna}"
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-royal text-amber-400 uppercase tracking-widest">
              Aplikasi dalam Politik & Kebijakan Pendidikan
            </h4>
            <div className="p-4 rounded bg-[#0b0805] border border-amber-950 text-xs text-stone-300 leading-relaxed">
              {selectedElement.implementasi}
            </div>
          </div>

          <div className="pt-4 border-t border-amber-900/40">
            <button
              onClick={() => onOpenChapterById(selectedElement.babTerkait)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-royal text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Buka Bab Rujukan (Bab {selectedElement.babTerkait})</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
