import React, { useState, useEffect } from 'react';
import {
  X,
  Bookmark,
  CheckCircle2,
  Volume2,
  VolumeX,
  ArrowLeft,
  ArrowRight,
  Share2,
  Copy,
  Check,
  FileEdit,
  Sparkles,
  Scroll,
} from 'lucide-react';
import { Chapter } from '../data/chaptersData';

interface ChapterReaderModalProps {
  chapter: Chapter | null;
  onClose: () => void;
  isBookmarked: boolean;
  isCompleted: boolean;
  onToggleBookmark: (id: number) => void;
  onToggleCompleted: (id: number) => void;
  userNote: string;
  onSaveNote: (id: number, note: string) => void;
  onNavigateChapter: (direction: 'next' | 'prev') => void;
  canPrev: boolean;
  canNext: boolean;
}

export const ChapterReaderModal: React.FC<ChapterReaderModalProps> = ({
  chapter,
  onClose,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  userNote,
  onSaveNote,
  onNavigateChapter,
  canPrev,
  canNext,
}) => {
  const [noteText, setNoteText] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (chapter) {
      setNoteText(userNote || '');
      setIsNoteSaved(false);
      // Stop speech if chapter changes
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    }
  }, [chapter, userNote]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!chapter) return null;

  const handleSaveNote = () => {
    onSaveNote(chapter.id, noteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const handleCopyPhilosophy = () => {
    const textToCopy = `"${chapter.falsafah}" - ${chapter.falsafahArti} (Bab ${chapter.id}: ${chapter.title} - Akademi Politik 200 Bab, Disusun oleh Jundi Abdul Syahid, S.Pd.)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur narasi audio tidak didukung oleh browser Anda.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const narration = `Bab ${chapter.id}. ${chapter.title}. Falsafah: ${chapter.falsafah}. Maknanya: ${chapter.falsafahArti}. Ringkasan doktrin: ${chapter.ringkasan}`;
    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0e0b08] border border-amber-600/40 rounded-lg shadow-[0_0_50px_rgba(217,119,6,0.25)] text-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/40 bg-[#140f0a] shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1c140b] hover:bg-[#271d0f] text-amber-300 hover:text-amber-100 border border-amber-600/50 text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer shadow-[0_0_12px_rgba(217,119,6,0.15)]"
              title="Kembali ke Daftar 200 Bab"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-amber-400 font-royal tracking-widest uppercase">
              <span>{chapter.volumeRomawi}</span>
              <span aria-hidden="true">·</span>
              <span>BAB {chapter.id} DARI 200</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-400">{chapter.pilar}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Speech */}
            <button
              onClick={toggleSpeech}
              title={isSpeaking ? 'Hentikan Audio Narasi' : 'Dengarkan Narasi Audio (Bahasa Indonesia)'}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isSpeaking
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400 animate-pulse'
                  : 'bg-[#1a140c] text-stone-400 border-amber-900/40 hover:text-amber-200 hover:border-amber-600'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(chapter.id)}
              title={isBookmarked ? 'Hapus dari Simpanan' : 'Simpan Bab Ini'}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                  : 'bg-[#1a140c] text-stone-400 border-amber-900/40 hover:text-amber-200 hover:border-amber-600'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            {/* Completion status button */}
            <button
              onClick={() => onToggleCompleted(chapter.id)}
              title={isCompleted ? 'Tandai Belum Selesai' : 'Tandai Sudah Tuntas'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50'
                  : 'bg-[#1a140c] text-stone-400 border-amber-900/40 hover:text-amber-200 hover:border-amber-600'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : ''}`} />
              <span className="hidden sm:inline">{isCompleted ? 'Tuntas Dipelajari' : 'Tandai Tuntas'}</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Chapter Title & Subtitle */}
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-500/80 uppercase">
              Kurikulum Resmi Akademi · Volume {chapter.volume}
            </span>
            <h2 className="mt-1 font-royal text-2xl sm:text-3xl font-bold text-gold-gradient leading-tight">
              Bab {chapter.id}. {chapter.title}
            </h2>
            <p className="mt-2 text-base text-stone-300 font-editorial italic">
              {chapter.subtitle}
            </p>
          </div>

          {/* Falsafah Jawa & Hikmah Klasik Box */}
          <div className="relative p-6 rounded bg-gradient-to-r from-[#1c150b] via-[#161109] to-[#120e08] border border-amber-500/30">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-royal text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>MUTIARA FALSAFAH KEPEMIMPINAN</span>
              </div>
              <button
                onClick={handleCopyPhilosophy}
                className="flex items-center gap-1 text-[11px] text-amber-300/80 hover:text-amber-200 transition-colors cursor-pointer"
              >
                {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedQuote ? 'Tersalin' : 'Salin Falsafah'}</span>
              </button>
            </div>

            <blockquote className="mt-3 font-editorial text-2xl sm:text-3xl text-amber-200 italic font-semibold leading-relaxed">
              "{chapter.falsafah}"
            </blockquote>
            <p className="mt-2 text-sm text-amber-100/80 font-sans leading-relaxed">
              <span className="font-semibold text-amber-300">Makna Hakiki:</span> {chapter.falsafahArti}
            </p>
          </div>

          {/* Ringkasan Doktrin / Core Thesis */}
          <div className="space-y-3">
            <h3 className="font-royal text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>Doktrin & Landasan Filosofis</span>
            </h3>
            <p className="text-base text-stone-200 leading-relaxed font-sans first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-amber-300">
              {chapter.ringkasan}
            </p>
          </div>

          {/* Silabus 4 Pokok Bahasan */}
          <div className="p-5 rounded bg-[#130f0a] border border-amber-900/30 space-y-4">
            <h3 className="font-royal text-sm font-bold uppercase tracking-wider text-amber-400">
              Silabus Pokok Bahasan Bab {chapter.id}
            </h3>
            <ol className="space-y-2.5 text-sm text-stone-300">
              {chapter.silabus.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-royal text-xs font-bold text-amber-400/90 tabular-nums shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Skenario Studi Kasus Lapangan */}
          <div className="p-5 rounded bg-[#16110a] border border-amber-700/25 space-y-2">
            <div className="text-xs font-royal text-amber-400/90 uppercase tracking-widest">
              Studi Kasus Dilema Lapangan
            </div>
            <p className="text-sm text-stone-200 leading-relaxed italic">
              "{chapter.studiKasus}"
            </p>
          </div>

          {/* Protokol Aksi Negarawan */}
          <div className="space-y-3">
            <h3 className="font-royal text-sm font-bold uppercase tracking-wider text-amber-400">
              Protokol Aksi Lapangan Bagi Kader Negarawan
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-1">
              {chapter.protokolAksi.map((proto, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded bg-[#120e09] border border-amber-950/70">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs shrink-0 mt-0.5 font-mono">
                    ✓
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed">{proto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Catatan Belajar & Refleksi Pribadi */}
          <div className="pt-4 border-t border-amber-900/30 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <FileEdit className="w-4 h-4 text-amber-400" />
                <span>Buku Catatan & Refleksi Anda</span>
              </h3>
              {isNoteSaved && (
                <span className="text-xs text-emerald-400 font-sans flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Tersimpan ke Jurnal
                </span>
              )}
            </div>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Tuliskan refleksi, strategi implementasi pada organisasi Anda, atau kutipan penting dari bab ini..."
              rows={3}
              className="w-full p-3.5 rounded bg-[#090704] border border-amber-900/50 text-stone-200 placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSaveNote}
                className="px-4 py-2 text-xs font-royal font-bold uppercase tracking-wider bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded transition-colors cursor-pointer"
              >
                Simpan Catatan Bab {chapter.id}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom Navigation Footer */}
        <div className="px-6 py-4 border-t border-amber-900/40 bg-[#120e09] flex items-center justify-between shrink-0">
          <button
            onClick={() => onNavigateChapter('prev')}
            disabled={!canPrev}
            className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer ${
              canPrev
                ? 'text-amber-300 hover:bg-amber-900/20'
                : 'text-stone-600 cursor-not-allowed opacity-40'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bab Sebelumnya</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400 font-mono hidden sm:inline">
              {chapter.id} / 200 Bab
            </span>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded bg-[#1c140b] hover:bg-[#271d0f] text-amber-300 hover:text-amber-100 border border-amber-800/50 text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer"
            >
              Kembali ke Daftar
            </button>
          </div>

          <button
            onClick={() => onNavigateChapter('next')}
            disabled={!canNext}
            className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-royal uppercase tracking-wider transition-colors cursor-pointer ${
              canNext
                ? 'text-amber-300 hover:bg-amber-900/20'
                : 'text-stone-600 cursor-not-allowed opacity-40'
            }`}
          >
            <span>Bab Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
