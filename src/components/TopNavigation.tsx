import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface TopNavigationProps {
  activeTab: 'kurikulum' | 'hastabrata' | 'dilema' | 'catatan' | 'penyusun';
  setActiveTab: (tab: 'kurikulum' | 'hastabrata' | 'dilema' | 'catatan' | 'penyusun') => void;
  completedCount: number;
  totalChapters: number;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  activeTab,
  setActiveTab,
  completedCount,
  totalChapters,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0906]/90 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('kurikulum')}
          className="text-left group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 rounded border border-amber-500/40 bg-gradient-to-br from-amber-600/30 to-amber-950/60 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-royal text-lg font-bold tracking-wider text-gold-gradient whitespace-nowrap block leading-tight">
              AKADEMI POLITIK 200 BAB
            </span>
            <span className="text-[10px] tracking-widest uppercase text-amber-400/70 font-sans block">
              Kepemimpinan, Diplomasi & Pendidikan Etis
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('kurikulum')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 cursor-pointer ${
              activeTab === 'kurikulum'
                ? 'text-amber-300 border-amber-400 font-semibold'
                : 'text-stone-400 hover:text-amber-200 border-transparent'
            }`}
          >
            Kurikulum 200 Bab
          </button>

          <button
            onClick={() => setActiveTab('hastabrata')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 cursor-pointer ${
              activeTab === 'hastabrata'
                ? 'text-amber-300 border-amber-400 font-semibold'
                : 'text-stone-400 hover:text-amber-200 border-transparent'
            }`}
          >
            Falsafah Hastabrata
          </button>

          <button
            onClick={() => setActiveTab('dilema')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 cursor-pointer ${
              activeTab === 'dilema'
                ? 'text-amber-300 border-amber-400 font-semibold'
                : 'text-stone-400 hover:text-amber-200 border-transparent'
            }`}
          >
            Simulasi Dilema Etika
          </button>

          <button
            onClick={() => setActiveTab('catatan')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 cursor-pointer ${
              activeTab === 'catatan'
                ? 'text-amber-300 border-amber-400 font-semibold'
                : 'text-stone-400 hover:text-amber-200 border-transparent'
            }`}
          >
            Jurnal & Progres
          </button>

          <button
            onClick={() => setActiveTab('penyusun')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 cursor-pointer ${
              activeTab === 'penyusun'
                ? 'text-amber-300 border-amber-400 font-semibold'
                : 'text-stone-400 hover:text-amber-200 border-transparent'
            }`}
          >
            Profil Penyusun
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('kurikulum')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] whitespace-nowrap cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mulai Studi ({completedCount}/{totalChapters})</span>
          </button>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="md:hidden flex overflow-x-auto px-4 py-2 border-t border-amber-950/60 bg-[#080604] gap-4 text-xs font-medium no-scrollbar">
        <button
          onClick={() => setActiveTab('kurikulum')}
          className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'kurikulum' ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}
        >
          Kurikulum
        </button>
        <button
          onClick={() => setActiveTab('hastabrata')}
          className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'hastabrata' ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}
        >
          Hastabrata
        </button>
        <button
          onClick={() => setActiveTab('dilema')}
          className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'dilema' ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}
        >
          Simulasi Etika
        </button>
        <button
          onClick={() => setActiveTab('catatan')}
          className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'catatan' ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}
        >
          Jurnal
        </button>
        <button
          onClick={() => setActiveTab('penyusun')}
          className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'penyusun' ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}
        >
          Penyusun
        </button>
      </div>
    </header>
  );
};
