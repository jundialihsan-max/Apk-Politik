import React, { useState } from 'react';
import {
  FileText,
  Bookmark,
  CheckCircle2,
  Download,
  Printer,
  Trash2,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { Chapter } from '../data/chaptersData';

interface NotesAndProgressProps {
  chapters: Chapter[];
  bookmarks: number[];
  completed: number[];
  notes: Record<number, string>;
  onOpenChapter: (chapter: Chapter) => void;
  onRemoveBookmark: (id: number) => void;
  onDeleteNote: (id: number) => void;
  onBackToCurriculum: () => void;
}

export const NotesAndProgress: React.FC<NotesAndProgressProps> = ({
  chapters,
  bookmarks,
  completed,
  notes,
  onOpenChapter,
  onRemoveBookmark,
  onDeleteNote,
  onBackToCurriculum,
}) => {
  const [activeTab, setActiveTab] = useState<'catatan' | 'simpanan' | 'tuntas'>('catatan');

  const bookmarkedChapters = chapters.filter((c) => bookmarks.includes(c.id));
  const completedChapters = chapters.filter((c) => completed.includes(c.id));
  const chaptersWithNotes = chapters.filter((c) => Boolean(notes[c.id]));

  // Export Complete 200 Bab Syllabus to Text File
  const handleExportSyllabus = () => {
    let content = `AKADEMI POLITIK 200 BAB\n`;
    content += `Disusun oleh: Jundi Abdul Syahid, S.Pd. (Orang Dalam Genetik Jawa)\n`;
    content += `Fokus Materi: Politik Organisasi Etis, Negosiasi, Diplomasi, Kepemimpinan Falsafah Jawa & Politik Pendidikan\n`;
    content += `================================================================================\n\n`;

    chapters.forEach((ch) => {
      content += `BAB ${ch.id}: ${ch.title.toUpperCase()}\n`;
      content += `Volume: ${ch.volumeRomawi} - ${ch.volumeTitle}\n`;
      content += `Pilar: ${ch.pilar}\n`;
      content += `Falsafah: "${ch.falsafah}" - ${ch.falsafahArti}\n`;
      content += `Ringkasan: ${ch.ringkasan}\n`;
      content += `Silabus:\n`;
      ch.silabus.forEach((s, idx) => {
        content += `  ${idx + 1}. ${s}\n`;
      });
      content += `Protokol Aksi:\n`;
      ch.protokolAksi.forEach((p) => {
        content += `  - ${p}\n`;
      });
      if (notes[ch.id]) {
        content += `Catatan Pribadi Pembaca:\n  ${notes[ch.id]}\n`;
      }
      content += `--------------------------------------------------------------------------------\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Silabus_Lengkap_Akademi_Politik_200_Bab.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
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
          Rekam Akademik Kader
        </span>
      </div>

      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-amber-900/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-royal text-amber-400 tracking-widest uppercase">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>BUKU JURNAL & RAPOR KELULUSAN</span>
          </div>
          <h2 className="mt-2 font-royal text-3xl sm:text-4xl font-bold text-gold-gradient">
            Jurnal Studi & Rekam Kemajuan
          </h2>
          <p className="mt-2 text-stone-300 font-editorial italic text-base max-w-2xl">
            Arsip catatan refleksi pribadi, bab yang ditandai, serta ekspor silabus resmi kurikulum 200 bab.
          </p>
        </div>

        {/* Action buttons: Export & Print */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportSyllabus}
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-royal text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Silabus Lengkap (.txt)</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#16110a] text-amber-300 border border-amber-800/40 hover:border-amber-400 font-royal text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / PDF</span>
          </button>
        </div>
      </div>

      {/* Progress Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded bg-[#120e08] border border-amber-900/40 space-y-2">
          <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
            Bab Tuntas Dipelajari
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-royal text-3xl font-bold text-emerald-400 tabular-nums">
              {completed.length}
            </span>
            <span className="text-xs text-stone-400 font-mono">/ 200 Bab</span>
          </div>
          <p className="text-[11px] text-stone-400">
            {Math.round((completed.length / 200) * 100)}% dari kurikulum paripurna telah diselesaikan.
          </p>
        </div>

        <div className="p-5 rounded bg-[#120e08] border border-amber-900/40 space-y-2">
          <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
            Bab Tersimpan (Bookmark)
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-royal text-3xl font-bold text-amber-300 tabular-nums">
              {bookmarks.length}
            </span>
            <span className="text-xs text-stone-400 font-mono">Bab</span>
          </div>
          <p className="text-[11px] text-stone-400">
            Disimpan sebagai rujukan strategi cepat sewaktu-waktu.
          </p>
        </div>

        <div className="p-5 rounded bg-[#120e08] border border-amber-900/40 space-y-2">
          <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
            Catatan & Refleksi Ditulis
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-royal text-3xl font-bold text-amber-300 tabular-nums">
              {chaptersWithNotes.length}
            </span>
            <span className="text-xs text-stone-400 font-mono">Entri</span>
          </div>
          <p className="text-[11px] text-stone-400">
            Pemikiran mandiri yang terekam aman di memori perangkat Anda.
          </p>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-amber-900/30 pb-3">
        <button
          onClick={() => setActiveTab('catatan')}
          className={`px-4 py-2 text-xs font-royal uppercase tracking-wider rounded transition-colors cursor-pointer ${
            activeTab === 'catatan'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Catatan Pribadi ({chaptersWithNotes.length})
        </button>

        <button
          onClick={() => setActiveTab('simpanan')}
          className={`px-4 py-2 text-xs font-royal uppercase tracking-wider rounded transition-colors cursor-pointer ${
            activeTab === 'simpanan'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Bab Tersimpan ({bookmarkedChapters.length})
        </button>

        <button
          onClick={() => setActiveTab('tuntas')}
          className={`px-4 py-2 text-xs font-royal uppercase tracking-wider rounded transition-colors cursor-pointer ${
            activeTab === 'tuntas'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Daftar Tuntas ({completedChapters.length})
        </button>
      </div>

      {/* Tab Contents */}
      <div>
        {activeTab === 'catatan' && (
          <div className="space-y-4">
            {chaptersWithNotes.length === 0 ? (
              <div className="p-12 text-center rounded bg-[#100c07] border border-amber-900/30 text-stone-400">
                <p>Belum ada catatan yang ditulis. Buka salah satu bab lalu tuliskan refleksi pada kolom catatan.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {chaptersWithNotes.map((ch) => (
                  <div
                    key={ch.id}
                    className="p-5 rounded bg-[#120e08] border border-amber-900/40 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                        <span className="font-mono text-amber-400 font-bold">BAB {ch.id}</span>
                        <span className="font-royal uppercase">{ch.volumeRomawi}</span>
                      </div>
                      <h4 className="font-royal text-base font-bold text-amber-200">
                        {ch.title}
                      </h4>
                      <div className="mt-3 p-3 rounded bg-[#090704] border border-amber-950 text-xs text-stone-300 italic whitespace-pre-wrap leading-relaxed">
                        "{notes[ch.id]}"
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-amber-950 mt-2">
                      <button
                        onClick={() => onDeleteNote(ch.id)}
                        className="text-[11px] text-stone-500 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Hapus Catatan</span>
                      </button>

                      <button
                        onClick={() => onOpenChapter(ch)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-royal font-semibold uppercase flex items-center gap-1 cursor-pointer"
                      >
                        <span>Buka Bab</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'simpanan' && (
          <div className="space-y-4">
            {bookmarkedChapters.length === 0 ? (
              <div className="p-12 text-center rounded bg-[#100c07] border border-amber-900/30 text-stone-400">
                <p>Belum ada bab yang disimpan. Klik ikon bookmark pada bab yang ingin Anda pelajari berulang.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bookmarkedChapters.map((ch) => (
                  <div
                    key={ch.id}
                    onClick={() => onOpenChapter(ch)}
                    className="p-5 rounded bg-[#120e08] hover:bg-[#18130c] border border-amber-900/40 hover:border-amber-500 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                        <span className="font-mono text-amber-400 font-bold">BAB {ch.id}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveBookmark(ch.id);
                          }}
                          className="text-amber-400 hover:text-stone-400"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-amber-400" />
                        </button>
                      </div>
                      <h4 className="font-royal text-base font-bold text-amber-200">
                        {ch.title}
                      </h4>
                      <p className="mt-2 text-xs text-stone-400 italic font-editorial">
                        "{ch.falsafah}"
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-amber-950 flex justify-end">
                      <span className="text-xs text-amber-400 font-royal font-semibold uppercase flex items-center gap-1">
                        <span>Buka</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'tuntas' && (
          <div className="space-y-4">
            {completedChapters.length === 0 ? (
              <div className="p-12 text-center rounded bg-[#100c07] border border-amber-900/30 text-stone-400">
                <p>Belum ada bab yang ditandai tuntas. Centang status tuntas saat Anda selesai membaca bab.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {completedChapters.map((ch) => (
                  <div
                    key={ch.id}
                    onClick={() => onOpenChapter(ch)}
                    className="p-5 rounded bg-[#0e140d] border border-emerald-600/30 hover:border-emerald-400 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                        <span className="font-mono text-emerald-400 font-bold">BAB {ch.id}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-royal text-base font-bold text-stone-200">
                        {ch.title}
                      </h4>
                      <span className="text-[11px] text-stone-400 block mt-2">{ch.pilar}</span>
                    </div>
                    <div className="mt-4 pt-2 border-t border-emerald-950 flex justify-end">
                      <span className="text-xs text-emerald-400 font-royal font-semibold uppercase flex items-center gap-1">
                        <span>Kaji Ulang</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
