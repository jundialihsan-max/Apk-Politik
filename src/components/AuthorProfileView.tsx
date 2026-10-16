import React from 'react';
import { Crown, Sparkles, Scroll, GraduationCap, ShieldCheck, HeartHandshake, Compass, ArrowLeft } from 'lucide-react';

interface AuthorProfileViewProps {
  onBackToCurriculum: () => void;
}

export const AuthorProfileView: React.FC<AuthorProfileViewProps> = ({ onBackToCurriculum }) => {
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
          Amanat Negarawan
        </span>
      </div>

      {/* Top Author Editorial Frame */}
      <div className="relative rounded-lg p-8 sm:p-12 bg-gradient-to-r from-[#17120a] via-[#120e08] to-[#0c0905] border border-amber-500/40 overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-royal text-amber-400 tracking-widest uppercase">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>AMANAT INTELEKTUAL & SPIRITUAL</span>
            </div>

            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient leading-tight">
              Jundi Abdul Syahid, S.Pd.
            </h2>
            <p className="text-sm font-royal tracking-widest uppercase text-amber-400/90 font-semibold">
              Orang Dalam Genetik Jawa · Inisiator Kurikulum 200 Bab Akademi Politik
            </p>

            <blockquote className="mt-4 p-4 rounded bg-[#0b0805] border-l-2 border-amber-400 text-stone-200 font-editorial text-lg italic leading-relaxed">
              "Politik tanpa etika adalah sarang serigala. Kepemimpinan tanpa akar kebudayaan luhur adalah pohon rapuh 
              yang tumbang oleh angin sepoi sanjungan. Akademi Politik 200 Bab ini diikhtiarkan sebagai benteng 
              kedaulatan moral bagi putra-putri bangsa yang berani memikul amanah peradaban nusantara."
            </blockquote>

            <p className="text-sm text-stone-300 leading-relaxed font-sans pt-2">
              Lahir dan ditempa dari pergulatan nilai-nilai filosofis tanah Jawa yang disenyawakan dengan disiplin pedagogi formal (Sarjana Pendidikan). 
              Gagasan 200 bab ini bukan sekadar silabus teoritis di atas meja, melainkan pedoman aksi lapangan bagi siapa saja 
              yang ingin menakhodai organisasi, menegakkan keadilan ruang kelas, dan merundingkan kepentingan rakyat di hadapan lawan politik yang perkasa.
            </p>
          </div>

          {/* Right Visual Emblem */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-b from-amber-400 via-amber-700 to-amber-950 shadow-[0_0_40px_rgba(217,119,6,0.35)]">
              <img
                src="/src/assets/images/emblem_royal_leadership_1792131960509.jpg"
                alt="Emblem Kebijaksanaan Negarawan Jawa"
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-full object-cover filter contrast-110"
              />
            </div>
            <span className="font-royal text-xs font-bold text-amber-300 uppercase tracking-widest mt-4">
              Pusaka Bawa Laksana
            </span>
            <span className="text-[11px] text-stone-400">
              Penyatuan Titah, Batin & Amal
            </span>
          </div>
        </div>
      </div>

      {/* 3 Pillars of The Author's Pedagogical Manifesto */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
            Trias Kebangkitan Negarawan
          </span>
          <h3 className="mt-1 font-royal text-2xl sm:text-3xl font-bold text-amber-200">
            Fondasi Gerakan Politik Pendidikan Etis
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-[#130f09] border border-amber-900/40 space-y-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-royal text-lg font-bold text-amber-200">
              1. Etika Organisasi Radikal
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Menolak praktik korupsi, politik uang, nepotisme, dan kompromi busuk. 
              Organisasi harus menjadi lembaga suci pembina akal budi, bukan alat pengumpul kekayaan pribadi segelintir elit pengurus.
            </p>
          </div>

          <div className="p-6 rounded bg-[#130f09] border border-amber-900/40 space-y-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-royal text-lg font-bold text-amber-200">
              2. Seni Negosiasi & Diplomasi
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Terinspirasi dari prinsip "Menang Tanpa Ngasorake" dan "Ngluruk Tanpa Bala". 
              Negosiasi sejati bukan mempermalukan lawan hingga tersudut, melainkan menundukkan kezaliman dengan wibawa argumen dan kebenaran objektif.
            </p>
          </div>

          <div className="p-6 rounded bg-[#130f09] border border-amber-900/40 space-y-3">
            <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="font-royal text-lg font-bold text-amber-200">
              3. Politik Pendidikan Berdaulat
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Pendidikan adalah medan tempur penentu masa depan bangsa. Guru wajib dimuliakan martabat dan upahnya, 
              kurikulum harus membebaskan nalar kritis siswa dari komersialisasi, dan mengakar pada kearifan bumi pertiwi.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Artifact & Parchment Showcase */}
      <div className="p-6 sm:p-8 rounded bg-[#110d08] border border-amber-900/40 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 overflow-hidden rounded border border-amber-600/30">
          <img
            src="/src/assets/images/manuscript_diplomacy_gold_1792131961463.jpg"
            alt="Manuskrip Klasik Traktat Negosiasi & Diplomasi Emas"
            referrerPolicy="no-referrer"
            className="w-full h-64 object-cover filter contrast-115"
          />
        </div>
        <div className="md:col-span-7 space-y-3">
          <span className="text-xs font-royal text-amber-400 uppercase tracking-widest block">
            Risalah Abadi Bagi Murid Akademi
          </span>
          <h4 className="font-royal text-xl sm:text-2xl font-bold text-amber-200">
            Dedikasi Kepada Generasi Pemimpin Masa Depan
          </h4>
          <p className="text-sm text-stone-300 font-editorial text-base italic leading-relaxed">
            "Kalian yang membaca dan menuntaskan 200 bab ini tidak ditakdirkan untuk menjadi politisi yang mengejar tepuk tangan. 
            Kalian dipersiapkan menjadi tiang penyangga yang kokoh tatkala badai kezaliman menerpa Republik tercinta."
          </p>
          <div className="pt-2 text-xs text-amber-400/80 font-mono">
            — Jundi Abdul Syahid, S.Pd. (Orang Dalam Genetik Jawa)
          </div>
        </div>
      </div>
    </section>
  );
};
