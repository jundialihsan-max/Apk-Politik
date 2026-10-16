/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ALL_CHAPTERS, Chapter } from './data/chaptersData';
import { TopNavigation } from './components/TopNavigation';
import { HeroSection } from './components/HeroSection';
import { CurriculumBrowser } from './components/CurriculumBrowser';
import { ChapterReaderModal } from './components/ChapterReaderModal';
import { HastabrataMatrix } from './components/HastabrataMatrix';
import { DilemmaSimulator } from './components/DilemmaSimulator';
import { NotesAndProgress } from './components/NotesAndProgress';
import { AuthorProfileView } from './components/AuthorProfileView';
import { FloatingEmbers } from './components/FloatingEmbers';
import { Sparkles, Crown, ArrowLeft, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'kurikulum' | 'hastabrata' | 'dilema' | 'catatan' | 'penyusun'>('kurikulum');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // LocalStorage state persistence
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('akademi_bookmarks');
      return saved ? JSON.parse(saved) : [1, 2, 7, 54, 101, 126, 200];
    } catch {
      return [1, 2, 7, 54, 101, 126, 200];
    }
  });

  const [completed, setCompleted] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('akademi_completed');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [notes, setNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('akademi_notes');
      return saved
        ? JSON.parse(saved)
        : {
            1: 'Pondasi utama: kekuasaan bukan tujuan, melainkan wasilah pengabdian kepada rakyat jelata.',
          };
    } catch {
      return {
        1: 'Pondasi utama: kekuasaan bukan tujuan, melainkan wasilah pengabdian kepada rakyat jelata.',
      };
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('akademi_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('akademi_completed', JSON.stringify(completed));
    } catch (e) {
      console.error(e);
    }
  }, [completed]);

  useEffect(() => {
    try {
      localStorage.setItem('akademi_notes', JSON.stringify(notes));
    } catch (e) {
      console.error(e);
    }
  }, [notes]);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompleted = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSaveNote = (id: number, noteText: string) => {
    setNotes((prev) => {
      const updated = { ...prev };
      if (noteText.trim() === '') {
        delete updated[id];
      } else {
        updated[id] = noteText;
      }
      return updated;
    });
  };

  const handleDeleteNote = (id: number) => {
    setNotes((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleOpenChapterById = (chapterId: number) => {
    const target = ALL_CHAPTERS.find((c) => c.id === chapterId);
    if (target) {
      setSelectedChapter(target);
    }
  };

  const handleNavigateChapter = (direction: 'next' | 'prev') => {
    if (!selectedChapter) return;
    const currentIndex = ALL_CHAPTERS.findIndex((c) => c.id === selectedChapter.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedChapter(ALL_CHAPTERS[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < ALL_CHAPTERS.length - 1) {
      setSelectedChapter(ALL_CHAPTERS[currentIndex + 1]);
    }
  };

  const currentChapterIndex = selectedChapter
    ? ALL_CHAPTERS.findIndex((c) => c.id === selectedChapter.id)
    : -1;
  const canPrev = currentChapterIndex > 0;
  const canNext = currentChapterIndex >= 0 && currentChapterIndex < ALL_CHAPTERS.length - 1;

  return (
    <div className="min-h-screen bg-[#070503] text-[#ede2ce] flex flex-col relative selection:bg-amber-600/30 selection:text-amber-200">
      {/* Ambient Classic Gold Embers Effect */}
      <FloatingEmbers />

      {/* Top Bar Navigation */}
      <TopNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedCount={completed.length}
        totalChapters={ALL_CHAPTERS.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section shown when in Kurikulum view */}
        {activeTab === 'kurikulum' && (
          <HeroSection
            onExplore={() => {
              const el = document.getElementById('pustaka-kurikulum');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenHastabrata={() => setActiveTab('hastabrata')}
            onOpenDilemma={() => setActiveTab('dilema')}
          />
        )}

        {/* Tab 1: 200 Bab Curriculum Browser */}
        {activeTab === 'kurikulum' && (
          <CurriculumBrowser
            chapters={ALL_CHAPTERS}
            onSelectChapter={(chap) => setSelectedChapter(chap)}
            bookmarks={bookmarks}
            completed={completed}
            notes={notes}
            onToggleBookmark={toggleBookmark}
            onToggleCompleted={toggleCompleted}
          />
        )}

        {/* Tab 2: Hastabrata Leadership Matrix */}
        {activeTab === 'hastabrata' && (
          <HastabrataMatrix
            onOpenChapterById={handleOpenChapterById}
            onBackToCurriculum={() => setActiveTab('kurikulum')}
          />
        )}

        {/* Tab 3: Dilemma Simulator */}
        {activeTab === 'dilema' && (
          <DilemmaSimulator
            onOpenChapterById={handleOpenChapterById}
            onBackToCurriculum={() => setActiveTab('kurikulum')}
          />
        )}

        {/* Tab 4: Notes and Progress */}
        {activeTab === 'catatan' && (
          <NotesAndProgress
            chapters={ALL_CHAPTERS}
            bookmarks={bookmarks}
            completed={completed}
            notes={notes}
            onOpenChapter={(chap) => setSelectedChapter(chap)}
            onRemoveBookmark={toggleBookmark}
            onDeleteNote={handleDeleteNote}
            onBackToCurriculum={() => setActiveTab('kurikulum')}
          />
        )}

        {/* Tab 5: Author Profile & Pedagogical Manifesto */}
        {activeTab === 'penyusun' && (
          <AuthorProfileView onBackToCurriculum={() => setActiveTab('kurikulum')} />
        )}
      </main>

      {/* Chapter In-Depth Study Modal */}
      {selectedChapter && (
        <ChapterReaderModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
          isBookmarked={bookmarks.includes(selectedChapter.id)}
          isCompleted={completed.includes(selectedChapter.id)}
          onToggleBookmark={toggleBookmark}
          onToggleCompleted={toggleCompleted}
          userNote={notes[selectedChapter.id] || ''}
          onSaveNote={handleSaveNote}
          onNavigateChapter={handleNavigateChapter}
          canPrev={canPrev}
          canNext={canNext}
        />
      )}

      {/* Floating Quick Return Button (when viewing other tabs) */}
      {activeTab !== 'kurikulum' && (
        <aside aria-label="Navigasi cepat" className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setActiveTab('kurikulum')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1c150b] hover:bg-[#2a1e0f] text-amber-300 hover:text-amber-100 border border-amber-500/50 text-xs font-royal uppercase tracking-wider shadow-[0_4px_25px_rgba(217,119,6,0.3)] transition-all active:scale-95 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke 200 Bab</span>
          </button>
        </aside>
      )}

      {/* Classical Gold Curatorial Footer */}
      <footer className="border-t border-amber-950/80 bg-[#060402] text-xs text-stone-400 py-10 px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-royal font-bold text-sm">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>AKADEMI POLITIK 200 BAB</span>
            </div>
            <p className="text-stone-300 font-editorial italic">
              Disusun oleh Jundi Abdul Syahid, S.Pd. (Orang Dalam Genetik Jawa)
            </p>
            <p className="text-[11px] text-stone-500">
              Doktrin Politik Organisasi Etis, Negosiasi, Diplomasi, Kepemimpinan Jawa & Politik Pendidikan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-royal uppercase tracking-wider text-amber-400/80">
            <button onClick={() => setActiveTab('kurikulum')} className="hover:text-amber-200 cursor-pointer">
              200 Bab
            </button>
            <button onClick={() => setActiveTab('hastabrata')} className="hover:text-amber-200 cursor-pointer">
              Hastabrata
            </button>
            <button onClick={() => setActiveTab('dilema')} className="hover:text-amber-200 cursor-pointer">
              Simulasi
            </button>
            <button onClick={() => setActiveTab('catatan')} className="hover:text-amber-200 cursor-pointer">
              Jurnal
            </button>
            <button onClick={() => setActiveTab('penyusun')} className="hover:text-amber-200 cursor-pointer">
              Penyusun
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-amber-950/40 text-center text-[11px] text-stone-500 font-sans">
          Hamemayu Hayuning Bawana · Sura Dira Jayaningrat Lebur Dening Pangastuti · Menang Tanpa Ngasorake
        </div>
      </footer>
    </div>
  );
}
