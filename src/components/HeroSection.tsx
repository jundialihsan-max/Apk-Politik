import React from 'react';
import { ShieldCheck, BookOpen, Crown, Scale, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenHastabrata: () => void;
  onOpenDilemma: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onOpenHastabrata,
  onOpenDilemma,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-amber-900/30 bg-[#070503]">
      {/* Visual Backdrop with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_classic_gold_academy_1792131961183.jpg"
          alt="Aula Keagungan Akademi Politik Klasik Emas"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 contrast-125 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080705] via-[#080705]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Curatorial Kicker / Byline */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300/80 mb-6">
          <span className="uppercase tracking-widest text-amber-400 font-royal">DOKTRIN NEGARAWAN NUSANTARA</span>
          <span aria-hidden="true" className="text-amber-600">·</span>
          <span>Disusun oleh Jundi Abdul Syahid, S.Pd.</span>
          <span aria-hidden="true" className="text-amber-600">·</span>
          <span className="text-amber-200/90 italic font-editorial text-sm">Orang Dalam Genetik Jawa</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gold-gradient leading-[1.15] text-balance">
            RANCANGAN AKADEMI POLITIK 200 BAB
          </h1>
          <p className="mt-4 font-editorial text-xl sm:text-2xl text-amber-100/90 italic leading-relaxed max-w-3xl">
            Sintesis Luhur Politik Organisasi Etis, Seni Negosiasi Meja Bundar, Diplomasi Kebangsaan, 
            Kepemimpinan Kosmik Hastabrata, dan Rekonstruksi Politik Pendidikan Nasional.
          </p>
          <p className="mt-3 text-sm sm:text-base text-stone-300/80 max-w-2xl leading-relaxed">
            Menolak pragmatisme transaksional dangkal. Sebuah kurikulum kawah candradimuka berjenjang 
            dalam 8 Volume dan 200 Bab untuk melahirkan ksatria-pinandita yang teguh membela kemakmuran rakyat nusantara.
          </p>
        </div>

        {/* Primary Interactive Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onExplore}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-stone-950 font-royal text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Jelajahi 200 Bab</span>
          </button>

          <button
            onClick={onOpenHastabrata}
            className="flex items-center gap-2 px-5 py-3.5 bg-[#17120a] hover:bg-[#221a0e] text-amber-200 border border-amber-600/40 rounded font-royal text-xs uppercase tracking-wider transition-all cursor-pointer hover:border-amber-400 shadow-sm"
          >
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Falsafah Hastabrata</span>
          </button>

          <button
            onClick={onOpenDilemma}
            className="flex items-center gap-2 px-5 py-3.5 bg-[#17120a] hover:bg-[#221a0e] text-amber-200 border border-amber-600/40 rounded font-royal text-xs uppercase tracking-wider transition-all cursor-pointer hover:border-amber-400 shadow-sm"
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Simulasi Dilema Etika</span>
          </button>
        </div>

        {/* 4-Item Quantitative & Philosophical Rigor Row */}
        <div className="mt-14 pt-8 border-t border-amber-900/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-royal text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">200 Bab</span>
            <span className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Silabus Lengkap & Sistematis</span>
          </div>

          <div className="flex flex-col">
            <span className="font-royal text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">8 Volume</span>
            <span className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Tahapan Penggemblengan Batin</span>
          </div>

          <div className="flex flex-col">
            <span className="font-royal text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">5 Pilar</span>
            <span className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Etika, Negosiasi, Diplomasi & Didik</span>
          </div>

          <div className="flex flex-col">
            <span className="font-royal text-2xl sm:text-3xl font-bold text-amber-300">Hastabrata</span>
            <span className="text-xs text-stone-400 mt-1 uppercase tracking-wider">8 Anasir Kosmik Kepemimpinan</span>
          </div>
        </div>
      </div>
    </section>
  );
};
