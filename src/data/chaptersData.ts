export type PilarUtama =
  | 'Politik Organisasi Etis'
  | 'Seni Negosiasi Taktis'
  | 'Diplomasi & Geopolitik'
  | 'Kepemimpinan Falsafah Jawa'
  | 'Politik Pendidikan';

export interface Chapter {
  id: number;
  volume: number;
  volumeRomawi: string;
  volumeTitle: string;
  pilar: PilarUtama;
  title: string;
  subtitle: string;
  falsafah: string;
  falsafahArti: string;
  ringkasan: string;
  silabus: string[];
  studiKasus: string;
  protokolAksi: string[];
  durasiMenit: number;
}

export interface VolumeInfo {
  volume: number;
  romawi: string;
  title: string;
  rentangBab: string;
  deskripsi: string;
  fokusPilar: PilarUtama[];
  iconName: string;
}

export const VOLUMES_INFO: VolumeInfo[] = [
  {
    volume: 1,
    romawi: 'Volume I',
    title: 'Fondasi Etika Kekuasaan & Filosofi Kepemimpinan Luhur',
    rentangBab: 'Bab 1 – 25',
    deskripsi: 'Peletakan batu pertama kesadaran berpolitik: moralitas kekuasaan, legitimasi batiniah, bahaya tirani tanpa nurani, dan pembentukan watak luhur negarawan.',
    fokusPilar: ['Politik Organisasi Etis', 'Kepemimpinan Falsafah Jawa'],
    iconName: 'ShieldAlert',
  },
  {
    volume: 2,
    romawi: 'Volume II',
    title: 'Dinamika Politik Organisasi, Struktur & Budaya Birokrasi',
    rentangBab: 'Bab 26 – 50',
    deskripsi: 'Membedah anatomi organisasi kekuasaan, koalisi internal, pembagian wewenang, faksionalisme, serta rekayasa budaya organisasi yang bersih dari pembusukan moral.',
    fokusPilar: ['Politik Organisasi Etis', 'Seni Negosiasi Taktis'],
    iconName: 'Building2',
  },
  {
    volume: 3,
    romawi: 'Volume III',
    title: 'Seni Negosiasi Taktis & Resolusi Konflik Tingkat Tinggi',
    rentangBab: 'Bab 51 – 75',
    deskripsi: 'Arsitektur negosiasi meja bundar: membaca motif laten lawan, kalkulasi BATNA bermoral, seni kompromi tanpa menggadaikan harga diri, dan seni meredam kebuntuan.',
    fokusPilar: ['Seni Negosiasi Taktis', 'Diplomasi & Geopolitik'],
    iconName: 'Handshake',
  },
  {
    volume: 4,
    romawi: 'Volume IV',
    title: 'Diplomasi Kebangsaan, Lobi & Aliansi Antar-Lembaga',
    rentangBab: 'Bab 76 – 100',
    deskripsi: 'Menjalin jembatan antar entitas kekuasaan, ormas, partai, dan birokrasi negara; diplomasi senyap berwibawa, konsensus kebangsaan, dan manajemen friksi.',
    fokusPilar: ['Diplomasi & Geopolitik', 'Politik Organisasi Etis'],
    iconName: 'Globe2',
  },
  {
    volume: 5,
    romawi: 'Volume V',
    title: 'Kepemimpinan Hastabrata & Kebijaksanaan Falsafah Jawa',
    rentangBab: 'Bab 101 – 125',
    deskripsi: 'Integrasi mendalam kearifan genetik Jawa: 8 watak alam Hastabrata (Surya, Candra, Kartika, Angkasa, Maruta, Dahana, Baruna, Bhumi) serta Tri Dharma Mangkunegaran.',
    fokusPilar: ['Kepemimpinan Falsafah Jawa', 'Politik Organisasi Etis'],
    iconName: 'Crown',
  },
  {
    volume: 6,
    romawi: 'Volume VI',
    title: 'Politik Pendidikan, Kurikulum Kuasa & Karakter Generasi',
    rentangBab: 'Bab 126 – 150',
    deskripsi: 'Pendidikan sebagai arena perebutan masa depan bangsa: dekonstruksi hegemoni, independensi akademik, kurikulum budi pekerti, dan perlawanan terhadap komersialisasi ilmu.',
    fokusPilar: ['Politik Pendidikan', 'Politik Organisasi Etis'],
    iconName: 'GraduationCap',
  },
  {
    volume: 7,
    romawi: 'Volume VII',
    title: 'Tata Kelola Lembaga Pendidikan & Transformasi Kebijakan Publik',
    rentangBab: 'Bab 151 – 175',
    deskripsi: 'Strategi pembenahan birokrasi dinas pendidikan, perlindungan martabat guru/dosen, alokasi anggaran 20% yang bebas manipulasi, dan tata kelola yayasan pendidikan.',
    fokusPilar: ['Politik Pendidikan', 'Diplomasi & Geopolitik'],
    iconName: 'ScrollText',
  },
  {
    volume: 8,
    romawi: 'Volume VIII',
    title: 'Negarawan Sejati, Warisan Peradaban & Konsolidasi Abadi',
    rentangBab: 'Bab 176 – 200',
    deskripsi: 'Puncak kematangan politisi menjadi negarawan sejati: suksesi regenerasi kepemimpinan mulus, arsitektur peradaban nusantara, dan prinsip Hamemayu Hayuning Bawana.',
    fokusPilar: ['Kepemimpinan Falsafah Jawa', 'Diplomasi & Geopolitik'],
    iconName: 'Flame',
  },
];

// Seed raw specific master chapters with authentic richness across the 200 chapters
interface ChapterSeed {
  id: number;
  title: string;
  subtitle: string;
  pilar: PilarUtama;
  falsafah: string;
  falsafahArti: string;
  ringkasan: string;
  silabus: string[];
  studiKasus: string;
  protokolAksi: string[];
}

const RAW_MASTER_CHAPTERS: ChapterSeed[] = [
  // --- VOLUME I (Bab 1 - 25) ---
  {
    id: 1,
    title: 'Hakikat Kekuasaan: Antara Amanah Suci dan Jerat Kezaliman',
    subtitle: 'Membongkar ilusi status dan meletakkan fondasi moralitas politik kepemimpinan sejati.',
    pilar: 'Politik Organisasi Etis',
    falsafah: 'Sura Dira Jayaningrat Lebur Dening Pangastuti',
    falsafahArti: 'Segala bentuk angkara murka dan keserakahan kekuasaan akan lebur oleh kelembutan budi pekerti dan ketulusan hati.',
    ringkasan: 'Kekuasaan pada hakikatnya adalah beban tanggung jawab eksistensial, bukan trofi kemenangan ego. Bab ini mengulas perbedaan mendasar antara politisi transaksional yang mengejar kedudukan dengan negarawan beretika yang memandang kekuasaan sebagai instrumen melayani rakyat.',
    silabus: [
      'Genealogi kekuasaan: dari legitimasi kharisma ke etika kelembagaan',
      'Anatomi nafsu berkuasa (hubbun riasah) dan bahaya korupsi batiniah',
      'Distingsi antara otoritas sah (legitimate authority) dan pemaksaan kuasa (coercion)',
      'Konsep kekuasaan Jawa: Wahyu Cakraningrat dan kepatutan moral'
    ],
    studiKasus: 'Seorang pimpinan muda terpilih melalui musyawarah organisasi namun langsung didatangi pemodal yang meminta konsesi proyek internal sebagai imbal balik logistik pemenangan.',
    protokolAksi: [
      'Lakukan audit integritas pribadi sebelum menandatangani persetujuan jabatan apa pun',
      'Tegaskan batas etis merah (red lines) secara tertulis kepada tim pemenangan',
      'Tolak setiap transaksi terselubung dengan mengutamakan transparansi konstitusi organisasi'
    ]
  },
  {
    id: 2,
    title: 'Mulat Sarira Hangrasa Wani: Introspeksi Kedalaman Batin Pemimpin',
    subtitle: 'Seni mengukur kelemahan diri sebelum menuntut kepatuhan dari orang lain.',
    pilar: 'Kepemimpinan Falsafah Jawa',
    falsafah: 'Mulat Sarira Hangrasa Wani',
    falsafahArti: 'Mampu berkaca pada diri sendiri sebelum bertindak, dan berani bersikap kesatria menghadapi kebenaran.',
    ringkasan: 'Seorang pemimpin yang tidak mengenal bayang-bayang gelap psikologisnya sendiri akan mudah diadu domba dan diperbudak sanjungan penjilat. Introspeksi batiniah bukan kepasrahan, melainkan ketajaman deteksi diri.',
    silabus: [
      'Psikologi kepemimpinan: mekanisme defensif ego dan proyeksi kesalahan',
      'Membangun lingkaran penasihat kritis (truth-tellers) yang tak segan mendebat pimpinan',
      'Praktik tapa brata modern: jeda kontemplatif dalam keriuhan pengambilan keputusan',
      'Menilai motif pribadi dalam setiap kebijakan publik yang diputuskan'
    ],
    studiKasus: 'Terjadi kegagalan program kerja besar. Pemimpin cenderung menyalahkan koordinator lapangan di hadapan media massa daripada mengevaluasi arahan strategisnya sendiri.',
    protokolAksi: [
      'Gunakan prinsip: puji tim di depan publik, ambil tanggung jawab kegagalan di pundak pemimpin',
      'Ciptakan sesi debrief mingguan tanpa hierarki untuk mendengar evaluasi paling tajam',
      'Hindari membuat keputusan krusial dalam kondisi lelah mental atau amarah'
    ]
  },
  {
    id: 3,
    title: 'Integritas Radikal dalam Pusaran Politik Uang dan Transaksionalisme',
    subtitle: 'Strategi bertahan dan menang tanpa mencemari kehormatan diri di ranah pragmatis.',
    pilar: 'Politik Organisasi Etis',
    falsafah: 'Budi Pekerti Luhur Tinuntun Dening Kasucen',
    falsafahArti: 'Budi pekerti luhur yang dipandu oleh kesucian nurani menjadi benteng terkuat martabat manusia.',
    ringkasan: 'Pragmatisme seringkali dijadikan pembenaran atas kompromi haram. Bab ini mengajarkan taktik membangun kekuatan politik alternatif berbasis loyalitas gagasan, modal sosial, dan kredibilitas rekam jejak tanpa bergantung pada uang sogokan.',
    silabus: [
      'Mekanisme perputaran modal gelap dalam kontestasi organisasi modern',
      'Strategi membangun kemandirian logistik gerakan berbasis urun daya komunitas',
      'Teknik menolak suap politik secara elegan tanpa langsung memicu perang terbuka',
      'Mengubah integritas dari sekadar wacana normatif menjadi aset daya tawar politik'
    ],
    studiKasus: 'Dalam suksesi organisasi mahasiswa tingkat nasional, amplop uang beredar di lobi hotel pada malam sebelum pemungutan suara oleh kubu lawan.',
    protokolAksi: [
      'Bangun barisan penjaga suara dengan pakta integritas dan rekaman dokumentasi digital',
      'Gunakan strategi kampanye nilai di hadapan pemilih swing-voters yang jenuh dengan politik uang',
      'Jadikan rekam jejak anti-korupsi sebagai senjata ofensif narasi di forum terbuka'
    ]
  },
  {
    id: 4,
    title: 'Ajining Diri Saka Lathi: Kedaulatan Tutur Kata dan Narasi Politik',
    subtitle: 'Bahasa sebagai senjata diplomasi, peneguh komitmen, dan cermin kehormatan seorang tokoh.',
    pilar: 'Seni Negosiasi Taktis',
    falsafah: 'Ajining Diri Dumunung Ana Ing Lathi, Ajining Raga Ana Ing Busana',
    falsafahArti: 'Harga diri seseorang terletak pada ucapan dan tutur katanya, kehormatan fisik terletak pada kepantasan tindak tanduknya.',
    ringkasan: 'Kata-kata seorang politisi etis adalah kontrak moral. Sekali ia berbohong di hadapan konstituen atau mitra koalisi, modal politiknya hancur permanen. Bab ini mengkaji retorika berbobot, retorika tanpa hasutan murahan, dan komitmen ucapan.',
    silabus: [
      'Semiotika politik: bagaimana pilihan diksi membentuk persepsi publik dan otoritas',
      'Menjaga janji politik dalam batas realisme tanpa bersikap populis palsu',
      'Teknik meredam eskalasi konflik verbal dalam rapat dewan pimpinan',
      'Etika debat publik: menyerang argumen lawan tanpa membunuh karakter personalnya'
    ],
    studiKasus: 'Seorang juru bicara partai tergelincir mengeluarkan umpatan emosional saat didebat di televisi nasional, merugikan elektabilitas seluruh faksi.',
    protokolAksi: [
      'Gunakan aturan 5 detik jeda pernapasan sebelum merespons provokasi musuh',
      'Rancang lembar fakta (fact sheet) terverifikasi sebelum tampil di ruang dengar pendapat',
      'Koreksi kekeliruan data secepatnya dengan jiwa kesatria tanpa berbelit-belit mencari kambing hitam'
    ]
  },
  {
    id: 5,
    title: 'Legitimasi Moral vs Otoritas Formal: Fondasi Wibawa Kepemimpinan',
    subtitle: 'Mengapa SK pengangkatan tak pernah cukup untuk membuat bawahan bergerak dengan hati.',
    pilar: 'Kepemimpinan Falsafah Jawa',
    falsafah: 'Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani',
    falsafahArti: 'Di depan memberi teladan nyata, di tengah menggugah semangat kehendak, di belakang memberikan dorongan moril.',
    ringkasan: 'Banyak pejabat memiliki surat keputusan resmi namun tidak dihormati oleh stafnya karena nihil keteladanan. Wibawa sejati (bawa laksana) lahir dari pengorbanan, kerendahan hati, dan kompetensi yang terbukti di medan pengabdian.',
    silabus: [
      'Trilogi kepemimpinan Ki Hadjar Dewantara dalam manajemen organisasi modern',
      'Distingsi antara kepatuhan semu karena takut hukuman vs loyalitas organik',
      'Membangun otoritas moral melalui kesediaan terjun ke unit kerja paling terbelakang',
      'Metode transformasi dari pimpinan administratif menjadi guru peradaban'
    ],
    studiKasus: 'Kepala dinas baru mengeluarkan belasan surat edaran disiplin, namun angka absensi dan keengganan berpartisipasi staf justru kian melonjak tajam.',
    protokolAksi: [
      'Hadir lebih awal daripada staf dan lakukan dialog informal tanpa barikade ajudan',
      'Selesaikan terlebih dahulu hak-hak tunjangan dan keluhan teknis yang selama ini diabaikan',
      'Tunjukkan keteladanan dalam mematuhi aturan sebelum menuntut audit ketat kepada bawahan'
    ]
  },
  // We will programmatically populate all 200 items in a structured loop,
  // supplemented by targeted hand-crafted anchors for every single volume!
];

// Master Title Blueprint for 200 Bab covering the 5 Pillars across all 8 Volumes
export interface RawTopicPlan {
  id: number;
  vol: number;
  pilar: PilarUtama;
  title: string;
  subtitle: string;
  falsafah: string;
  falsafahArti: string;
}

export const CHAPTER_BLUEPRINT: RawTopicPlan[] = [
  // --- VOLUME I: Fondasi Etika Kekuasaan & Filosofi Kepemimpinan Luhur (1-25) ---
  { id: 1, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Hakikat Kekuasaan: Antara Amanah Suci dan Jerat Kezaliman', subtitle: 'Membongkar ilusi status dan meletakkan fondasi moralitas politik.', falsafah: 'Sura Dira Jayaningrat Lebur Dening Pangastuti', falsafahArti: 'Angkara murka akan runtuh di hadapan ketulusan budi luhur.' },
  { id: 2, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Mulat Sarira Hangrasa Wani: Introspeksi Kedalaman Batin Pemimpin', subtitle: 'Seni mengukur kelemahan diri sebelum menuntut kepatuhan dari orang lain.', falsafah: 'Mulat Sarira Hangrasa Wani', falsafahArti: 'Mampu berkaca pada diri sendiri dan berani menghadapi kebenaran.' },
  { id: 3, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Integritas Radikal dalam Pusaran Politik Uang dan Transaksionalisme', subtitle: 'Strategi bertahan dan menang tanpa mencemari kehormatan diri.', falsafah: 'Budi Pekerti Luhur Tinuntun Dening Kasucen', falsafahArti: 'Budi luhur menjadi perisai dari kehancuran martabat manusia.' },
  { id: 4, vol: 1, pilar: 'Seni Negosiasi Taktis', title: 'Ajining Diri Saka Lathi: Kedaulatan Tutur Kata dan Narasi Politik', subtitle: 'Bahasa sebagai senjata diplomasi dan cermin kehormatan seorang tokoh.', falsafah: 'Ajining Diri Dumunung Ana Ing Lathi', falsafahArti: 'Harga diri seseorang tercermin dari ucapan dan integritas bicaranya.' },
  { id: 5, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Legitimasi Moral vs Otoritas Formal: Fondasi Wibawa Kepemimpinan', subtitle: 'Membangun kepatuhan organik yang lahir dari keteladanan nyata.', falsafah: 'Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso', falsafahArti: 'Di depan memberi teladan, di tengah membakar semangat kehendak.' },
  { id: 6, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Menjaga Kesucian Niat di Tengah Medan Tempur Politik', subtitle: 'Mencegah pergeseran idealisme menjadi oportunisme pragmatis.', falsafah: 'Urip Iku Urup', falsafahArti: 'Hidup itu harus memberi nyala terang dan kemanfaatan bagi semesta.' },
  { id: 7, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Pangeran Sambernyawa dan Doktrin Tri Dharma Mangkunegaran', subtitle: 'Rumangsa melu handarbeni, wajib melu hangrungkebi, mulat sarira hangrasa wani.', falsafah: 'Tri Dharma Mangkunegaran', falsafahArti: 'Merasa ikut memiliki, wajib ikut membela, berani mawas diri.' },
  { id: 8, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Anatomi Kezaliman Struktural dalam Lembaga Publik', subtitle: 'Mengidentifikasi penindasan tersembunyi berkedok efisiensi administrasi.', falsafah: 'Adigang, Adigung, Adiguna', falsafahArti: 'Pantang menyombongkan kekuatan, kebesaran trah, maupun kepandaian akal.' },
  { id: 9, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Konsep Wahyu Cakraningrat: Kualifikasi Spritual Pemimpin Nusantara', subtitle: 'Tiga godaan kekuasaan: harta, tahta, dan sanjungan wanita/pria.', falsafah: 'Wahyu Cakraningrat', falsafahArti: 'Pemberian amanah langit bagi jiwa yang telah hening dari ketamakan.' },
  { id: 10, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Benteng Nurani: Menghadapi Tekanan Kompromi Jahat', subtitle: 'Protokol penolakan terhadap instruksi atasan yang melanggar hukum dan etika.', falsafah: 'Eling lan Waspada', falsafahArti: 'Selalu ingat akan Sang Pencipta dan waspada terhadap godaan hawa nafsu.' },
  { id: 11, vol: 1, pilar: 'Politik Pendidikan', title: 'Mencetak Kader Ideologis Berbudi Luhur: Pendidikan Kader Tahap Awal', subtitle: 'Metodologi transfer nilai dan pengasahan daya juang generasi penerus.', falsafah: 'Ngelmu Iku Kalakone Kanthi Laku', falsafahArti: 'Ilmu sejati itu hanya dapat terwujud melalui pengamalan nyata.' },
  { id: 12, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Filsafat Keris: Simbol Keseimbangan Wibawa, Ketajaman Akal, dan Pengendalian', subtitle: 'Memahami kapan senjata harus disarungkan dan kapan ditegakkan.', falsafah: 'Curiga Manjing Warangka', falsafahArti: 'Penyatuan serasi antara ketajaman kehendak dengan wadah kepatutannya.' },
  { id: 13, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Mengelola Godaan Pemujaan Diri (Narsisme Kepemimpinan)', subtitle: 'Bahaya sindrom mesias yang menjerumuskan organisasi ke jurang kehancuran.', falsafah: 'Ojo Dumeh, Ojo Gumede', falsafahArti: 'Jangan mentang-mentang berkuasa, jangan bersikap angkuh meninggi.' },
  { id: 14, vol: 1, pilar: 'Diplomasi & Geopolitik', title: 'Prinsip Kedaulatan Batiniah dalam Menghadapi Dominasi Eksternal', subtitle: 'Menjaga kemerdekaan berpikir dari penjajahan wacana pihak asing.', falsafah: 'Sadumuk Bathuk Sanyari Bumi', falsafahArti: 'Satu sentuhan dahi, selebar jari tanah martabat wajib dipertahankan.' },
  { id: 15, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Akuntabilitas Vertikal dan Horizontal: Tanggung Jawab Dua Dimensi', subtitle: 'Memadukan hisab spiritual kepada Tuhan dengan audit terbuka kepada publik.', falsafah: 'Manembah Marang Gusti, Ngabekti Marang Negeri', falsafahArti: 'Menyembah Tuhan Semesta Alam dan berbakti tulus kepada tanah air.' },
  { id: 16, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Aji Pameling: Kepekaan Membaca Suasana Kebatinan Rakyat', subtitle: 'Mendeteksi jeritan kaum lemah sebelum meledak menjadi pemberontakan sosial.', falsafah: 'Tanggap Ing Sasmita', falsafahArti: 'Peka menangkap isyarat gaib dan suasana kebatinan yang belum terucap.' },
  { id: 17, vol: 1, pilar: 'Seni Negosiasi Taktis', title: 'Kesabaran Aktif dalam Menghadapi Fitnah dan Provokasi Politik', subtitle: 'Seni diam yang menghancurkan skenario adu domba lawan.', falsafah: 'Meneng, Hening, Dunung', falsafahArti: 'Diam menata gejolak, hening menjernihkan cipta, tepat menaruh tindakan.' },
  { id: 18, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Demokrasi Deliberatif yang Berakar pada Tradisi Musyawarah Luhur', subtitle: 'Melampaui tirani voting angka menuju kesepakatan batiniah yang mengikat.', falsafah: 'Rembug Tuwa Nggayuh Mufakat', falsafahArti: 'Musyawarah penuh kedewasaan untuk mencapai kemufakatan sejati.' },
  { id: 19, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Serat Wedhatama: Mengikis Kebodohan Spiritual Calon Pemimpin', subtitle: 'Membongkar kepalsuan gelar dan kemilau status tanpa kematangan akhlak.', falsafah: 'Mingkar Mingkuring Angkara', falsafahArti: 'Menyingkirkan angkara murka demi menumbuhkan keluhuran budi rasa.' },
  { id: 20, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Pemisahan Kepentingan Pribadi, Keluarga, dan Kas Organisasi', subtitle: 'Mengharamkan nepotisme dan perampokan terselubung atas aset publik.', falsafah: 'Sepi Ing Pamrih Rame Ing Gawe', falsafahArti: 'Sunyi dari pamrih pribadi, riuh giat dalam kerja pengabdian.' },
  { id: 21, vol: 1, pilar: 'Politik Pendidikan', title: 'Pendidikan Budi Pekerti Sebagai Soko Guru Politik Bangsa', subtitle: 'Mengapa reformasi politik tanpa reformasi moralitas guru adalah kesia-siaan.', falsafah: 'Pendidikan Luhur Ambangun Karakter', falsafahArti: 'Pendidikan luhur adalah tiang utama penegak peradaban bangsa.' },
  { id: 22, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Ksatria Pinandita: Penyatuan Karakter Pejuang dan Resi Bijak', subtitle: 'Keberanian fisik di medan tempur yang dipandu ketajaman batin sufi.', falsafah: 'Satria Pinandita', falsafahArti: 'Sosok ksatria pembela kebenaran yang memiliki kebijaksanaan seorang empu.' },
  { id: 23, vol: 1, pilar: 'Seni Negosiasi Taktis', title: 'Menolak Menjadi Boneka: Menjaga Kemandirian Pemimpin Muda', subtitle: 'Menghadapi sponsor yang ingin menyetir kebijakan dari balik layar.', falsafah: 'Dadi Wit Kang Kukuh Oyode', falsafahArti: 'Jadilah pohon yang kokoh akarnya, tak goyah dihempas angin badai.' },
  { id: 24, vol: 1, pilar: 'Politik Organisasi Etis', title: 'Keadilan Restoratif dalam Menyelesaikan Friksi Internal', subtitle: 'Memulihkan harmoni sosial tanpa melupakan pertanggungjawaban hukum.', falsafah: 'Rukun Agawe Santosa', falsafahArti: 'Kerukunan menciptakan kekuatan kokoh, perpecahan memicu keruntuhan.' },
  { id: 25, vol: 1, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Hamemayu Hayuning Bawana: Komitmen Ekologis dan Sosial Kekuasaan', subtitle: 'Visi kosmologis kepemimpinan: menjaga keharmonisan alam, manusia, dan jagad.', falsafah: 'Hamemayu Hayuning Bawana', falsafahArti: 'Memperindah keindahan dunia dan merawat kelestarian alam semesta.' },

  // --- VOLUME II: Dinamika Politik Organisasi, Struktur & Budaya Birokrasi (26-50) ---
  { id: 26, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Pemetaan Faksi dan Garis Saraf Kekuasaan dalam Organisasi', subtitle: 'Mendeteksi persekutuan informal, patronase tersembunyi, dan pusat komando riil.', falsafah: 'Wruh Sadurunge Winisik', falsafahArti: 'Tahu sebelum dibisiki, waspada menangkap dinamika yang terselubung.' },
  { id: 27, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Manajemen Koalisi Internal Tanpa Terjebak Sandera Politik', subtitle: 'Merangkul faksi yang berselisih ke dalam agenda bersama yang objektif.', falsafah: 'Golong Gilig Karsa Manunggal', falsafahArti: 'Menyatukan kehendak yang tercerai-berai menjadi kekuatan bulat.' },
  { id: 28, vol: 2, pilar: 'Seni Negosiasi Taktis', title: 'Meredam Faksionalisme Destruktif: Taktik Pembagian Komite', subtitle: 'Mendistribusikan peran fungsional untuk menghentikan sabotase kelompok.', falsafah: 'Ngayomi Tanpa Mbendani', falsafahArti: 'Mengayomi semua pihak secara adil tanpa menciptakan kasta anak emas.' },
  { id: 29, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Birokrasi Meritokratis vs Feodalisme Asal Bapak Senang (ABS)', subtitle: 'Menghancurkan budaya penjilat dengan indikator kinerja terukur dan beretika.', falsafah: 'Becik Ketitik Ala Ketara', falsafahArti: 'Kebaikan akan tampak pada karyanya, keburukan akan tersingkap dengan sendirinya.' },
  { id: 30, vol: 2, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Catur Kotamaning Nrpati: Empat Keutamaan Penguasa Organisasi', subtitle: 'Guna, Kerti, Purusa, dan Bhandhu dalam tata kelola birokrasi modern.', falsafah: 'Catur Kotamaning Nrpati', falsafahArti: 'Keahlian, karya nyata, keberanian bertindak, dan jaringan kawan yang setia.' },
  { id: 31, vol: 2, pilar: 'Politik Organisasi Etis', title: 'SOP dan Sistem Kontrol Batiniah: Mencegah Korupsi di Titik Rawan', subtitle: 'Merancang arsitektur pengadaan dan perizinan yang anti-kolusi.', falsafah: 'Pager Mangkok Luwih Kuat Tinimbang Pager Tembok', falsafahArti: 'Pagar kedermawanan dan keadilan lebih kokoh dari sekadar tembok beton regulasi.' },
  { id: 32, vol: 2, pilar: 'Politik Pendidikan', title: 'Politik Penempatan SDM: Menaruh Ahli pada Tempat Keahliannya', subtitle: 'Menolak kompromi penempatan pejabat berbasis kedekatan trah kekeluargaan.', falsafah: 'Emban Cinde Emban Siladan', falsafahArti: 'Pantang pilih kasih dalam membagi tanggung jawab dan penghargaan.' },
  { id: 33, vol: 2, pilar: 'Seni Negosiasi Taktis', title: 'Menghadapi Pembangkangan Pasif (Passive Aggressive Sabotage)', subtitle: 'Mendeteksi staf yang mengangguk di rapat namun menunda eksekusi di lapangan.', falsafah: 'Alus Dening Watak, Tegas Dening Tindak', falsafahArti: 'Halus dalam tutur sapa budi, namun tegas tanpa kompromi dalam tindakan.' },
  { id: 34, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Whistleblowing System yang Melindungi Nyawa dan Karir Informan', subtitle: 'Mekanisme proteksi bagi anggota organisasi yang membongkar kejahatan internal.', falsafah: 'Wani Mbenerake Kang Kleru', falsafahArti: 'Berani meluruskan apa yang keliru kendati harus berhadapan dengan badai.' },
  { id: 35, vol: 2, pilar: 'Diplomasi & Geopolitik', title: 'Menjaga Netralitas Organisasi dari Kooptasi Partai dan Penguasa', subtitle: 'Protokol pertahanan ketika lembaga independen hendak dijadikan lumbung suara.', falsafah: 'Madhep Mantep Nyawiji', falsafahArti: 'Fokus lurus ke depan, mantap memegang prinsip independensi suci.' },
  { id: 36, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Transparansi Keuangan Terbuka: Mengakhiri Anggaran Gelap', subtitle: 'Publikasi buku kas harian sebagai alat pembunuh syak wasangka antar-anggota.', falsafah: 'Padhang Bulan Padhang Pikiran', falsafahArti: 'Keterbukaan informasi menerangi pikiran dan menghapus prasangka buruk.' },
  { id: 37, vol: 2, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Tata Krama Musyawarah: Menghargai Suara Minoritas dalam Rapat', subtitle: 'Menghindari kediktatoran mayoritas dengan memelihara hak bersuara yang lemah.', falsafah: 'Aja Rumangsa Bisa, Nanging Bisaa Rumangsa', falsafahArti: 'Jangan merasa serba pandai, namun pandailah berempati pada sesama.' },
  { id: 38, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Manajemen Krisis Reputasi Lembaga: Mengakui Salah Secara Bermartabat', subtitle: 'Protokol komunikasi publik saat pejabat organisasi tersandung skandal moral.', falsafah: 'Ksatria Ngakoni Kalepatan', falsafahArti: 'Jiwa ksatria berani mengakui kekhilafan dan bersegera membayar pertanggungjawaban.' },
  { id: 39, vol: 2, pilar: 'Seni Negosiasi Taktis', title: 'Mengisolasi Tokoh Provokator Tanpa Menimbulkan Gejolak Massa', subtitle: 'Taktik de-eskalasi pengaruh toksik melalui pengalihan mandat fungsional.', falsafah: 'Ngluruk Tanpa Bala, Menang Tanpa Ngasorake', falsafahArti: 'Menyerang tanpa membawa pasukan, memenangkan pertempuran tanpa mempermalukan lawan.' },
  { id: 40, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Standar Etik Hubungan Atasan-Bawahan: Menghapus Pelecehan Kekuasaan', subtitle: 'Membangun regulasi anti-kekerasan seksual dan relasi kuasa timpang di kantor.', falsafah: 'Ngajeni Sesami Dumadi', falsafahArti: 'Menghormati martabat sesama makhluk ciptaan tanpa memandang derajat kasta.' },
  { id: 41, vol: 2, pilar: 'Politik Pendidikan', title: 'Kaderisasi Berjenjang Berbasis Kurikulum Kompetensi Bukan Senioritas', subtitle: 'Menggantikan budaya perpeloncoan usang dengan inkubasi kepemimpinan ilmiah.', falsafah: 'Nuntun Tinuntun Kanthi Welas Asih', falsafahArti: 'Saling membimbing dengan landasan kasih sayang dan teladan luhur.' },
  { id: 42, vol: 2, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Kearifan Nasihat Sesepuh Organisasi: Menyaring Antara Bijak dan Kolot', subtitle: 'Menghormati pendahulu tanpa membiarkan organisasi mandek terbelenggu masa lalu.', falsafah: 'Mikul Dhuwur Mendhem Jero', falsafahArti: 'Menjunjung tinggi kebaikan leluhur dan mengubur dalam-dalam aibnya.' },
  { id: 43, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Audit Kinerja Triwulanan Berorientasi Manfaat Publik', subtitle: 'Menghilangkan program kerja seremonial yang hanya menghabiskan anggaran kas.', falsafah: 'Migunani Tumraping Liyan', falsafahArti: 'Sebaik-baik hidup adalah yang memberi kemanfaatan nyata bagi sesama.' },
  { id: 44, vol: 2, pilar: 'Seni Negosiasi Taktis', title: 'Negosiasi Hak Kerja dan Tunjangan Karyawan Lembaga', subtitle: 'Keseimbangan antara kelangsungan hidup yayasan dan kesejahteraan pekerja.', falsafah: 'Pangan, Sandhang, Papan Kang Nyukupi', falsafahArti: 'Pemenuhan kebutuhan dasar pekerja adalah syarat mutlak keadilan organisasi.' },
  { id: 45, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Pemberhentian Pejabat Pelanggar Kode Etik Secara Dingin dan Konstitusional', subtitle: 'Menyingkirkan virus pembusukan organisasi tanpa drama dendam pribadi.', falsafah: 'Tatas Titis Tetes', falsafahArti: 'Tuntas dalam penyelesaian, tepat dalam sasaran, jernih dalam penetesan kebenaran.' },
  { id: 46, vol: 2, pilar: 'Diplomasi & Geopolitik', title: 'Manajemen Aliansi Taktis dengan Sayap Organisasi Kepemudaan', subtitle: 'Menggerakkan energi pemuda untuk program pengawalan kebijakan strategis.', falsafah: 'Banteng Ketaton Tanggap Ing Kahanan', falsafahArti: 'Membangkitkan daya juang pemuda yang siaga menyambut tantangan zaman.' },
  { id: 47, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Protokol Mitigasi Konflik Kepentingan pada Panitia Pengadaan', subtitle: 'Menutup celah insider trading dan lelang titipan kerabat pimpinan.', falsafah: 'Resik Tangane, Resik Batinne', falsafahArti: 'Bersih kedua tangannya dari suap, bersih batinnya dari niat berkhianat.' },
  { id: 48, vol: 2, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Seni Memimpin Generasi Lintas Umur: Menjembatani Sesepuh dan Gen-Z', subtitle: 'Menghilangkan jurang komunikasi kultural dalam tim kerja modern.', falsafah: 'Manut Ombak Ning Ora Kintir', falsafahArti: 'Mengikuti arus perubahan zaman tanpa terseret arus degradasi moral.' },
  { id: 49, vol: 2, pilar: 'Politik Pendidikan', title: 'Perpustakaan dan Riset Data Sebagai Pusat Pengambilan Kebijakan Organisasi', subtitle: 'Mengakhiri era keputusan berdasar insting emosi menuju kebijakan berbasis bukti.', falsafah: 'Sinau Sabendina Tanpa Kendhat', falsafahArti: 'Belajar tiada henti sepanjang hayat untuk mengasah ketepatan pandang.' },
  { id: 50, vol: 2, pilar: 'Politik Organisasi Etis', title: 'Piagam Kehormatan Organisasi: Menegakkan Warisan Konstitusi Abadi', subtitle: 'Menyusun AD/ART yang tahan uji dari manuver kudeta dan amandemen sepihak.', falsafah: 'Teguh Kukuh Bakuh', falsafahArti: 'Kuat memegang prinsip, kukuh dalam komitmen, tahan uji menghadapi cobaan.' },

  // --- VOLUME III: Seni Negosiasi Taktis & Resolusi Konflik Tingkat Tinggi (51-75) ---
  { id: 51, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Anatomi Meja Negosiasi: Menyingkap Motif Laten di Balik Posisi Terbuka', subtitle: 'Membedakan antara apa yang dituntut lawan dan apa yang sesungguhnya mereka butuhkan.', falsafah: 'Katoning Rupa Sumimpen Wardaya', falsafahArti: 'Apa yang tampak di wajah seringkali menyembunyikan getar isi dada terdalam.' },
  { id: 52, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Kalkulasi BATNA Bermartabat: Mengetahui Kapan Harus Berdiri dan Melangkah Pergi', subtitle: 'Memiliki alternatif terbaik tanpa harus memohon belas kasihan meja runding.', falsafah: 'Ora Gumantung Marang Welase Mungsuh', falsafahArti: 'Jangan menggantungkan nasib perjuangan pada belas kasih pihak musuh.' },
  { id: 53, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Seni Konsesi Bertahap: Memberi Umpan Kecil Demi Mengamankan Kedaulatan Pokok', subtitle: 'Taktik pertukaran nilai strategis dengan menjaga posisi prinsipil tak tersentuh.', falsafah: 'Nglulutake Ati Kanthi Sabar', falsafahArti: 'Meluluhkan kekakuan hati lawan dengan ketenangan taktik yang berjenjang.' },
  { id: 54, vol: 3, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Ngluruk Tanpa Bala: Negosiasi Mandiri Berbekal Wibawa dan Ketajaman Argumen', subtitle: 'Menghadapi delegasi besar seorang diri tanpa rasa minder sedikit pun.', falsafah: 'Ngluruk Tanpa Bala', falsafahArti: 'Maju berunding tanpa kerumunan pasukan, bersandar pada kekuatan kebenaran.' },
  { id: 55, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Membaca Bahasa Tubuh Mikro dan Kebohongan di Balik Meja Runding', subtitle: 'Mendeteksi gestur ragu, perubahan intonasi, dan manuver gertak sambal lawan.', falsafah: 'Waskitha Ing Semu', falsafahArti: 'Tajam menangkap perubahan raut muka dan bahasa isyarat tersembunyi.' },
  { id: 56, vol: 3, pilar: 'Diplomasi & Geopolitik', title: 'Taktik Deadlock Breaker: Membuka Kembali Dialog yang Telah Buntu', subtitle: 'Teknik menggunakan mediator netral dan saluran belakang (backchanneling).', falsafah: 'Golek Dalane Banyu', falsafahArti: 'Mencari celah mengalirnya air di antara himpitan batu cadas kebuntuan.' },
  { id: 57, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Menghadapi Taktik Kotor Lawan: Gaslighting, Walkout, dan Intimidasi Waktu', subtitle: 'Mematahkan teknik perang urat syaraf dengan ketenangan batu karang.', falsafah: 'Watu Karang Ora Obah Diterjang Ombak', falsafahArti: 'Tetap tegak tenang bagai karang laut yang tak goyah disapu ombak amarah.' },
  { id: 58, vol: 3, pilar: 'Politik Organisasi Etis', title: 'Etika Perjanjian Rahasia: Batasan Moral Antara Taktik Diplomasi dan Pengkhianatan', subtitle: 'Kapan kompromi tertutup sah secara strategi dan kapan menjadi pengkhianatan amanah.', falsafah: 'Ora Cidra Ing Janji', falsafahArti: 'Pantang berkhianat pada sumpah yang telah dipaterikan bersama.' },
  { id: 59, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Arsitektur Dokumen Kesepakatan (MoU) yang Kedap Celah Manipulasi', subtitle: 'Memeriksa klausul ambigu yang sering diselipkan ahli hukum lawan di menit akhir.', falsafah: 'Ciri Wanci Lelakon', falsafahArti: 'Kecermatan membaca tanda dan rincian mencegah bencana di masa depan.' },
  { id: 60, vol: 3, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Menang Tanpa Ngasorake: Memberikan Jalan Keluar Terhormat Bagi Lawan', subtitle: 'Jangan menyudutkan musuh hingga ke pojok tembok tanpa opsi penyelamat muka.', falsafah: 'Menang Tanpa Ngasorake', falsafahArti: 'Memperoleh kemenangan paripurna tanpa harus menghinakan dan mempermalukan lawan.' },
  { id: 61, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Negosiasi Anggaran Publik: Taktik Bertahan Menghadapi Pemangkasan Sepihak', subtitle: 'Menyelamatkan alokasi dana program kerakyatan dan pendidikan dari pemotongan elitis.', falsafah: 'Urip Ayem Tentrem Kanthi Cukup', falsafahArti: 'Memperjuangkan kecukupan sandang pangan bagi masyarakat yang membutuhkan.' },
  { id: 62, vol: 3, pilar: 'Diplomasi & Geopolitik', title: 'Teknik Pembingkaian Isu (Framing Warfare) dalam Pra-Negosiasi', subtitle: 'Memastikan pokok persoalan dirumuskan menggunakan kerangka logika keadilan Anda.', falsafah: 'Trap Silaning Pikir', falsafahArti: 'Menata kerangka berpikir yang kokoh sebelum melontarkan wacana perdebatan.' },
  { id: 63, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Negosiasi Multi-Pihak: Memecah Blok Koalisi Lawan Secara Halus', subtitle: 'Menemukan titik friksi di antara musuh-musuh Anda untuk ditransformasi menjadi kawan.', falsafah: 'Nyebar Uyah Ora Ketara', falsafahArti: 'Menebar benih perubahan dengan kehalusan yang tak memicu alarm permusuhan.' },
  { id: 64, vol: 3, pilar: 'Politik Organisasi Etis', title: 'Menghindari Jebakan Sunk Cost Fallacy dalam Negosiasi yang Merugikan', subtitle: 'Keberanian membatalkan proyek bermasalah kendati telah menelan biaya awal besar.', falsafah: 'Pedhot Rantai Kang Nyiksa', falsafahArti: 'Memutus rantai kebiasaan buruk sebelum menghancurkan seluruh bangunan cita-cita.' },
  { id: 65, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Teknik Mirroring dan Active Listening dalam Negosiasi Sandera Politik', subtitle: 'Mendengarkan hingga tuntas agar lawan menurunkan perisai amarah psikologisnya.', falsafah: 'Ngrungokake Kanthi Weninging Kalbu', falsafahArti: 'Mendengarkan dengan kejernihan hati yang tulus untuk meredam kegaduhan ego.' },
  { id: 66, vol: 3, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Prinsip Tepo Seliro: Empati Strategis Tanpa Mengorbankan Kedaulatan', subtitle: 'Memahami penderitaan pihak lawan demi merumuskan solusi win-win bermartabat.', falsafah: 'Tepo Seliro', falsafahArti: 'Menimbang rasa sesama, merasakan apa yang dirasakan orang lain di tempatnya.' },
  { id: 67, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Mengelola Pengaruh Sponsor dan Donor di Balik Meja Perundingan', subtitle: 'Menetralisir intervensi pemilik dana yang ingin mendikte hasil musyawarah.', falsafah: 'Ora Bisa Dituku Kanthi Emas Barleyan', falsafahArti: 'Integritas sejati tak dapat dibeli dengan kemilau emas intan permata.' },
  { id: 68, vol: 3, pilar: 'Politik Pendidikan', title: 'Negosiasi Perjanjian Kerja Bersama Guru dan Serikat Pendidik', subtitle: 'Menyelaraskan tuntutan upah layak dengan komitmen peningkatan mutu pengajaran.', falsafah: 'Karya Nyata Guru Bangsa', falsafahArti: 'Kesejahteraan guru berbanding lurus dengan kemuliaan masa depan generasi bangsa.' },
  { id: 69, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Teknik Anchoring Harga Politik: Menentukan Tuntutan Awal yang Rasional', subtitle: 'Menetapkan patokan awal tanpa terkesan konyol atau serakah di hadapan publik.', falsafah: 'Ukur Kekuatan Sakdurunge Tumindak', falsafahArti: 'Mengukur batas kemampuan dan posisi tawar sebelum mematok harga komitmen.' },
  { id: 70, vol: 3, pilar: 'Diplomasi & Geopolitik', title: 'Resolusi Sengketa Terbuka Antar-Faksi Melalui Tribunal Arbitrase Internal', subtitle: 'Mendirikan mahkamah etik kehormatan yang putusannya diakui semua kubu.', falsafah: 'Adil Paramarta', falsafahArti: 'Keadilan yang memancarkan rasa damai dan kepuasan batin semua pihak.' },
  { id: 71, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Mengatasi Delegasi Lawan yang Berwatak Narsistik dan Arogan', subtitle: 'Memanfaatkan keangkuhan lawan menjadi celah blunder bagi posisi mereka sendiri.', falsafah: 'Gedhe Endhase Gampang Ambruk', falsafahArti: 'Kepala yang membesar karena kesombongan lebih mudah hilang keseimbangan.' },
  { id: 72, vol: 3, pilar: 'Politik Organisasi Etis', title: 'Protokol Pelaporan Hasil Negosiasi kepada Konstituen Akar Rumput', subtitle: 'Menolak istilah kesepakatan elit yang meninggalkan aspirasi rakyat jelata.', falsafah: 'Ora Ninggal Wong Cilik', falsafahArti: 'Pantang melupakan kaum lemah yang menjadi pemegang kedaulatan utama.' },
  { id: 73, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Teknik Good Cop Bad Cop Versi Politik Etis: Harmoni Peran Negosiator', subtitle: 'Membagi peran antara penyampai kritik keras dan penawar solusi rekonsiliasi.', falsafah: 'Gendhing Laras Slendro Pelog', falsafahArti: 'Penyelarasan nada tinggi dan rendah dalam satu orkestrasi perjuangan.' },
  { id: 74, vol: 3, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Menolak Kompromi yang Menghancurkan Masa Depan Generasi', subtitle: 'Kapan pemimpin harus berkata TIDAK kendati diancam pelengseran jabatan.', falsafah: 'Rawe-rawe Rantas Malang-malang Putung', falsafahArti: 'Segala rintangan yang menghadang kebenaran harus diterobos pantang mundur.' },
  { id: 75, vol: 3, pilar: 'Seni Negosiasi Taktis', title: 'Evaluasi Pasca-Kesepakatan: Memastikan Lawan Menepati Isi Perjanjian', subtitle: 'Membangun instrumen monitoring kepatuhan dan sanksi penalti otomatis.', falsafah: 'Netepi Sabda Pandita Ratu', falsafahArti: 'Menepati janji luhur yang pantang ditarik kembali demi kehormatan diri.' },

  // --- VOLUME IV: Diplomasi Kebangsaan, Lobi & Aliansi Antar-Lembaga (76-100) ---
  { id: 76, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Arsitektur Diplomasi Senyap: Seni Lobi Elegan di Luar Sorot Kamera', subtitle: 'Membangun jembatan komunikasi rahasia sebelum kesepakatan diumumkan di podium.', falsafah: 'Mlaku Alus Ning Tumeka Ing Papan', falsafahArti: 'Melangkah halus tanpa derap bising namun sampai tepat di tujuan.' },
  { id: 77, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Membangun Konsensus Kebangsaan di Tengah Polaritas SARA', subtitle: 'Menemukan titik temu Pancasilais di antara tarikan ekstremis kiri dan kanan.', falsafah: 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa', falsafahArti: 'Berbeda-beda tetapi satu jua, tiada kebenaran yang mendua dalam keadilan.' },
  { id: 78, vol: 4, pilar: 'Politik Organisasi Etis', title: 'Etika Hubungan Ormas Keagamaan dengan Lembaga Negara', subtitle: 'Menjaga marwah ulama/cendekiawan agar tidak diperalat menjadi stempel rezim.', falsafah: 'Ulama Pengayom Umat, Negarawan Pembela Bangsa', falsafahArti: 'Menjaga jarak kritis yang bermartabat demi membimbing jalannya kekuasaan.' },
  { id: 79, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Protokol Jamuan Diplomasi: Diplomasi Meja Makan Kebudayaan Nusantara', subtitle: 'Menggunakan kuliner, gestur kesantunan, dan simbol budaya untuk melunakkan lawan.', falsafah: 'Sapa Aruh Gupuh Suguh', falsafahArti: 'Menyapa hangat, menyambut sigap, dan menyuguhkan kehormatan terbaik.' },
  { id: 80, vol: 4, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Manajemen Friksi Antar-Lembaga Tinggi Negara: Eksekutif, Yudikatif, Legislatif', subtitle: 'Mencegah krisis konstitusi melalui dialog kenegaraan yang mengedepankan kearifan.', falsafah: 'Trisula Keadilan Bangsa', falsafahArti: 'Keseimbangan tiga pilar penegak hukum demi kemakmuran seluruh rakyat.' },
  { id: 81, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Lobi Parlemen: Mengawal RUU Pendidikan dan Alokasi Dana Riset', subtitle: 'Menembus fraksi-fraksi DPR/DPRD dengan naskah akademik berbobot dan argumen tak terbantah.', falsafah: 'Cipta Hening Ambrastha Reridhu', falsafahArti: 'Pikiran jernih mampu menembus dan melenyapkan segala rintangan politik.' },
  { id: 82, vol: 4, pilar: 'Politik Organisasi Etis', title: 'Menjaga Integritas Diplomat dari Jerat Gratifikasi Internasional', subtitle: 'Menolak perangkap fasilitas mewah lembaga donor yang menyandera kedaulatan riset.', falsafah: 'Ora Kena Ginodha Harta Manca', falsafahArti: 'Pantang tergoda oleh kekayaan asing yang berniat menggadaikan kedaulatan tanah air.' },
  { id: 83, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Diplomasi Track-Two: Memanfaatkan Akademisi dan Tokoh Budaya dalam Krisis', subtitle: 'Jalur alternatif diplomasi saat saluran resmi hubungan antar-lembaga terputus total.', falsafah: 'Pangeling Saka Para Resi', falsafahArti: 'Menggunakan wejangan kaum cerdik cendekia untuk memulihkan retaknya persaudaraan.' },
  { id: 84, vol: 4, pilar: 'Politik Pendidikan', title: 'Diplomasi Beasiswa dan Kemitraan Universitas Dunia', subtitle: 'Membawa mahasiswa nusantara ke panggung internasional tanpa kehilangan jati diri bangsa.', falsafah: 'Wani Ngambah Jagad Ning Ora Lali Purwadaksina', falsafahArti: 'Berani menjelajahi dunia luas tanpa melupakan asal usul dan akar jati diri.' },
  { id: 85, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Membangun Koalisi Strategis Lintas Sektor: Pemerintah, Swasta, dan Kampus (Triple Helix)', subtitle: 'Sinergi riset nasional untuk kemandirian industri pangan, obat, dan teknologi.', falsafah: 'Sinergi Tri Tunggal Kawruh', falsafahArti: 'Penyatuan cipta sarjana, karsa industri, dan daya dukung negara demi kedaulatan rakyat.' },
  { id: 86, vol: 4, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Etika Utusan Diplomatik: Kewajiban Menyampaikan Pesan Apa Adanya', subtitle: 'Larangan memoles kabar buruk untuk menyenangkan telinga sang raja/pemimpin.', falsafah: 'Duta Kang Wicaksana Ora Ngapusi', falsafahArti: 'Utusan yang bijak pantang berdusta mengenai kenyataan di medan penugasan.' },
  { id: 87, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Menghadapi Hegemoni Lembaga Moneter Global dan Tekanan Utang', subtitle: 'Menolak syarat restrukturisasi yang mengorbankan anggaran guru dan sekolah negeri.', falsafah: 'Kedaulatan Ekonomi Tanpa Jerat Riba', falsafahArti: 'Kemandirian finansial adalah syarat mutlak kemerdekaan politik sejati.' },
  { id: 88, vol: 4, pilar: 'Politik Organisasi Etis', title: 'Protokol Kerjasama Antar-LSM: Menghindari Kanibalisme Isu Advokasi', subtitle: 'Membangun front persatuan pembela hak masyarakat tanpa saling berebut dana hibah.', falsafah: 'Gotong Royong Mbangun Desa', falsafahArti: 'Kerja bersama bahu membahu demi kemaslahatan warga di akar rumput.' },
  { id: 89, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Diplomasi Lingkungan: Menghadapi Mafia Perusak Hutan Adat', subtitle: 'Membawa suara masyarakat adat ke meja perundingan perizinan tambang dan sawit.', falsafah: 'Ibu Pertiwi Suci Wajib Jinaga', falsafahArti: 'Tanah air nusantara adalah ibu pertiwi suci yang wajib dilindungi dari keserakahan.' },
  { id: 90, vol: 4, pilar: 'Seni Negosiasi Taktis', title: 'Seni Mengatur Kompromi di Titik Temu Tanpa Kehilangan Muka', subtitle: 'Memastikan semua pimpinan fraksi pulang dengan narasi kemenangan ke konstituennya.', falsafah: 'Rame Ing Gawe Ayem Ing Ati', falsafahArti: 'Bekerja keras menghasilkan perdamaian yang menenteramkan sanubari semua pihak.' },
  { id: 91, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Perang Opini Internasional: Melawan Narasi Hitam Media Asing', subtitle: 'Menyusun counter-narrative yang berbasis data ilmiah dan kedaulatan sejarah nusantara.', falsafah: 'Kebenaran Bakal Kuncara', falsafahArti: 'Kebenaran sejati pada akhirnya akan bersinar dan menghancurkan kabar dusta.' },
  { id: 92, vol: 4, pilar: 'Politik Pendidikan', title: 'Kebijakan Standarisasi Guru Nasional Melalui Konsensus Federasi', subtitle: 'Mencegah disparitas kualitas pendidikan antara wilayah barat dan timur nusantara.', falsafah: 'Pemerataan Ilmu Kang Adil', falsafahArti: 'Keadilan sosial tercapai saat anak pelosok menerima mutu pengajaran yang setara.' },
  { id: 93, vol: 4, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Tata Krama Menolak Permintaan Pejabat Berpengaruh yang Melanggar Etika', subtitle: 'Seni menolak dengan bahasa krama inggil yang santun namun tegas sedingin es.', falsafah: 'Basa Krama Madhangi Suasana', falsafahArti: 'Bahasa santun yang penuh tata krama melunakkan amarah tanpa mengorbankan pendirian.' },
  { id: 94, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Menghadapi Intervensi Intelijen dan Pembelahan dari Dalam', subtitle: 'Membangun kontra-intelijen sipil yang menjaga kesolidan gerakan kebangsaan.', falsafah: 'Waspada Purba Wisesa', falsafahArti: 'Selalu waspada terhadap infiltrasi yang berniat memecah belah kekuatan perjuangan.' },
  { id: 95, vol: 4, pilar: 'Politik Organisasi Etis', title: 'Manajemen Dewan Kehormatan Antar-Lembaga', subtitle: 'Menyidangkan sengketa etik antar-komisioner secara transparan dan berwibawa.', falsafah: 'Hukum Luhur Tanpa Pandang Bulu', falsafahArti: 'Hukum yang luhur tidak pernah gentar menegakkan kebenaran di hadapan siapapun.' },
  { id: 96, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Diplomasi Kebudayaan: Membawa Seni dan Nilai Filosofis Nusantara ke Dunia', subtitle: 'Menjadikan wayang, keris, gamelan, dan naskah kuno sebagai alat pengaruh geopolitik.', falsafah: 'Adiluhung Budaya Nusantara', falsafahArti: 'Kebudayaan yang bernilai adiluhung adalah benteng peradaban bangsa di pentas dunia.' },
  { id: 97, vol: 4, pilar: 'Seni Negosiasi Taktis', title: 'Resolusi Sengketa Tapal Batas Wilayah dan Sumber Daya Alam Lembaga', subtitle: 'Menyelesaikan sengketa aset tanpa harus menumpahkan permusuhan horizontal antar-warga.', falsafah: 'Tentrem Ayem Tanpa Pasulayan', falsafahArti: 'Mewujudkan kedamaian yang langgeng tanpa perlu menciptakan pertengkaran berdarah.' },
  { id: 98, vol: 4, pilar: 'Politik Pendidikan', title: 'Lobi Dana Abadi Kebudayaan dan Pendidikan di Forum Internasional', subtitle: 'Mengamankan komitmen pendanaan riset cagar budaya dan translasi manuskrip kuno.', falsafah: 'Ngrumat Tinggalaning Leluhur', falsafahArti: 'Merawat pusaka peninggalan leluhur sebagai lentera penuntun generasi mendatang.' },
  { id: 99, vol: 4, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Etika Menjaga Rahasia Negara dan Lembaga demi Kemaslahatan Bangsa', subtitle: 'Kewajiban mengunci mulut dari godaan pamer informasi di media sosial.', falsafah: 'Wadining Praja Wajib Jinaga', falsafahArti: 'Rahasia negara dan martabat lembaga wajib dijaga rapat demi keselamatan bersama.' },
  { id: 100, vol: 4, pilar: 'Diplomasi & Geopolitik', title: 'Deklarasi Pakta Integritas Kebangsaan: Titik Balik Menuju Persatuan', subtitle: 'Menyatukan para pemimpin bangsa dalam dokumen suci kesetiaan kepada konstitusi.', falsafah: 'Sumpah Setia Marang Ibu Pertiwi', falsafahArti: 'Sumpah suci sehidup semati membela kemakmuran dan kedaulatan tanah air tercinta.' },

  // --- VOLUME V: Kepemimpinan Hastabrata & Kebijaksanaan Falsafah Jawa (101-125) ---
  { id: 101, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Pengantar Hastabrata: Delapan Watak Kosmik Kepemimpinan Agung', subtitle: 'Menyelaraskan jiwa kepemimpinan dengan harmoni delapan anasir alam semesta.', falsafah: 'Hastabrata Wahyuning Ratu', falsafahArti: 'Delapan pedoman kepemimpinan yang diturunkan dari watak keagungan alam semesta.' },
  { id: 102, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Surya (Matahari): Memberi Energi Hidup, Kecerahan, dan Kehangatan Adil', subtitle: 'Pemimpin yang menerangi rakyat tanpa membeda-bedakan dan memberi semangat daya hidup.', falsafah: 'Watak Surya Madhangi Jagad', falsafahArti: 'Menjadi sumber energi dan pencerah bagi seluruh lapisan rakyat tanpa pilih kasih.' },
  { id: 103, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Candra (Bulan): Menyejukkan Hati yang Gulana di Tengah Kegelapan Zaman', subtitle: 'Sosok pemimpin yang anggun, meneduhkan konflik, dan memberi harapan di saat krisis.', falsafah: 'Watak Candra Angayomi Peteng', falsafahArti: 'Memancarkan kelembutan cahaya yang menentramkan jiwa-jiwa yang sedang resah gelisah.' },
  { id: 104, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Kartika (Bintang): Menjadi Kompas Moral dan Pedoman Arah Pejalan Malam', subtitle: 'Keteguhan prinsip yang tidak goyah, menjadi rujukan kepatutan dan keadilan bangsa.', falsafah: 'Watak Kartika Pandoming Gesang', falsafahArti: 'Menjadi bintang penunjuk arah di tengah kegelapan moral dan kebingungan arah hidup.' },
  { id: 105, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Angkasa (Langit): Luas Tanpa Batas, Mampu Menampung Segala Perbedaan', subtitle: 'Kelapangan dada seorang pemimpin dalam menerima kritik keras dan keragaman watak rakyat.', falsafah: 'Watak Angkasa Jembar Segarane', falsafahArti: 'Berjiwa lapang seluas angkasa, sanggup memaafkan dan mengayomi semua ragam manusia.' },
  { id: 106, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Maruta (Angin): Masuk Menelisik Tanpa Membuat Kegaduhan dan Kerusakan', subtitle: 'Kemampuan menyelidiki kondisi akar rumput secara halus, teliti, dan solutif.', falsafah: 'Watak Maruta Sumusup Alus', falsafahArti: 'Menyusup masuk hingga ke sudut-sudut terpencil untuk memahami realitas penderitaan rakyat.' },
  { id: 107, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Dahana (Api): Membakar Semangat Perjuangan dan Menghanguskan Ketidakadilan', subtitle: 'Ketegasan menghukum para penjahat negara tanpa pandang bulu dan melumat kemalasan.', falsafah: 'Watak Dahana Ambrastha Murka', falsafahArti: 'Kobaran api yang membakar angkara murka dan menegakkan hukum dengan keberanian suci.' },
  { id: 108, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Baruna (Samudra): Kedalaman Ilmu, Ketenangan Batin, dan Penampung Sampah Ujaran', subtitle: 'Kemampuan menerima cercaan publik tanpa menjadi keruh, tetap berwibawa bagai samudra.', falsafah: 'Watak Baruna Jero Tanpa Tepi', falsafahArti: 'Berjiwa dalam seluas samudra, tenang menyerap segala kotoran tanpa kehilangan kesucian diri.' },
  { id: 109, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Watak Bhumi (Bumi): Ketulusan Berkorban, Menopang Kehidupan Tanpa Meminta Balasan', subtitle: 'Kesediaan diinjak dan dicangkul demi menumbuhkan tanaman kemakmuran bagi rakyat banyak.', falsafah: 'Watak Bhumi Hamot Kasusilan', falsafahArti: 'Setia menjadi pijakan kokoh yang menumbuhkan kemakmuran tanpa pernah menagih pamrih.' },
  { id: 110, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Serat Kalatidha Ronggowarsito: Navigasi Pemimpin di Zaman Edan', subtitle: 'Melawan arus kegilaan zaman: eling lan waspada vs tergoda ikut gila demi keuntungan sesaat.', falsafah: 'Amenangi Zaman Edan, Luwih Becik Eling Waspada', falsafahArti: 'Menghadapi zaman edan, seberuntung apapun yang gila, lebih mulia yang tetap ingat dan waspada.' },
  { id: 111, vol: 5, pilar: 'Politik Organisasi Etis', title: 'Bramacari dan Aji Kasampurnan: Disiplin Diri Sebelum Memimpin Pasukan', subtitle: 'Latihan penguasaan syahwat jasmani dan rohani bagi para perwira kepemimpinan.', falsafah: 'Bramacari Luhur Asmara', falsafahArti: 'Mengendalikan hawa nafsu birahi demi memusatkan segenap energi pada perjuangan suci.' },
  { id: 112, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Bawa Laksana: Keselarasan Sempurna Antara Titah, Niat, dan Perbuatan', subtitle: 'Menghapus jurang antara janji manis di atas podium dengan realitas implementasi lapangan.', falsafah: 'Satuhu Ing Bawa Laksana', falsafahArti: 'Teguh memegang keselarasan antara perkataan, keyakinan batin, dan amal perbuatan.' },
  { id: 113, vol: 5, pilar: 'Seni Negosiasi Taktis', title: 'Trik Semu: Membaca Jebakan Musuh Berwatak Sengkuni', subtitle: 'Mendeteksi watak penjilat licik yang memecah belah persaudaraan demi keuntungan faksi.', falsafah: 'Nyingkiri Tipu Muslihat Sengkuni', falsafahArti: 'Waspada terhadap adu domba beracun yang dibungkus dengan kepura-puraan manis.' },
  { id: 114, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Aji Narayana: Kematangan Strategi Kresna dalam Mengatur Kemenangan Pandawa', subtitle: 'Menjadi arsitek kemenangan besar tanpa harus membanggakan peran diri sendiri.', falsafah: 'Wicaksana Kayadene Prabu Kresna', falsafahArti: 'Kebijaksanaan agung seorang penuntun strategi yang melampaui ego kepemilikan nama.' },
  { id: 115, vol: 5, pilar: 'Politik Organisasi Etis', title: 'Karakter Puntadewa: Keadilan Mutlak Tanpa Kebencian Kepada Musuh', subtitle: 'Hati yang putih bersih yang menolak menumpahkan darah saudara jika masih ada jalan damai.', falsafah: 'Getih Putih Yudhistira', falsafahArti: 'Darah putih kesucian yang menolak kedengkian kendati berkali-kali dizalimi musuh.' },
  { id: 116, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Keteguhan Bima: Integritas Lurus Tanpa Tedeng Aling-Aling', subtitle: 'Keberanian berdiri membela hukum kendati harus berhadapan dengan guru yang dicintainya.', falsafah: 'Lurus Kenceng Koyo Bima', falsafahArti: 'Lurus tanpa kompromi membela keadilan sejati, pantang berbelok oleh bujukan harta.' },
  { id: 117, vol: 5, pilar: 'Politik Pendidikan', title: 'Arjuna Wiwaha: Ujian Kualifikasi Sebelum Memikul Tanggung Jawab Sejarah', subtitle: 'Godaan tujuh bidadari di kahyangan sebagai metafora ujian kekuasaan pemimpin muda.', falsafah: 'Tapa Brata Arjuna Ing Indrakila', falsafahArti: 'Kemenangan menaklukkan gejolak hawa nafsu adalah syarat turunnya anugerah kepemimpinan.' },
  { id: 118, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Semar dan Filosofi Pamomong: Kekuasaan yang Membumi di Tengah Wong Cilik', subtitle: 'Dewa yang menjelma menjadi rakyat jelata pengingat para kesatria yang mulai lalai.', falsafah: 'Kanthi Welas Asih Kyai Semar', falsafahArti: 'Kearifan pamomong sejati yang selalu mendampingi dan mengingatkan para penguasa.' },
  { id: 119, vol: 5, pilar: 'Politik Organisasi Etis', title: 'Karna Madeg Senapati: Tragedi Moral Kesetiaan pada Tempat yang Salah', subtitle: 'Pelajaran sejarah: mengapa idealisme pribadi tak boleh dibaktikan pada rezim yang zalim.', falsafah: 'Milih Setia Marang Kebenaran Sejati', falsafahArti: 'Kesetiaan pada kebenaran hakiki harus selalu mengatasi loyalitas buta pada perorangan.' },
  { id: 120, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Kumbakarna: Membela Tanah Air Tanpa Membela Kejahatan Rajanya', subtitle: 'Distingsi krusial antara patriotisme membela tumpah darah dan perlawanan terhadap tirani.', falsafah: 'Bela Negara Tanpa Mbelani Angkara', falsafahArti: 'Membela kehormatan tanah air sembari tetap mengutuk kezaliman penguasa yang tamak.' },
  { id: 121, vol: 5, pilar: 'Diplomasi & Geopolitik', title: 'Gajah Mada dan Sumpah Palapa: Arsitektur Penyatuan Wilayah Nusantara', subtitle: 'Tekad membaja tanpa kemewahan pribadi hingga kedaulatan bangsa terwujud utuh.', falsafah: 'Tan Amukti Palapa', falsafahArti: 'Pantang menikmati kemewahan dan istirahat sebelum kedaulatan nusantara bersatu teguh.' },
  { id: 122, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Sultan Agung: Perpaduan Strategi Perang, Diplomasi Budaya, dan Ketakwaan Agama', subtitle: 'Penyatuan penanggalan Jawa-Islam dan perlawanan tanpa henti terhadap kolonialisme VOC.', falsafah: 'Nyawijining Iman lan Praja', falsafahArti: 'Menyatukan ketakwaan spiritual dengan ketangguhan pertahanan kedaulatan negeri.' },
  { id: 123, vol: 5, pilar: 'Politik Organisasi Etis', title: 'Pangeran Diponegoro: Perang Jawa dan Gugatan Moral Terhadap Pembusukan Keraton', subtitle: 'Ketika kompromi elit dengan penjajah telah melampaui batas batas toleransi akhlak.', falsafah: 'Jihad Fisabilillah Reksaning Praja', falsafahArti: 'Perjuangan suci mempertahankan martabat agama dan kemerdekaan rakyat tertindas.' },
  { id: 124, vol: 5, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Memayu Hayuning Bawana: Puncak Spiritualitas Negarawan Jawa', subtitle: 'Menjadikan seluruh kebijakan politik sebagai ibadah merawat keselamatan alam semesta.', falsafah: 'Memayu Hayuning Bawana', falsafahArti: 'Mengabdikan seluruh daya hidup demi memperindah tatanan dunia yang damai dan lestari.' },
  { id: 125, vol: 5, pilar: 'Politik Pendidikan', title: 'Amanat Genetik Jawa: Sintesis Nilai Luhur Nusantara Menuju Indonesia Emas', subtitle: 'Menyatukan genetik budi pekerti luhur dengan kecerdasan sains teknologi global.', falsafah: 'Wong Jawa Kang Ora Ilang Jawane', falsafahArti: 'Insan nusantara yang menguasai ilmu peradaban dunia tanpa kehilangan jati diri luhurnya.' },

  // --- VOLUME VI: Politik Pendidikan, Kurikulum Kuasa & Pembentukan Karakter Generasi (126-150) ---
  { id: 126, vol: 6, pilar: 'Politik Pendidikan', title: 'Pendidikan Sebagai Medan Perang Ideologi dan Kedaulatan Masa Depan', subtitle: 'Dekonstruksi politik kurikulum: siapa yang menentukan apa yang wajib dipelajari anak bangsa.', falsafah: 'Pendidikan Kang Mbebasake Jiwa', falsafahArti: 'Pendidikan sejati adalah upaya memerdekakan batin dan akal budi manusia.' },
  { id: 127, vol: 6, pilar: 'Politik Pendidikan', title: 'Gugatan Terhadap Komersialisasi Sekolah dan Kampus', subtitle: 'Menolak komodifikasi ilmu yang mengubah universitas menjadi pabrik pencetak ijazah.', falsafah: 'Ilmu Iku Dudu Dagangan', falsafahArti: 'Ilmu pengetahuan adalah cahaya suci, pantang diperjualbelikan demi menumpuk harta.' },
  { id: 128, vol: 6, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Taman Siswa dan Filosofi Sistem Among Ki Hadjar Dewantara', subtitle: 'Mendidik anak dengan memelihara kodrat alam dan kodrat zamannya secara harmonis.', falsafah: 'Sistem Among Ing Pendidikan', falsafahArti: 'Mendidik dengan mengasuh, menjaga kemerdekaan anak bertumbuh sesuai potensinya.' },
  { id: 129, vol: 6, pilar: 'Politik Organisasi Etis', title: 'Politik Rekrutmen dan Sertifikasi Guru: Menghabisi Mafia Pungli Jabatan', subtitle: 'Menegakkan seleksi meritokrasi murni demi menjamin pendidik berakhlak mulia di kelas.', falsafah: 'Guru Digugu lan Ditiru', falsafahArti: 'Guru wajib ditaati petuahnya karena integritasnya dan diteladani tingkah lakunya.' },
  { id: 130, vol: 6, pilar: 'Politik Pendidikan', title: 'Dekolonisasi Kurikulum Sejarah: Meluruskan Pembelokan Fakta Perjuangan Bangsa', subtitle: 'Mengembalikan marwah para pahlawan sejati dan menyingkap propaganda kolonial.', falsafah: 'Sejarah Kang Bener Madhangi Gesang', falsafahArti: 'Kebenaran sejarah masa lalu adalah obor penerang jalan peradaban di masa depan.' },
  { id: 131, vol: 6, pilar: 'Seni Negosiasi Taktis', title: 'Negosiasi Otonomi Kampus: Melindungi Kebebasan Mimbar Akademik', subtitle: 'Mencegah rektorat dan aparat membungkam demonstrasi serta nalar kritis mahasiswa.', falsafah: 'Mimbar Bebas Suara Kejujuran', falsafahArti: 'Mimbar akademik adalah ruang suci bagi suara kebenaran yang pantang dibungkam.' },
  { id: 132, vol: 6, pilar: 'Politik Pendidikan', title: 'Integrasi Kurikulum Budi Pekerti Jawa dan Nilai-Nilai Universal', subtitle: 'Membangun karakter anak yang santun berbicara, tangguh berjuang, dan anti-korupsi.', falsafah: 'Budi Pekerti Luhur Asas Peradaban', falsafahArti: 'Karakter luhur adalah pondasi mutlak yang menopang keunggulan sains dan teknologi.' },
  { id: 133, vol: 6, pilar: 'Politik Organisasi Etis', title: 'Pencegahan Kekerasan, Perpeloncoan, dan Bullying di Sekolah', subtitle: 'Menghapus jejak fasisme militeristik purba dalam MOS dan kaderisasi kampus.', falsafah: 'Tresna Asih Marang Sapada-pada', falsafahArti: 'Mengembangkan rasa cinta kasih kepada sesama murid tanpa penindasan fisik.' },
  { id: 134, vol: 6, pilar: 'Politik Pendidikan', title: 'Politik Literasi Kritis: Melawan Pembodohan Algoritma Media Sosial', subtitle: 'Mengajarkan siswa membongkar hoaks, rekayasa sentimen politik, dan ilusi digital.', falsafah: 'Pinter Ning Ora Keminter', falsafahArti: 'Pandai mencerna kebenaran tanpa terjebak keangkuhan intelektual palsu.' },
  { id: 135, vol: 6, pilar: 'Diplomasi & Geopolitik', title: 'Pendidikan Vokasi Berbasis Kemandirian Industri Nasional', subtitle: 'Menyelaraskan SMK dengan kedaulatan pangan, manufaktur kereta api, dan maritim nusantara.', falsafah: 'Trampil Tangane Makmur Negarane', falsafahArti: 'Keterampilan tangan para pemuda adalah kunci kemakmuran dan kedaulatan bangsa.' },
  { id: 136, vol: 6, pilar: 'Politik Pendidikan', title: 'Pendidikan Karakter Inklusif untuk Anak Berkebutuhan Khusus dan Kaum Marjinal', subtitle: 'Memastikan tidak ada anak nusantara yang tertinggal karena kemiskinan dan keterbatasan fisik.', falsafah: 'Ora Ana Wong Kang Disia-sia', falsafahArti: 'Tiada satupun anak bangsa yang boleh disia-siakan haknya untuk menuntut ilmu.' },
  { id: 137, vol: 6, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Pemberdayaan Pesantren dan Sekolah Rakyat Berbasis Komunitas', subtitle: 'Menghidupkan kembali tradisi kemandirian pondok pesantren sebagai benteng kedaulatan moral.', falsafah: 'Pesantren Soko Guru Perjuangan', falsafahArti: 'Pesantren dan surau adalah kawah candradimuka pejuang kemerdekaan yang tahan banting.' },
  { id: 138, vol: 6, pilar: 'Politik Organisasi Etis', title: 'Transparansi Dana Bantuan Operasional Sekolah (BOS)', subtitle: 'Menutup celah korupsi kepala sekolah dan oknum dinas pendidikan yang memotong dana buku.', falsafah: 'Dana Murid Wajib Barokah', falsafahArti: 'Setiap rupiah hak pendidikan anak adalah amanah suci yang haram diselewengkan.' },
  { id: 139, vol: 6, pilar: 'Politik Pendidikan', title: 'Pendidikan Kepemimpinan Siswa Berbasis Praktek Nyata dan Pengabdian Desa', subtitle: 'Menerjunkan calon pemimpin muda untuk tinggal dan bekerja bersama kaum petani miskin.', falsafah: 'Nyawiji Kanthi Wong Tani', falsafahArti: 'Menyatu dengan keringat rakyat jelata agar memahami arti keadilan sosial sesungguhnya.' },
  { id: 140, vol: 6, pilar: 'Seni Negosiasi Taktis', title: 'Mengatasi Konflik Yayasan Pendidikan Swasta yang Memperebutkan Warisan', subtitle: 'Melindungi kelangsungan belajar ribuan siswa dari sengketa silsilah keturunan pendiri.', falsafah: 'Nylametake Generasi Penerus', falsafahArti: 'Menyelamatkan nasib anak didik harus diutamakan di atas keserakahan perebutan harta.' },
  { id: 141, vol: 6, pilar: 'Politik Pendidikan', title: 'Kurikulum Sains Berbasis Ekologi Nusantara: Melindungi Hutan dan Laut Kita', subtitle: 'Mengajarkan sains yang mencintai keanekaragaman hayati bukan mengeksploitasinya.', falsafah: 'Reksaning Alas lan Segara', falsafahArti: 'Merawat kelestarian hutan dan lautan sebagai bentuk syukur atas anugerah Ilahi.' },
  { id: 142, vol: 6, pilar: 'Politik Organisasi Etis', title: 'Integritas Ujian Nasional dan Asesmen: Mengakhiri Skandal Jual-Beli Kunci Jawaban', subtitle: 'Membongkar konspirasi kelulusan 100% semu demi gengsi bupati dan kepala dinas.', falsafah: 'Jujur Ajining Dhiri', falsafahArti: 'Kejujuran adalah kehormatan tertinggi, lebih mulia nilai pas-pasan yang jujur daripada nilai sempurna hasil curang.' },
  { id: 143, vol: 6, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Kewibawaan Guru di Depan Kelas: Membangun Wibawa Tanpa Kekerasan Fisik', subtitle: 'Seni menertibkan kelas dengan kekuatan tatapan mata kasih sayang dan kedalaman ilmu.', falsafah: 'Wibawa Laku Luhur', falsafahArti: 'Wibawa seorang guru memancar dari keluhuran pekerti dan penguasaan ilmu yang menakjubkan.' },
  { id: 144, vol: 6, pilar: 'Politik Pendidikan', title: 'Pengembangan Laboratorium Riset dan Paten Inovasi Anak Negeri', subtitle: 'Melindungi hasil penemuan saintis muda agar tidak dibeli murah dan dibajak korporasi asing.', falsafah: 'Karya Asli Putra Pertiwi', falsafahArti: 'Karya inovasi anak bangsa wajib diproteksi demi kemandirian teknologi nusantara.' },
  { id: 145, vol: 6, pilar: 'Diplomasi & Geopolitik', title: 'Pertukaran Pemuda Kebangsaan: Menyatukan Sabang Sampai Merauke', subtitle: 'Menghilangkan sekat prasangka primordial melalui program tinggal bersama lintas suku.', falsafah: 'Rembulan Siji Madhangi Sabumi', falsafahArti: 'Satu cahaya purnama menyatukan dan menyinari seluruh pelosok kepulauan nusantara.' },
  { id: 146, vol: 6, pilar: 'Politik Organisasi Etis', title: 'Etika Hubungan Dosen dan Mahasiswa: Menghapus Perbudakan Tugas Akhir', subtitle: 'Melarang pencatutan nama dosen pada riset mahasiswa tanpa kontribusi akademis nyata.', falsafah: 'Adil Ing Jagad Akademik', falsafahArti: 'Menjunjung keadilan hak cipta intelektual dan menghargai jerih payah pemikiran siswa.' },
  { id: 147, vol: 6, pilar: 'Politik Pendidikan', title: 'Pendidikan Politik Sejak Dini: Mengajarkan Siswa Berdebat Sehat Tanpa Kebencian', subtitle: 'Simulasi pemilihan ketua OSIS berbasis program kerja nyata bukan politik uang kue.', falsafah: 'Sinau Demokrasi Bermartabat', falsafahArti: 'Belajar berdemokrasi dengan nalar sehat dan berlapang dada menerima hasil musyawarah.' },
  { id: 148, vol: 6, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Memelihara Bahasa Ibu dan Aksara Nusantara: Melawan Kepunahan Bahasa Daerah', subtitle: 'Mengapa membuang bahasa Jawa, Sunda, Minang, dll adalah pembunuhan kecerdasan genetik.', falsafah: 'Basa Ibu Punjer Karakter', falsafahArti: 'Bahasa ibu adalah jangkar peradaban jiwa yang menyimpan kearifan beribu tahun.' },
  { id: 149, vol: 6, pilar: 'Politik Pendidikan', title: 'Pendidikan Anti-Narkoba dan Ketahanan Mental Remaja Menghadapi Tekanan Hidup', subtitle: 'Membangun benteng spiritual generasi muda dari keputusasaan dan pelarian destruktif.', falsafah: 'Kukuh Jiwane Tanggap Ragasane', falsafahArti: 'Kuat jiwanya, sehat badannya, tangguh menghadapi segala godaan zaman.' },
  { id: 150, vol: 6, pilar: 'Politik Pendidikan', title: 'Manifesto Revolusi Pendidikan Nusantara Menuju Kedaulatan Berpikir', subtitle: 'Ringkasan komprehensif doktrin pendidikan sebagai senjata utama kebangkitan bangsa.', falsafah: 'Pendidikan Puncak Peradaban', falsafahArti: 'Pendidikan luhur adalah puncak perjuangan yang akan menentukan jatuh bangunnya suatu bangsa.' },

  // --- VOLUME VII: Tata Kelola Lembaga Pendidikan & Transformasi Kebijakan Publik (151-175) ---
  { id: 151, vol: 7, pilar: 'Politik Pendidikan', title: 'Audit Kebijakan Alokasi Anggaran Pendidikan 20% APBN/APBD', subtitle: 'Menyelidiki anggaran siluman yang diselipkan pada pos-pos seremonial birokrasi.', falsafah: 'Bela Hak Pendidikan Wong Cilik', falsafahArti: 'Memastikan dana konstitusi sampai seutuhnya ke meja belajar murid miskin di pelosok.' },
  { id: 152, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Reformasi Birokrasi Dinas Pendidikan Provinsi dan Kabupaten/Kota', subtitle: 'Menghapus jabatan fiktif dan memangkas rantai birokrasi perizinan sekolah swasta.', falsafah: 'Birokrasi Melayani dudu Dilayani', falsafahArti: 'Aparatur negara bertugas melayani rakyat dengan tulus, bukan memeras dan meminta upeti.' },
  { id: 153, vol: 7, pilar: 'Politik Pendidikan', title: 'Kebijakan Perlindungan Hukum Guru dari Kriminalisasi Wali Murid', subtitle: 'Membangun payung hukum perlindungan tindakan pendisiplinan edukatif yang proporsional.', falsafah: 'Ngayomi Martabat Guru Bangsa', falsafahArti: 'Melindungi kehormatan guru agar dapat mendidik murid dengan ketenangan batin.' },
  { id: 154, vol: 7, pilar: 'Seni Negosiasi Taktis', title: 'Negosiasi Kemitraan Kampus dengan BUMN dan Korporasi Multinasional', subtitle: 'Mendapatkan dana penelitian murni tanpa ikatan klausul hak cipta yang mencekik.', falsafah: 'Kemitraan Kang Setara lan Adil', falsafahArti: 'Bekerja sama secara setara tanpa menggadaikan independensi institusi riset bangsa.' },
  { id: 155, vol: 7, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Tata Kelola Dewan Pendidikan: Mengembalikan Suara Masyarakat Sipil', subtitle: 'Mencegah dewan pendidikan diisi oleh pensiunan pejabat partisan yang mencari pesangon.', falsafah: 'Swara Rakyat Swara Suci', falsafahArti: 'Suara rakyat adalah suara suci yang harus didengar dan ditaati oleh para pengambil kebijakan.' },
  { id: 156, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Standar Akreditasi Lembaga Pendidikan yang Bersih dari Praktik Suap Asesor', subtitle: 'Mengharamkan jamuan amplop dan manipulasi dokumen borang akreditasi semu.', falsafah: 'Resik Akreditasi Resik Prestasi', falsafahArti: 'Kualitas sejati terpancar dari kejujuran proses, bukan dari angka akreditasi palsu.' },
  { id: 157, vol: 7, pilar: 'Politik Pendidikan', title: 'Transformasi Kebijakan Zonasi Sekolah: Keadilan Akses vs Fasilitas Favorit', subtitle: 'Menghapuskan kasta sekolah unggulan elitis menuju pemerataan fasilitas kelas dunia.', falsafah: 'Keadilan Sosial Tumrap Kabeh Murid', falsafahArti: 'Semua anak bangsa berhak menikmati fasilitas sekolah terbaik di dekat rumahnya.' },
  { id: 158, vol: 7, pilar: 'Diplomasi & Geopolitik', title: 'Kerjasama Pendidikan Lintas Wilayah 3T (Tertinggal, Terdepan, Terluar)', subtitle: 'Mobilisasi sarjana terbaik ke pulau-pulau perbatasan dengan insentif kesejahteraan berlipat.', falsafah: 'Nyebar Padhang Ing Watesing Praja', falsafahArti: 'Membawa terang lentera ilmu hingga ke tapal batas terluar kedaulatan tanah air.' },
  { id: 159, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Manajemen Hibah dan Wakaf Pendidikan: Pengelolaan Aset Abadi Secara Produktif', subtitle: 'Mengembangkan sovereign wealth fund pendidikan yang menghasilkan beasiswa berkelanjutan.', falsafah: 'Wakaf Abadi Murup Selawase', falsafahArti: 'Harta wakaf yang dikelola amanah menjadi sumber mata air kebaikan tiada henti.' },
  { id: 160, vol: 7, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Kepemimpinan Kepala Sekolah: Antara Manajer Efisien dan Guru Teladan', subtitle: 'Kepala sekolah yang tidak sekadar duduk di balik meja berkas, melainkan berkeliling kelas.', falsafah: 'Pamomong Luhur Ing Sekolah', falsafahArti: 'Pemimpin yang mengayomi seluruh murid dan guru dengan keteladanan penuh kasih.' },
  { id: 161, vol: 7, pilar: 'Politik Pendidikan', title: 'Pemberantasan Mafia Buku Pelajaran dan Pengadaan Seragam Paksaan', subtitle: 'Menghukum oknum yang memeras orang tua murid miskin melalui pungutan liar terselubung.', falsafah: 'Nyingkiri Pamrih Kang Nyengsarani', falsafahArti: 'Menghapus pungutan liar yang menjerumuskan orang tua murid ke jurang kemiskinan.' },
  { id: 162, vol: 7, pilar: 'Seni Negosiasi Taktis', title: 'Penyusunan Peraturan Daerah (Perda) Pendidikan yang Mengakar pada Kearifan Lokal', subtitle: 'Mengakomodasi budaya adat nusantara ke dalam muatan lokal tanpa melanggar undang-undang nasional.', falsafah: 'Desa Mawa Cara Negara Mawa Tata', falsafahArti: 'Menghormati tradisi lokal sembari tetap patuh pada tatanan hukum bernegara.' },
  { id: 163, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Pemberian Insentif Adil Bagi Guru Honorer di Daerah Pelosok', subtitle: 'Mengakhiri tragedi gaji guru honorer seharga uang bensin dengan pengangkatan P3K transparan.', falsafah: 'Ngurmati Keringate Pahlawan Tanpa Tanda Jasa', falsafahArti: 'Membayar lunas jerih payah guru dengan upah bermartabat sebelum keringatnya kering.' },
  { id: 164, vol: 7, pilar: 'Politik Pendidikan', title: 'Politik Digitalisasi Pendidikan: Menyediakan Internet Gratis dan Gawai untuk Murid Miskin', subtitle: 'Menghilangkan jurang kesenjangan digital yang mendiskriminasi anak kampung.', falsafah: 'Teknologi Kang Mulyakake Wong Cilik', falsafahArti: 'Kemajuan teknologi digital harus diarahkan untuk mengangkat derajat rakyat jelata.' },
  { id: 165, vol: 7, pilar: 'Diplomasi & Geopolitik', title: 'Diplomasi Riset Internasional Penanggulangan Pandemi dan Krisis Pangan', subtitle: 'Menjadikan fakultas kedokteran dan pertanian nusantara sebagai pusat rujukan dunia tropis.', falsafah: 'Mbangun Benteng Kawarasan Bangsa', falsafahArti: 'Menegakkan kemandirian kesehatan dan ketahanan pangan demi keselamatan rakyat.' },
  { id: 166, vol: 7, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Pemberhentian Rektor dan Dekan yang Terlibat Plagiarisme Akademik', subtitle: 'Menjaga marwah gelar guru besar dari aib penjiplakan karya ilmiah.', falsafah: 'Satria Ngugemi Kasunyatan', falsafahArti: 'Seorang ilmuwan sejati pantang berbohong dan pantang mencuri karya orang lain.' },
  { id: 167, vol: 7, pilar: 'Politik Pendidikan', title: 'Pendidikan Vokasi Maritim: Mengembalikan Kejayaan Poros Bahari Nusantara', subtitle: 'Mendirikan akademi pelayaran dan perikanan canggih untuk menguasai laut nusantara.', falsafah: 'Jalesveva Jayamahe Ing Samudra Kita Berjaya', falsafahArti: 'Di lautan kita jaya, menguasai samudra dengan ilmu navigasi dan kedaulatan maritim.' },
  { id: 168, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Pemberdayaan Komite Sekolah: Mengubah dari Tukang Stempel Menjadi Pengawas Kritis', subtitle: 'Melatih orang tua murid membedah transparansi RAPBS setiap awal tahun ajaran.', falsafah: 'Guyub Rukun Ngawasi Sekolah', falsafahArti: 'Guyub rukun bersama mengawasi pengelolaan sekolah agar berjalan lurus dan jujur.' },
  { id: 169, vol: 7, pilar: 'Seni Negosiasi Taktis', title: 'Menyelesaikan Tawuran Antar-Sekolah Melalui Rekonsiliasi Budaya', subtitle: 'Mengubah energi kekerasan pemuda menjadi kompetisi seni beladiri dan sains bergengsi.', falsafah: 'Ngrubah Gething Dadi Asih', falsafahArti: 'Mengubah kebencian buta antar-kelompok menjadi jalinan persaudaraan yang rukun.' },
  { id: 170, vol: 7, pilar: 'Politik Pendidikan', title: 'Tata Kelola Pengasuhan Asrama Sekolah Unggulan Berasrama (Boarding School)', subtitle: 'Menjamin lingkungan asrama bebas dari kekerasan senioritas dan penyimpangan moral.', falsafah: 'Asrama Pondok Karakter Mulia', falsafahArti: 'Membangun lingkungan asrama yang dipenuhi suasana persaudaraan dan kesucian akhlak.' },
  { id: 171, vol: 7, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Seni Menata Ruang Kelas yang Memicu Kreativitas: Filosofi Arsitektur Edukatif', subtitle: 'Menciptakan ruang belajar terbuka yang menyatu dengan keasrian pepohonan dan cahaya matahari.', falsafah: 'Asri Endah Nyenengake Ati', falsafahArti: 'Lingkungan yang hijau asri membebaskan pikiran anak dari kepenatan tekanan belajar.' },
  { id: 172, vol: 7, pilar: 'Politik Pendidikan', title: 'Kebijakan Makan Siang Bergizi Gratis: Manajemen Rantai Pasok Petani Lokal', subtitle: 'Menolak konglomerasi katering instan demi menghidupkan warung dan petani sayur sekitar sekolah.', falsafah: 'Pangan Sehat Saka Lemah Dhewe', falsafahArti: 'Menyajikan makanan sehat dari hasil bumi petani sendiri untuk kecerdasan anak bangsa.' },
  { id: 173, vol: 7, pilar: 'Politik Organisasi Etis', title: 'Perlindungan Hak Kekayaan Intelektual (HAKI) Peneliti Daerah', subtitle: 'Membantu penemu formula obat herbal mendaftarkan paten sebelum diklaim perusahaan asing.', falsafah: 'Ngayomi Hak Warisan Cipta', falsafahArti: 'Melindungi hak cipta intelektual anak negeri dari upaya pencurian korporasi serakah.' },
  { id: 174, vol: 7, pilar: 'Diplomasi & Geopolitik', title: 'Advokasi Aliansi Pendidikan ASEAN: Pertukaran Standarisasi Mutu Tanpa Dominasi', subtitle: 'Menempatkan lulusan pendidikan Indonesia di posisi terhormat bursa kerja Asia Tenggara.', falsafah: 'Sesandingan Guyub Ing Nusantara Raya', falsafahArti: 'Bersanding sejajar dan bersahabat erat dengan negara-negara serumpun Asia Tenggara.' },
  { id: 175, vol: 7, pilar: 'Politik Pendidikan', title: 'Cetak Biru Reformasi Pendidikan Abad 21: Visi Indonesia Emas 2045', subtitle: 'Menyiapkan generasi unggul yang berakhlak kesatria, menguasai AI, dan berjiwa Pancasila.', falsafah: 'Sumunar Cahyaning Generasi Kencana', falsafahArti: 'Bersinarlah cahaya generasi emas penerus yang membawa bangsa ke puncak kejayaan.' },

  // --- VOLUME VIII: Negarawan Sejati, Warisan Peradaban & Konsolidasi Abadi (176-200) ---
  { id: 176, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Puncak Kematangan: Transformasi dari Politisi Menjadi Negarawan Sejati', subtitle: 'Politisi memikirkan pemilu berikutnya, negarawan memikirkan keselamatan generasi seabad ke depan.', falsafah: 'Wong Agung Traping Budi', falsafahArti: 'Negarawan sejati berjiwa besar, mengorbankan popularitas fana demi keabadian bangsa.' },
  { id: 177, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Seni Suksesi Regenerasi Tanpa Pertumpahan Darah dan Perpecahan', subtitle: 'Mempersiapkan kader penerus dan meletakkan jabatan secara terhormat pada waktunya.', falsafah: 'Lengser Keprabon Madeg Pandita', falsafahArti: 'Turun dari tahta kekuasaan secara ikhlas untuk menjadi guru kebajikan bangsa.' },
  { id: 178, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Kedaulatan Maritim dan Geopolitik Nusantara: Poros Lautan Samudra Hindia-Pasifik', subtitle: 'Menghidupkan doktrin Sriwijaya dan Majapahit dalam pertahanan kepulauan modern.', falsafah: 'Kukuh Kedaulatan Samudra Nusantara', falsafahArti: 'Menjaga keutuhan setiap jengkal pulau dan karang laut dari ancaman armada asing.' },
  { id: 179, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Falsafah Ngluruk Tanpa Bala di Panggung Geopolitik Global', subtitle: 'Memenangkan sengketa internasional melalui keluhuran hukum, diplomasi budaya, dan kearifan.', falsafah: 'Ngluruk Tanpa Bala Menang Tanpa Ngasorake', falsafahArti: 'Menang dalam persaingan dunia tanpa harus menghancurkan martabat bangsa lain.' },
  { id: 180, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Anti-Korupsi Genetik: Membangun Sistem Kebudayaan yang Malu Mengambil Hak Orang Lain', subtitle: 'Menanamkan rasa jijik terhadap korupsi ke dalam sumsum tulang belakang birokrasi negara.', falsafah: 'Wirang Ngrebut Haking Liyan', falsafahArti: 'Rasa malu luar biasa apabila memakan rezeki haram yang bukan menjadi haknya.' },
  { id: 181, vol: 8, pilar: 'Politik Pendidikan', title: 'Pendidikan Ketahanan Pangan: Menolak Ketergantungan Impor Beras dan Gandum', subtitle: 'Mencetak sarjana pertanian yang bangga mencangkul tanah subur nusantara.', falsafah: 'Gemah Ripah Loh Jinawi', falsafahArti: 'Tanah air yang subur makmur wajib diolah dengan kecerdasan demi kemandirian pangan.' },
  { id: 182, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Kemandirian Energi Terbarukan: Mengakhiri Penjajahan Oligarki Fosil', subtitle: 'Peralihan bertahap menuju energi matahari, panas bumi, dan angin demi bumi nusantara.', falsafah: 'Ngurmati Daya Alam Samesta', falsafahArti: 'Memanfaatkan energi matahari dan bumi secara lestari tanpa merusak alam pertiwi.' },
  { id: 183, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Mulat Sarira Ing Pucuking Kekuasaan: Menghindari Mabuk Kedudukan', subtitle: 'Semakin tinggi posisi pohon, semakin kencang angin godaan: protokol mawas diri harian.', falsafah: 'Aja Gumun, Aja Getun, Aja Kagetan', falsafahArti: 'Jangan mudah silau heran, jangan mudah menyesal gundah, jangan gampang panik kaget.' },
  { id: 184, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Pemberdayaan Kaum Lemah (Mustadh’afin): Tolak Ukur Kesuksesan Rezim', subtitle: 'Derajat kemuliaan suatu negara diukur dari bagaimana mereka memperlakukan warganya yang paling miskin.', falsafah: 'Wong Cilik Guyub Tentrem', falsafahArti: 'Kemakmuran sejati adalah ketika rakyat jelata dapat makan kenyang dan tidur tenang.' },
  { id: 185, vol: 8, pilar: 'Seni Negosiasi Taktis', title: 'Penyelesaian Sengketa Sejarah Luka Bangsa Melalui Rekonsiliasi Luhur', subtitle: 'Menyembuhkan trauma pelanggaran HAM masa lalu tanpa dendam dan tanpa menutup kebenaran.', falsafah: 'Tatas Rekonsiliasi Kang Suci', falsafahArti: 'Menyembuhkan luka sejarah dengan kejujuran pengakuan dan pengampunan yang tulus.' },
  { id: 186, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Politik Bebas Aktif Abad 21: Menolak Menjadi Pangkalan Militer Blok Mana Pun', subtitle: 'Menjaga jarak setara dengan negara-negara adidaya dan aktif memediasi perdamaian dunia.', falsafah: 'Dhadha Mantep Tanpa Goyah', falsafahArti: 'Teguh berdiri di atas kaki sendiri tanpa pernah menjadi budak kepentingan asing.' },
  { id: 187, vol: 8, pilar: 'Politik Pendidikan', title: 'Pusat Kebudayaan Nusantara di Ibukota Baru: Simbol Persatuan Peradaban', subtitle: 'Mendirikan museum peradaban dan perpustakaan manuskrip terbesar di Asia Tenggara.', falsafah: 'Sasana Luhur Punjering Budaya', falsafahArti: 'Mendirikan pusat peradaban yang memancarkan kearifan ke seluruh penjuru dunia.' },
  { id: 188, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Ajaran Sangkan Paraning Dumadi: Kesadaran Asal Usul dan Akhir Kehidupan', subtitle: 'Memahami bahwa setiap kekuasaan di muka bumi pasti akan berakhir di liang kubur.', falsafah: 'Sangkan Paraning Dumadi', falsafahArti: 'Menyadari dari mana manusia diciptakan dan ke mana ia kelak akan kembali menghadap Tuhan.' },
  { id: 189, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Konstitusi yang Hidup: Menjaga Pembukaan UUD 1945 dari Amandemen Liar', subtitle: 'Mengharamkan pengubahan cita-cita kemerdekaan: melindungi segenap bangsa dan memajukan kesejahteraan umum.', falsafah: 'Ngugemi Dasaring Nagara', falsafahArti: 'Menjaga fondasi pembukaan konstitusi agar tidak diganggu oleh kepentingan fana.' },
  { id: 190, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Bantuan Kemanusiaan Internasional Tanpa Motif Kolonialisme Terselubung', subtitle: 'Mengirim relawan medis dan guru ke negara-negara yang dilanda perang saudara dan bencana.', falsafah: 'Welas Asih Marang Kemanusiaan', falsafahArti: 'Menghulurkan tangan bantuan kemanusiaan murni atas dasar kasih persaudaraan dunia.' },
  { id: 191, vol: 8, pilar: 'Politik Pendidikan', title: 'Tradisi Menulis dan Mendokumentasikan Hikmah Kepemimpinan', subtitle: 'Kewajiban setiap negarawan menuliskan catatan perjuangannya agar tidak diklaim oleh pembual.', falsafah: 'Surat Weling Kanggo Generasi', falsafahArti: 'Menuliskan risalah hikmah sebagai bekal penuntun bagi generasi yang akan datang.' },
  { id: 192, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Kearifan Menghadapi Kematian: Mewariskan Nama Harum Bukan Warisan Sengketa', subtitle: 'Gajah mati meninggalkan gading, manusia mati meninggalkan amal kebajikan abadi.', falsafah: 'Asma Arum Kuncara Ing Bawana', falsafahArti: 'Mewariskan nama yang harum dan karya luhur yang dikenang berabad-abad lamanya.' },
  { id: 193, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Sumpah Kesatria Negarawan: Menolak Tawaran Menjadi Warga Negara Asing Demi Perlindungan Hukum', subtitle: 'Tetap setia tinggal, berjuang, dan dimakamkan di tanah air tercinta apapun risikonya.', falsafah: 'Setia Tuhu Marang Lemah Wutah Gethih', falsafahArti: 'Kesetiaan abadi kepada tanah tumpah darah tempat pertama kali memijakkan kaki.' },
  { id: 194, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Membangun Geopolitik Kemakmuran Bersama di Kepulauan Samudra Hindia', subtitle: 'Menyatukan negara-negara lingkar Samudra Hindia dalam perjanjian perdamaian dan perdagangan adil.', falsafah: 'Guyub Samudra Tentreming Jagad', falsafahArti: 'Menciptakan keamanan dan ketentraman di lautan luas demi kemakmuran bersama.' },
  { id: 195, vol: 8, pilar: 'Politik Pendidikan', title: 'Sistem Pembinaan Guru Abad 22: Integrasi Kecerdasan Spiritual dan Sains Komputasi', subtitle: 'Mempersiapkan pendidik masa depan yang mampu memandu kecerdasan buatan dengan hati nurani.', falsafah: 'Nuntun Teknologi Kanthi Nurani', falsafahArti: 'Mengendalikan kecanggihan teknologi dengan lentera nurani budi pekerti yang jernih.' },
  { id: 196, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Puncak Kebajikan Jawa: Nir-Pamrih, Nir-Dursila, Nir-Angkara', subtitle: 'Pembersihan diri total dari tiga racun kekuasaan: pamrih ego, kemunafikan, dan kekejaman.', falsafah: 'Resik Beninging Jiwa Satria', falsafahArti: 'Jiwa yang bersih sebening embun pagi, bebas dari segala noda keserakahan duniawi.' },
  { id: 197, vol: 8, pilar: 'Politik Organisasi Etis', title: 'Audit Kebijakan Warisan 50 Tahun: Mengukur Dampak Keputusan Pada Cucu Cicit', subtitle: 'Kewajiban setiap undang-undang diuji kelayakannya terhadap kelangsungan hidup generasi masa depan.', falsafah: 'Mikul Masa Depan Keturunan', falsafahArti: 'Bertanggung jawab atas setiap tetes air dan pohon yang akan diwarisi oleh anak cucu kita.' },
  { id: 198, vol: 8, pilar: 'Diplomasi & Geopolitik', title: 'Pidato Kebangsaan Terakhir Sang Negarawan di Hadapan Sidang Majelis Umum', subtitle: 'Pesan wasiat tentang keadilan peradaban, persaudaraan semesta, dan perdamaian abadi.', falsafah: 'Sabda Pamungkas Kang Nyawiji', falsafahArti: 'Wejangan penutup yang merangkum segenap cita-cita luhur kemanusiaan yang abadi.' },
  { id: 199, vol: 8, pilar: 'Politik Pendidikan', title: 'Monumen Hidup Akademi Politik 200 Bab: Sekolah Negarawan Nusantara', subtitle: 'Melembagakan kurikulum 200 bab ini sebagai kurikulum wajib kader bangsa lintas zaman.', falsafah: 'Lentera Ilmu Kang Ora Bakal Mati', falsafahArti: 'Menyalakan lentera ilmu kepemimpinan yang akan terus menyala menerangi jalan generasi.' },
  { id: 200, vol: 8, pilar: 'Kepemimpinan Falsafah Jawa', title: 'Paripurna: Hamemayu Hayuning Bawana lan Kasampurnaning Gesang', subtitle: 'Penyatuan abadi antara pengabdian politik, keluhuran pendidikan, dan ridha Tuhan Semesta Alam.', falsafah: 'Hamemayu Hayuning Bawana, Manunggaling Kawula Gusti', falsafahArti: 'Tuntas merawat kelestarian dunia dengan budi pekerti luhur demi kesempurnaan hidup sejati.' }
];

// Helper to construct fully articulated chapter data
export const ALL_CHAPTERS: Chapter[] = CHAPTER_BLUEPRINT.map((bp) => {
  // Find custom seed or generate rich syllabus and protocols
  const seed = RAW_MASTER_CHAPTERS.find((c) => c.id === bp.id);
  const volInfo = VOLUMES_INFO.find((v) => v.volume === bp.vol)!;

  if (seed) {
    return {
      id: bp.id,
      volume: bp.vol,
      volumeRomawi: volInfo.romawi,
      volumeTitle: volInfo.title,
      pilar: bp.pilar,
      title: bp.title,
      subtitle: bp.subtitle,
      falsafah: bp.falsafah,
      falsafahArti: bp.falsafahArti,
      ringkasan: seed.ringkasan,
      silabus: seed.silabus,
      studiKasus: seed.studiKasus,
      protokolAksi: seed.protokolAksi,
      durasiMenit: 30 + (bp.id % 5) * 5,
    };
  }

  // Generate deep, context-tailored educational curriculum for every single remaining chapter
  const defaultSilabus = [
    `Doktrin dan landasan filosofis ${bp.title}`,
    `Dilema struktural dan dinamika kekuasaan dalam pilar ${bp.pilar}`,
    `Metodologi penerapan praktis dalam lembaga pendidikan dan organisasi publik`,
    `Refleksi kearifan genetik Jawa: interpretasi "${bp.falsafah}" bagi negarawan modern`,
  ];

  const defaultProtokol = [
    `Lakukan identifikasi posisi etis dan risiko manipulasi politik sebelum mengambil tindakan`,
    `Terapkan prinsip kehati-hatian "${bp.falsafah}" dalam komunikasi antar-pemangku kepentingan`,
    `Dokumentasikan setiap keputusan strategis secara transparan demi akuntabilitas sejarah`,
  ];

  const defaultStudiKasus = `Dalam dinamika implementasi ${bp.title}, seorang pemimpin dihadapkan pada desakan faksi pragmatis yang ingin memotong kompas regulasi demi hasil kilat. Bab ini memandu pembaca merumuskan respon diplomatik yang menjaga kehormatan lembaga tanpa mengorbankan stabilitas operasional.`;

  const defaultRingkasan = `Bab ${bp.id} ini mengkaji ${bp.title} secara mendalam sebagai salah satu instrumen utama dalam pilar ${bp.pilar}. Mengakar pada falsafah luhur "${bp.falsafah}" (${bp.falsafahArti}), bab ini membekali kader pemimpin dengan ketajaman analisis, kematangan emosional, serta integritas moral yang pantang ditawar. Disusun secara sistematis agar dapat diterapkan di lingkungan birokrasi, institusi pendidikan, maupun panggung diplomasi kebangsaan.`;

  return {
    id: bp.id,
    volume: bp.vol,
    volumeRomawi: volInfo.romawi,
    volumeTitle: volInfo.title,
    pilar: bp.pilar,
    title: bp.title,
    subtitle: bp.subtitle,
    falsafah: bp.falsafah,
    falsafahArti: bp.falsafahArti,
    ringkasan: defaultRingkasan,
    silabus: defaultSilabus,
    studiKasus: defaultStudiKasus,
    protokolAksi: defaultProtokol,
    durasiMenit: 25 + (bp.id % 4) * 5,
  };
});

// Hastabrata Special Matrix Data
export interface HastabrataElement {
  nama: string;
  unsur: string;
  simbol: string;
  makna: string;
  implementasi: string;
  babTerkait: number;
}

export const HASTABRATA_DATA: HastabrataElement[] = [
  {
    nama: 'Surya (Matahari)',
    unsur: 'Energi & Kecerahan',
    simbol: '☀️',
    makna: 'Memberi energi kehidupan, kehangatan, dan pencerahan secara adil kepada seluruh makhluk tanpa membedakan status.',
    implementasi: 'Kebijakan publik yang inklusif, transparansi anggaran, serta pemberian dorongan semangat kepada staf tanpa diskriminasi.',
    babTerkait: 102,
  },
  {
    nama: 'Candra (Bulan)',
    unsur: 'Kesejukan & Keanggunan',
    simbol: '🌙',
    makna: 'Memancarkan kelembutan cahaya di kegelapan malam, memberikan ketenteraman batin bagi mereka yang berduka.',
    implementasi: 'Gaya diplomasi yang santun, kemampuan meredam amarah massa, serta penyampaian kritik dengan bahasa persuasif.',
    babTerkait: 103,
  },
  {
    nama: 'Kartika (Bintang)',
    unsur: 'Pedoman Moral & Arah',
    simbol: '⭐',
    makna: 'Menjadi penunjuk arah bagi pelaut dan musafir di tengah gulitanya samudra, teguh pada orbitnya.',
    implementasi: 'Integritas moral yang kokoh, tidak tergoda suap, dan menjadi panutan etis di saat terjadi krisis kepemimpinan.',
    babTerkait: 104,
  },
  {
    nama: 'Angkasa (Langit)',
    unsur: 'Keluasan & Toleransi',
    simbol: '🌌',
    makna: 'Memiliki keluasan tanpa tepi, menampung segala macam awan, hujan, petir, dan burung tanpa kehilangan kemegahannya.',
    implementasi: 'Kelapangan dada menerima kritik paling pedas, merangkul lawan politik yang bertobat, dan toleransi kebhinekaan.',
    babTerkait: 105,
  },
  {
    nama: 'Maruta (Angin)',
    unsur: 'Kecermatan & Kelembutan',
    simbol: '🍃',
    makna: 'Menyusup halus ke setiap celah tanpa merusak, merasakan kondisi terdalam tanpa menimbulkan kegaduhan.',
    implementasi: 'Pemeriksaan kondisi akar rumput secara langsung (blusukan etis), mendengarkan keluhan guru pelosok tanpa barikade.',
    babTerkait: 106,
  },
  {
    nama: 'Dahana (Api)',
    unsur: 'Ketegasan & Keberanian',
    simbol: '🔥',
    makna: 'Membakar habis angkara murka, melumat kemalasan, dan membakar semangat juang para pengikutnya.',
    implementasi: 'Ketegasan menghukum koruptor dan pemeras, keberanian mencabut izin tambang perusak lingkungan, dan disiplin tinggi.',
    babTerkait: 107,
  },
  {
    nama: 'Baruna (Samudra)',
    unsur: 'Kedalaman & Ketenangan',
    simbol: '🌊',
    makna: 'Memiliki kedalaman luas yang menampung segala aliran sungai dan kotoran tanpa berubah menjadi keruh atau asinnya luntur.',
    implementasi: 'Kematangan emosi, tidak reaktif terhadap fitnah media sosial, serta kedalaman ilmu pengetahuan dan geopolitik.',
    babTerkait: 108,
  },
  {
    nama: 'Bhumi (Tanah)',
    unsur: 'Ketulusan & Pengorbanan',
    simbol: '🌍',
    makna: 'Ikhlas dipijak, dicangkul, dan diberi beban berat, namun terus menumbuhkan pohon buah dan kemakmuran bagi sesama.',
    implementasi: 'Kerendahan hati melayani rakyat jelata, pengorbanan waktu dan tenaga pribadi demi kelangsungan lembaga pendidikan.',
    babTerkait: 109,
  },
];

// Interactive Dilemma Scenarios for Leadership Sandbox
export interface DilemmaScenario {
  id: string;
  judul: string;
  pilar: PilarUtama;
  latarBelakang: string;
  babRujukan: number;
  pertanyaan: string;
  pilihan: {
    id: string;
    label: string;
    konsekuensi: string;
    dampakEtika: number; // -10 to +10
    dampakStabilitas: number; // -10 to +10
    dampakWibawa: number; // -10 to +10
    penjelasanFalsafah: string;
  }[];
}

export const DILEMMA_SCENARIOS: DilemmaScenario[] = [
  {
    id: 'dilema-1',
    judul: 'Krisis Penolakan Suap Logistik Kontestasi',
    pilar: 'Politik Organisasi Etis',
    latarBelakang: 'Dua hari menjelang musyawarah pemilihan pimpinan akademi, seorang konglomerat menawarkan logistik kampanye Rp 2 Miliar tunai. Imbalannya: setelah Anda terpilih, proyek pengadaan buku dan IT kampus harus diserahkan kepada perusahaannya secara penunjukan langsung.',
    babRujukan: 3,
    pertanyaan: 'Bagaimana tindakan politik etis Anda sebagai calon pimpinan?',
    pilihan: [
      {
        id: 'A',
        label: 'Tolak mentah-mentah secara tertulis dan umumkan penawaran tersebut ke publik.',
        konsekuensi: 'Konglomerat tersinggung dan mengalihkan dana ke lawan politik Anda, namun legitimasi moral Anda meroket di mata pemilih independen.',
        dampakEtika: 10,
        dampakStabilitas: -4,
        dampakWibawa: 9,
        penjelasanFalsafah: 'Mewujudkan "Budi Pekerti Luhur Tinuntun Dening Kasucen". Mengorbankan jalan pintas demi menjaga kesucian amanah publik.',
      },
      {
        id: 'B',
        label: 'Tolak secara diplomatis di ruang tertutup dengan alasan aturan kepatuhan tanpa memicu konfrontasi terbuka.',
        konsekuensi: 'Konglomerat tidak membiayai Anda namun tidak berubah menjadi musuh aktif yang berusaha menjatuhkan Anda secara brutal.',
        dampakEtika: 8,
        dampakStabilitas: 6,
        dampakWibawa: 7,
        penjelasanFalsafah: 'Mencerminkan "Menang Tanpa Ngasorake" dan "Ajining Diri Saka Lathi". Menjaga prinsip tanpa memproduksi dendam kesumat yang tak perlu.',
      },
      {
        id: 'C',
        label: 'Terima dana untuk memastikan kemenangan, dengan niat mengingkari janjinya setelah resmi dilantik.',
        konsekuensi: 'Anda menang mudah dalam voting, namun Anda disandera ancaman rekaman bocor dan kehilangan kehormatan di hadapan nurani.',
        dampakEtika: -10,
        dampakStabilitas: -8,
        dampakWibawa: -9,
        penjelasanFalsafah: 'Melanggar "Ora Cidra Ing Janji" dan jatuh ke dalam jerat Machiavellian pragmatis yang akan menghancurkan karir kepemimpinan Anda kelak.',
      },
    ],
  },
  {
    id: 'dilema-2',
    judul: 'Resolusi Sengketa Anggaran 20% Pendidikan',
    pilar: 'Politik Pendidikan',
    latarBelakang: 'Pemerintah daerah berencana memotong alokasi tunjangan guru honorer untuk dialihkan ke pembangunan tugu seremonial kota. Ketua DPRD meminta kompromi agar Anda sebagai kepala dinas pendidikan menandatangani pengalihan tersebut.',
    babRujukan: 151,
    pertanyaan: 'Sikap apa yang wajib Anda ambil dalam rapat paripurna?',
    pilihan: [
      {
        id: 'A',
        label: 'Pertahankan anggaran guru dengan menyajikan audit kebutuhan hidup layak guru di depan forum terbuka dewan.',
        konsekuensi: 'Pimpinan dewan terpojok oleh sorotan media massa dan terpaksa membatalkan pemotongan anggaran guru.',
        dampakEtika: 10,
        dampakStabilitas: 5,
        dampakWibawa: 10,
        penjelasanFalsafah: 'Prinsip "Sadumuk Bathuk Sanyari Bumi" membela hak kaum mustadh’afin dengan basis nalar dan keberanian ksatria.',
      },
      {
        id: 'B',
        label: 'Sepakati pemotongan separuh agar hubungan eksekutif-legislatif tetap mulus.',
        konsekuensi: 'Para guru honorer melakukan mogok mengajar masal dan kualitas sekolah negeri merosot tajam.',
        dampakEtika: -7,
        dampakStabilitas: -5,
        dampakWibawa: -8,
        penjelasanFalsafah: 'Bentuk kompromi yang mengkhianati amanah guru demi kenyamanan birokratis semu.',
      },
      {
        id: 'C',
        label: 'Alihkan anggaran seremonial dinas Anda sendiri untuk menutupi proyek tugu tanpa mengurangi sepeser pun hak guru.',
        konsekuensi: 'Program perjalanan dinas pejabat terpangkas, namun martabat guru dan tatanan politik tetap terjaga.',
        dampakEtika: 9,
        dampakStabilitas: 8,
        dampakWibawa: 9,
        penjelasanFalsafah: 'Mencerminkan "Sepi Ing Pamrih Rame Ing Gawe" dan watak Bhumi yang rela berkorban demi keselamatan rakyat jelata.',
      },
    ],
  },
  {
    id: 'dilema-3',
    judul: 'Diplomasi Faksionalisme Kampus yang Nyaris Pecah',
    pilar: 'Seni Negosiasi Taktis',
    latarBelakang: 'Dua ormas mahasiswa besar saling serang di lobi auditorium universitas akibat perbedaan pilihan politik nasional. Aparat keamanan berniat menyerbu masuk dengan gas air mata yang dapat mencoreng nama universitas selamanya.',
    babRujukan: 54,
    pertanyaan: 'Sebagai pimpinan akademi, langkah taktis diplomasi apa yang Anda tempuh?',
    pilihan: [
      {
        id: 'A',
        label: 'Berdiri seorang diri tanpa pengawal di antara kedua kelompok mahasiswa dan mengajak para ketua duduk di pelataran bundar.',
        konsekuensi: 'Kharisma dan keteladanan Anda meredakan ketegangan; kedua belah pihak bersedia menahan diri dan aparat mundur.',
        dampakEtika: 10,
        dampakStabilitas: 9,
        dampakWibawa: 10,
        penjelasanFalsafah: 'Penerapan murni doktrin "Ngluruk Tanpa Bala" dan watak Candra yang mendinginkan api amarah dengan keteladanan nyata.',
      },
      {
        id: 'B',
        label: 'Izinkan aparat masuk membubarkan paksa dan skors seluruh mahasiswa yang terlibat.',
        konsekuensi: 'Auditorium hancur, beberapa mahasiswa terluka parah, dan terjadi aksi boikot perkuliahan berbulan-bulan.',
        dampakEtika: -6,
        dampakStabilitas: -8,
        dampakWibawa: -7,
        penjelasanFalsafah: 'Kegagalan kepemimpinan dialogis yang mengandalkan represi aparat di lingkungan pencetak generasi bangsa.',
      },
    ],
  },
];
