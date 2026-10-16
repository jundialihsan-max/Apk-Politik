import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Bookmark,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Chapter, PilarUtama, VOLUMES_INFO } from '../data/chaptersData';

interface CurriculumBrowserProps {
  chapters: Chapter[];
  onSelectChapter: (chapter: Chapter) => void;
  bookmarks: number[];
  completed: number[];
  notes: Record<number, string>;
  onToggleBookmark: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}

export const CurriculumBrowser: React.FC<CurriculumBrowserProps> = ({
  chapters,
  onSelectChapter,
  bookmarks,
  completed,
  notes,
  onToggleBookmark,
  onToggleCompleted,
}) => {
  const [selectedVolume, setSelectedVolume] = useState<number | 'all'>('all');
  const [selectedPilar, setSelectedPilar] = useState<PilarUtama | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'bookmarked' | 'completed' | 'has_note'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Pillars list
  const pillars: PilarUtama[] = [
    'Politik Organisasi Etis',
    'Seni Negosiasi Taktis',
    'Diplomasi & Geopolitik',
    'Kepemimpinan Falsafah Jawa',
    'Politik Pendidikan',
  ];

  // Filtered chapters calculation
  const filteredChapters = useMemo(() => {
    return chapters.filter((ch) => {
      // Volume filter
      if (selectedVolume !== 'all' && ch.volume !== selectedVolume) {
        return false;
      }

      // Pilar filter
      if (selectedPilar !== 'all' && ch.pilar !== selectedPilar) {
        return false;
      }

      // Status filter
      if (statusFilter === 'bookmarked' && !bookmarks.includes(ch.id)) {
        return false;
      }
      if (statusFilter === 'completed' && !completed.includes(ch.id)) {
        return false;
      }
      if (statusFilter === 'has_note' && !notes[ch.id]) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = ch.title.toLowerCase().includes(query);
        const matchSubtitle = ch.subtitle.toLowerCase().includes(query);
        const matchFalsafah = ch.falsafah.toLowerCase().includes(query);
        const matchFalsafahArti = ch.falsafahArti.toLowerCase().includes(query);
        const matchNumber = `bab ${ch.id}`.includes(query) || `${ch.id}` === query;
        const matchSilabus = ch.silabus.some((s) => s.toLowerCase().includes(query));

        if (!matchTitle && !matchSubtitle && !matchFalsafah && !matchFalsafahArti && !matchNumber && !matchSilabus) {
          return false;
        }
      }

      return true;
    });
  }, [chapters, selectedVolume, selectedPilar, statusFilter, searchQuery, bookmarks, completed, notes]);

  const activeVolData = useMemo(() => {
    if (selectedVolume === 'all') return null;
    return VOLUMES_INFO.find((v) => v.volume === selectedVolume);
  }, [selectedVolume]);

  const completionPercent = Math.round((completed.length / chapters.length) * 100);

  return (
    <section id="pustaka-kurikulum" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-amber-900/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-royal text-amber-400 tracking-widest uppercase">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>PUSTAKA DOKTRIN 200 BAB</span>
          </div>
          <h2 className="mt-2 font-royal text-3xl sm:text-4xl font-bold text-gold-gradient">
            Kurikulum Bertahap Negarawan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-300 max-w-2xl font-editorial italic">
            Disusun secara hierarkis dalam 8 tahapan volume untuk menggembleng kematangan intelektual, 
            moralitas kekuasaan, dan kelihaian diplomasi kebangsaan.
          </p>
        </div>

        {/* Learning Progress Summary */}
        <div className="p-4 rounded bg-[#140f09] border border-amber-900/40 min-w-[260px]">
          <div className="flex items-center justify-between text-xs text-stone-300 mb-2">
            <span className="font-royal text-amber-300 uppercase tracking-wider">Kemandirian Belajar</span>
            <span className="font-mono text-amber-400 font-bold">{completionPercent}%</span>
          </div>
          <div className="w-full bg-[#20180e] h-2 rounded-full overflow-hidden border border-amber-900/30">
            <div
              className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-stone-400 mt-2">
            <span>{completed.length} bab tuntas</span>
            <span>{bookmarks.length} disimpan</span>
            <span>{Object.keys(notes).length} catatan</span>
          </div>
        </div>
      </div>

      {/* Control Deck: Search & Filters */}
      <div className="mt-8 space-y-5">
        {/* Search Bar & Status Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari bab, nomor (misal 'Bab 14'), falsafah Jawa, atau topik kurikulum..."
              className="w-full pl-10 pr-4 py-2.5 rounded bg-[#120e09] border border-amber-900/40 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Status Filter Segmented Controls */}
          <div className="flex items-center gap-1 p-1 bg-[#120e09] border border-amber-900/40 rounded overflow-x-auto shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-royal uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Semua ({chapters.length})
            </button>
            <button
              onClick={() => setStatusFilter('bookmarked')}
              className={`px-3 py-1.5 text-xs font-royal uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'bookmarked'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Tersimpan ({bookmarks.length})
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1.5 text-xs font-royal uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'completed'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Tuntas ({completed.length})
            </button>
            <button
              onClick={() => setStatusFilter('has_note')}
              className={`px-3 py-1.5 text-xs font-royal uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'has_note'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Catatan ({Object.keys(notes).length})
            </button>
          </div>
        </div>

        {/* Volume Selector Tabs (8 Volumes) */}
        <div>
          <div className="text-xs font-royal text-amber-400/80 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>Tahapan Volume Kurikulum:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedVolume('all')}
              className={`px-3.5 py-1.5 rounded text-xs font-royal tracking-wider uppercase transition-all cursor-pointer ${
                selectedVolume === 'all'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                  : 'bg-[#15100a] text-stone-400 hover:text-amber-200 border border-amber-900/30'
              }`}
            >
              Semua Volume (200 Bab)
            </button>
            {VOLUMES_INFO.map((vol) => (
              <button
                key={vol.volume}
                onClick={() => setSelectedVolume(vol.volume)}
                className={`px-3 py-1.5 rounded text-xs font-royal tracking-wider uppercase transition-all cursor-pointer ${
                  selectedVolume === vol.volume
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md'
                    : 'bg-[#15100a] text-stone-400 hover:text-amber-200 border border-amber-900/30'
                }`}
              >
                Vol {vol.volume} ({vol.rentangBab})
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Filter Tabs (5 Pillars) */}
        <div>
          <div className="text-xs font-royal text-amber-400/80 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>5 Pilar Materi Inti:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPilar('all')}
              className={`px-3 py-1 rounded text-xs font-sans transition-colors cursor-pointer ${
                selectedPilar === 'all'
                  ? 'bg-amber-950/80 text-amber-200 border border-amber-500/50 font-semibold'
                  : 'bg-[#110d08] text-stone-400 hover:text-stone-200 border border-amber-950'
              }`}
            >
              Semua Pilar
            </button>
            {pillars.map((pil) => (
              <button
                key={pil}
                onClick={() => setSelectedPilar(pil)}
                className={`px-3 py-1 rounded text-xs font-sans transition-colors cursor-pointer ${
                  selectedPilar === pil
                    ? 'bg-amber-950/80 text-amber-200 border border-amber-500/50 font-semibold'
                    : 'bg-[#110d08] text-stone-400 hover:text-stone-200 border border-amber-950'
                }`}
              >
                {pil}
              </button>
            ))}
          </div>
        </div>

        {/* Active Volume Explanation Banner if specific volume selected */}
        {activeVolData && (
          <div className="p-4 rounded bg-gradient-to-r from-[#1a1309] to-[#120e08] border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-royal text-amber-400 uppercase tracking-widest">
                {activeVolData.romawi} · {activeVolData.rentangBab}
              </span>
              <h3 className="font-royal text-lg font-bold text-amber-200 mt-0.5">
                {activeVolData.title}
              </h3>
              <p className="text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
                {activeVolData.deskripsi}
              </p>
            </div>
            <div className="text-xs text-amber-400/90 whitespace-nowrap shrink-0 border-l border-amber-800/40 pl-4 hidden lg:block">
              <span className="block font-royal font-semibold">Fokus Materi:</span>
              <span>{activeVolData.fokusPilar.join(' & ')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Chapters Grid Display */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 mb-4">
          <span>
            Menampilkan <strong className="text-amber-300 font-mono">{filteredChapters.length}</strong> dari 200 Bab
          </span>
          {(searchQuery || selectedVolume !== 'all' || selectedPilar !== 'all' || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedVolume('all');
                setSelectedPilar('all');
                setStatusFilter('all');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1c150b] hover:bg-[#281e10] text-amber-300 hover:text-amber-100 border border-amber-700/50 text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer shadow-sm group"
            >
              <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform" />
              <span>Kembali ke Seluruh 200 Bab</span>
            </button>
          )}
        </div>

        {filteredChapters.length === 0 ? (
          <div className="p-12 text-center rounded bg-[#130f0a] border border-amber-900/30 space-y-4">
            <BookOpen className="w-8 h-8 text-amber-500/50 mx-auto" />
            <h3 className="font-royal text-lg text-amber-200">Tidak ada bab yang sesuai kriteria</h3>
            <p className="text-sm text-stone-400 max-w-md mx-auto">
              Cobalah mengganti kata kunci pencarian atau mengatur ulang filter Volume dan Pilar.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedVolume('all');
                setSelectedPilar('all');
                setStatusFilter('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-royal text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Tampilan Awal 200 Bab</span>
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredChapters.map((chapter) => {
              const isBm = bookmarks.includes(chapter.id);
              const isComp = completed.includes(chapter.id);
              const hasN = Boolean(notes[chapter.id]);

              return (
                <div
                  key={chapter.id}
                  onClick={() => onSelectChapter(chapter)}
                  className={`group relative flex flex-col justify-between p-5 rounded bg-[#110d08] hover:bg-[#18130c] border transition-all duration-200 cursor-pointer ${
                    isComp
                      ? 'border-emerald-600/30'
                      : 'border-amber-900/30 hover:border-amber-500/50 hover:shadow-[0_4px_20px_rgba(217,119,6,0.15)]'
                  }`}
                >
                  <div>
                    {/* Top metadata line: NO PILLS, clean text with separators */}
                    <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-amber-400 font-bold">BAB {chapter.id}</span>
                        <span aria-hidden="true" className="text-stone-600">·</span>
                        <span className="font-royal text-stone-400 uppercase tracking-wider">{chapter.volumeRomawi}</span>
                      </div>

                      {/* Bookmark Icon Quick Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(chapter.id);
                        }}
                        className="p-1 text-stone-500 hover:text-amber-400 transition-colors"
                        title={isBm ? 'Hapus dari Simpanan' : 'Simpan Bab Ini'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBm ? 'fill-amber-400 text-amber-400' : ''}`} />
                      </button>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="font-royal text-base font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                      {chapter.title}
                    </h3>

                    {/* Philosophy snippet */}
                    <div className="mt-3 py-2 px-2.5 rounded bg-[#0a0704] border border-amber-950/60 text-xs">
                      <span className="block font-editorial text-amber-200/90 italic font-semibold line-clamp-1">
                        "{chapter.falsafah}"
                      </span>
                      <span className="block text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                        {chapter.falsafahArti}
                      </span>
                    </div>

                    {/* Subtitle / Significance */}
                    <p className="mt-2.5 text-xs text-stone-300/80 line-clamp-2 leading-relaxed">
                      {chapter.subtitle}
                    </p>
                  </div>

                  {/* Card Bottom: Clean metadata & Action trigger */}
                  <div className="mt-4 pt-3 border-t border-amber-950 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 text-stone-400">
                      <span className="truncate max-w-[130px]">{chapter.pilar}</span>
                      {hasN && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-400">Ada Catatan</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 group-hover:translate-x-0.5 transition-transform font-royal font-semibold uppercase">
                      <span>{isComp ? 'Tuntas' : 'Pelajari'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Elegant Back To Top Action */}
        {filteredChapters.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#16110a] hover:bg-[#20180d] text-amber-300 hover:text-amber-100 border border-amber-700/50 hover:border-amber-400 text-xs font-royal uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Kembali ke Atas Kurikulum</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
