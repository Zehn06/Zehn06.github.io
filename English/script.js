// ========================================
// Ankara İngilizce Kursları - KAPSAMLI VERİ
// 21+ Kurum - Ocak 2026 Güncel
// ========================================

const institutions = [
    // ===== BUTIK PREMIUM =====
    {
        id: 1,
        name: "Candelas Education",
        score: 87,
        category: "butik",
        tags: ["Konuşma Kulübü", "Native", "Hibrit", "VIP"],
        location: "Çankaya",
        classSize: "Max 10 / VIP 1-4",
        price: "2.000-3.000 TL/ay",
        priceCategory: "mid",
        experience: "19+ yıl",
        highlight: "Haftada 2x50dk konuşma kulübü • Native öğretmenler",
        methodology: "Task-based, Content-Based Instruction",
        speakingRatio: "%80-90",
        pros: [
            "Native öğretmenler, küçük sınıflar (max 10)",
            "Haftada 2 konuşma oturumu (50'şer dk)",
            "Esnek aylık ödeme, sözleşme baskısı yok",
            "MyECO online platform desteği",
            "VIP birebir özel ders seçeneği",
            "Yurt dışı eğitim danışmanlığı",
            "Olumlu kullanıcı yorumları, aile ortamı"
        ],
        cons: [
            "Fiyatlar bazılarına yüksek gelebilir",
            "Fiziksel şube sayısı sınırlı"
        ],
        reviews: {
            positive: ["Aile ortamı, destekleyici öğretmenler", "Esnek programlar sayesinde hızlı ilerleme"],
            negative: []
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "candelasegitim.com",
        scoring: { konusma: 36, antiTraditional: 22, sinifOrtami: 17, memnuniyet: 12 }
    },
    {
        id: 2,
        name: "Just For Speaking",
        score: 85,
        category: "butik",
        tags: ["Max 3 Kişi", "%100 Konuşma", "Gramersiz"],
        location: "Kızılay, Çankaya",
        classSize: "Max 3",
        price: "~4.500 TL/ay",
        priceCategory: "premium",
        experience: "10+ yıl",
        highlight: "Max 3 kişi • %100 konuşma odaklı • Neredeyse sıfır gramer",
        methodology: "Direct Method, No-Grammar Approach",
        speakingRatio: "%90-100",
        pros: [
            "En küçük sınıf mevcudu (3 kişi)",
            "Tamamı konuşma aktivitesi - gramer anlatılmaz",
            "Oyunlar, tartışmalar, role-play odaklı",
            "Kişisel yaklaşım, hızlı ilerleme",
            "Ücretsiz kur tekrar garantisi",
            "Merkezi konum (Kızılay)"
        ],
        cons: [
            "Fiyatlar yüksek",
            "Kısıtlı kontenjan, bekletme listesi olabilir",
            "Gramer çalışmak isteyenler için uygun değil"
        ],
        reviews: {
            positive: ["Anlıyorum ama konuşamıyorum sorunu çözüldü", "Küçük gruplar sayesinde hızla ilerleme"],
            negative: ["Fiyatlar yüksek"]
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "justforspeaking.com",
        scoring: { konusma: 38, antiTraditional: 21, sinifOrtami: 18, memnuniyet: 8 }
    },
    {
        id: 3,
        name: "Sara Dil / Polyglot",
        score: 83,
        category: "butik",
        tags: ["Polyglot Sistemi", "%100 Speaking", "Online/Offline"],
        location: "Ankara",
        classSize: "Küçük grup / Birebir",
        price: "~3.500 TL/ay",
        priceCategory: "mid",
        experience: "Butik yaklaşım",
        highlight: "Polyglot yöntemi • İlk günden 10 kelimeyle konuşma",
        methodology: "Polyglot System, Inductive Grammar",
        speakingRatio: "%90-100",
        pros: [
            "100% konuşma odaklı Polyglot yöntemi",
            "İlk günden itibaren konuşmaya başlama",
            "Gerçek hayat senaryoları",
            "Online ve yüz yüze seçenekler",
            "Esnek programlar"
        ],
        cons: [
            "Yüksek ücretler",
            "Kontenjan azlığı",
            "Yazma/dinleme pratiği sınırlı"
        ],
        reviews: {
            positive: ["Hızlı ilerleme ve özgüven artışı"],
            negative: ["Yer bulmak zor olabiliyor"]
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "saradil.com",
        scoring: { konusma: 37, antiTraditional: 21, sinifOrtami: 16, memnuniyet: 9 }
    },
    {
        id: 4,
        name: "Capital English",
        score: 81,
        category: "butik",
        tags: ["Native ABD/UK", "5 Kişi", "Speaking Club"],
        location: "Çukurambar, Çankaya",
        classSize: "5 kişi",
        price: "~4.000 TL/ay",
        priceCategory: "premium",
        experience: "Deneyimli kadro",
        highlight: "'Sadece Akıcı Konuş' • Amerikalı/İngiliz öğretmenler",
        methodology: "Communicative, Visual/Interactive",
        speakingRatio: "%70-80",
        pros: [
            "Native Amerikan/İngiliz öğretmenler",
            "'Speak Fluently Only' yaklaşımı",
            "Görsel ve interaktif eğitim",
            "5 kişilik küçük sınıflar",
            "Haftalık speaking club seansları",
            "8-12 saatlik yoğun programlar"
        ],
        cons: [
            "Fiyatlar yüksek",
            "Sınırlı kontenjan"
        ],
        reviews: {
            positive: ["Öğretmenlerin ilgisi harika", "Konuşma fırsatları bol"],
            negative: []
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "capitalenglish.com.tr",
        scoring: { konusma: 34, antiTraditional: 20, sinifOrtami: 17, memnuniyet: 10 }
    },
    {
        id: 5,
        name: "Berlitz Ankara",
        score: 74,
        category: "butik",
        tags: ["Berlitz Metodu", "140+ Yıl", "Native"],
        location: "Ankara Merkez",
        classSize: "6 kişi",
        price: "Premium",
        priceCategory: "premium",
        experience: "140+ yıl (dünya)",
        highlight: "Berlitz Metodu • Immersion • Native eğitmenler",
        methodology: "Berlitz Method (Immersion)",
        speakingRatio: "%60-70",
        pros: [
            "140+ yıllık dünya deneyimi",
            "Kanıtlanmış Berlitz Metodu",
            "6 kişilik küçük sınıflar",
            "Native eğitmenler",
            "Berlitz Flex online seçenek",
            "Global sertifika"
        ],
        cons: [
            "Yüksek fiyatlar",
            "Sınırlı şube",
            "Akşam kursları kalabalık olabiliyor"
        ],
        reviews: {
            positive: ["Ankara'nın en iyisi!", "Dil korkumu yendim"],
            negative: ["Fiyatlar çok yüksek"]
        },
        complaints: { sikayetvar: "Az", risk: "Düşük" },
        website: "berlitz-ankara.com",
        scoring: { konusma: 30, antiTraditional: 20, sinifOrtami: 15, memnuniyet: 9 }
    },
    {
        id: 6,
        name: "Bilişsel Akademi",
        score: 84,
        category: "butik",
        tags: ["Max 5 Kişi", "Koçluk", "1+1 Kampanya"],
        location: "Yaşamkent, Ankara",
        classSize: "Max 5 / Birebir",
        price: "~2.000 TL/ay",
        priceCategory: "budget",
        experience: "Butik yaklaşım",
        highlight: "Max 5 kişi • Kişisel koçluk • Uygun fiyat",
        methodology: "Task-based, Personalized Coaching",
        speakingRatio: "%70-80",
        pros: [
            "Maksimum 5 kişilik sınıflar",
            "Kişiselleştirilmiş koçluk",
            "1+1 kampanyası (ekonomik)",
            "Günlük, profesyonel ve akademik İngilizce",
            "Esnek online/yüz yüze seçenekler"
        ],
        cons: [
            "Şube sayısı sınırlı"
        ],
        reviews: {
            positive: ["Koçların ilgisi harika", "Esneklik çok iyi"],
            negative: []
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "ankaraingilizcekursu.com",
        scoring: { konusma: 34, antiTraditional: 20, sinifOrtami: 18, memnuniyet: 12 }
    },

    // ===== ZİNCİR PREMIUM =====
    {
        id: 7,
        name: "Wall Street English",
        score: 86,
        category: "zincir",
        tags: ["Blended Learning", "AI Teknoloji", "Max 4 Kişi"],
        location: "Kızılay, Çayyolu, Çukurambar",
        classSize: "Max 3-4 (Encounter)",
        price: "24.000-48.000 TL/yıl",
        priceCategory: "premium",
        experience: "Dünya geneli",
        highlight: "Blended Learning • Ses tanıma AI • 3-4 kişi Encounter",
        methodology: "Blended Learning, Digital + Face-to-Face",
        speakingRatio: "%70-80",
        pros: [
            "Dünya çapında marka, standart kalite",
            "Ses tanıma teknolojisi ve Conversation AI",
            "Max 3-4 kişilik Encounter dersleri",
            "Native öğretmenler",
            "Sosyal kulüpler, English-only ortam",
            "Kişisel koç sistemi"
        ],
        cons: [
            "Çok yüksek fiyatlar",
            "Katı sözleşme koşulları, senet baskısı",
            "İptal/iade süreçleri çok zor",
            "Self-study disiplini gerektirir"
        ],
        reviews: {
            positive: ["Eğitim, disiplin ve sosyal ortam kusursuz", "Hızlı ilerleme sağlıyorum"],
            negative: ["Senet takibi ve avukat tehditleri", "İptal edemiyorum"]
        },
        complaints: { sikayetvar: "Yüksek", risk: "Yüksek (Sözleşme)" },
        website: "wse.com.tr",
        scoring: { konusma: 35, antiTraditional: 22, sinifOrtami: 18, memnuniyet: 11 }
    },
    {
        id: 8,
        name: "Active English",
        score: 78,
        category: "zincir",
        tags: ["Konuşma Garantisi", "Ömür Boyu Club", "Geniş Şube"],
        location: "Kızılay, Batıkent, Çayyolu, vb.",
        classSize: "10-16 kişi",
        price: "~3.500 TL/ay",
        priceCategory: "mid",
        experience: "Türkiye geneli",
        highlight: "Konuşma garantili • Ömür boyu speaking club • Active Pass",
        methodology: "Standard + Speaking Clubs",
        speakingRatio: "%40-50",
        pros: [
            "Konuşma garantili program",
            "Ömür boyu conversation club üyeliği",
            "Native eğitmenler (speaking club)",
            "Gerçek hayat senaryoları",
            "Active Pass ek hakları",
            "Geniş şube ağı"
        ],
        cons: [
            "Yüksek fiyatlar",
            "Sınıf mevcudu beklentiden fazla olabiliyor",
            "Sınıf açılmaması sorunları",
            "Para iadesi zorlukları",
            "Senet uygulaması"
        ],
        reviews: {
            positive: ["Hocalar ve kulüpler güzel", "Sosyal ortam motivasyon artırıyor"],
            negative: ["Kızılay şubesinde ilgisizlik", "Muhatap bulamıyorum"]
        },
        complaints: { sikayetvar: "Orta-Yüksek", risk: "Orta" },
        website: "active-languages.com",
        scoring: { konusma: 33, antiTraditional: 20, sinifOrtami: 16, memnuniyet: 9 }
    },

    // ===== ÜNİVERSİTE/DERNEK =====
    {
        id: 9,
        name: "TAD Ankara (Cinnah)",
        score: 79,
        category: "universite",
        tags: ["Amerikalı Öğretmen", "B2+", "EFL Cafe"],
        location: "Cinnah Caddesi, Çankaya",
        classSize: "Max 10",
        price: "Uygun (48 saat)",
        priceCategory: "budget",
        experience: "1951'den beri (75 yıl)",
        highlight: "Amerikalı native öğretmen • Ücretsiz EFL Cafe • Güvenilir",
        methodology: "Academic, Informal Speaking",
        speakingRatio: "%40-60",
        pros: [
            "Native Amerikalı öğretmen garantisi",
            "Max 10 kişilik sınıflar",
            "Ücretsiz online EFL Cafe konuşma seansları",
            "Kurumsal güvenilirlik (75 yıl)",
            "Senet/sözleşme baskısı yok",
            "Kültürel aktiviteler"
        ],
        cons: [
            "B2+ seviye şartı (başlangıç için uygun değil)",
            "Genel İngilizce isteyenler için sınırlı"
        ],
        reviews: {
            positive: ["Özgüvenim arttı", "Amerikalı öğretmen çok iyi"],
            negative: []
        },
        complaints: { sikayetvar: 0, risk: "Çok Düşük" },
        website: "taa-ankara.org.tr",
        scoring: { konusma: 32, antiTraditional: 18, sinifOrtami: 17, memnuniyet: 12 }
    },
    {
        id: 10,
        name: "TÖMER (Ankara Üni.)",
        score: 64,
        category: "universite",
        tags: ["Akademik", "CEFR Uyumlu", "Dengeli Beceri"],
        location: "Ankara Üniversitesi Kampüsü",
        classSize: "12-15 kişi",
        price: "Orta",
        priceCategory: "mid",
        experience: "Köklü üniversite",
        highlight: "Akademik kalite • CEFR seviyeleri • Dengeli 4 beceri",
        methodology: "Academic, Balanced Skills",
        speakingRatio: "%30-40",
        pros: [
            "Köklü kurum, üniversite güvencesi",
            "CEFR uyumlu seviyeler (A1-C1)",
            "Dengeli 4 beceri programı",
            "Üniversite sertifikası prestiji"
        ],
        cons: [
            "Konuşma pratiği sınırlı",
            "Akademik/gramer ağırlıklı",
            "Büyük sınıflar",
            "Esnek olmayan dönemlik programlar"
        ],
        reviews: {
            positive: ["Akademik kalite iyi"],
            negative: ["Yavaş ilerleme", "Konuşma az"]
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "tomer.ankara.edu.tr",
        scoring: { konusma: 24, antiTraditional: 18, sinifOrtami: 15, memnuniyet: 7 }
    },
    {
        id: 11,
        name: "ODTÜ SEM",
        score: 70,
        category: "universite",
        tags: ["ODTÜ Prestiji", "Akademik", "CEFR"],
        location: "ODTÜ Kampüsü",
        classSize: "12-15 kişi",
        price: "34-69K TL/dönem",
        priceCategory: "mid",
        experience: "ODTÜ markası",
        highlight: "ODTÜ prestiji • Akademik kadro • Yoğun programlar",
        methodology: "Academic, Intensive",
        speakingRatio: "%30-40",
        pros: [
            "ODTÜ markası ve prestiji",
            "Deneyimli akademik kadro",
            "Yoğun program seçenekleri",
            "CV'de prestijli"
        ],
        cons: [
            "Konuşma pratiği sınırlı",
            "Akademik ağırlıklı",
            "Katı takvim, esneklik az"
        ],
        reviews: { positive: [], negative: [] },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "sem.metu.edu.tr",
        scoring: { konusma: 26, antiTraditional: 18, sinifOrtami: 14, memnuniyet: 12 }
    },

    // ===== SPEAKING CLUBS =====
    {
        id: 12,
        name: "MeetSpeakUp",
        score: 86,
        category: "speaking",
        tags: ["Cafe Ortamı", "Native", "Sosyal", "Ekonomik"],
        location: "Kızılay, Bahçelievler, Çayyolu",
        classSize: "6-12 kişi",
        price: "Düşük abonelik",
        priceCategory: "budget",
        experience: "Topluluk bazlı",
        highlight: "Cafe'lerde native speaker ile sosyal pratik",
        methodology: "Social Learning, Informal",
        speakingRatio: "%90-100",
        pros: [
            "Gerçek sosyal ortamda pratik",
            "Native öğretmenlerle oyun ve aktiviteler",
            "Çok ekonomik",
            "Esnek katılım",
            "Eğlenceli ve motive edici"
        ],
        cons: [
            "Yapılandırılmış müfredat yok",
            "İlerleme takibi sınırlı",
            "Program istikrarsız olabilir",
            "Gramer/yazma desteği yok"
        ],
        reviews: {
            positive: ["Eğlenceli ve doğal ortam", "Native öğretmenler enerjik"],
            negative: ["Buluşma saatleri uyumsuz olabiliyor"]
        },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "meetspeakup.com",
        scoring: { konusma: 35, antiTraditional: 23, sinifOrtami: 17, memnuniyet: 11 }
    },
    {
        id: 13,
        name: "Seçkin Esen Speaking Club",
        score: 80,
        category: "speaking",
        tags: ["2-5 Kişi", "Native", "Seviye Bazlı"],
        location: "Söğütözü",
        classSize: "2-5 kişi",
        price: "Ekonomik",
        priceCategory: "budget",
        experience: "Speaking Club formatı",
        highlight: "Çok küçük gruplar (2-5) • Yabancı öğretmen",
        methodology: "Speaking-focused, Level-based",
        speakingRatio: "%80-90",
        pros: [
            "Çok küçük gruplar (2-5 kişi)",
            "Yabancı İngilizce öğretmenler",
            "Seviyeye göre grup oluşturma",
            "Düzenli yeni grup açma"
        ],
        cons: [],
        reviews: { positive: [], negative: [] },
        complaints: { sikayetvar: 0, risk: "Düşük" },
        website: "seckinesen.com",
        scoring: { konusma: 34, antiTraditional: 22, sinifOrtami: 16, memnuniyet: 8 }
    },

    // ===== ZİNCİR STANDART =====
    {
        id: 14,
        name: "American LIFE",
        score: 73,
        category: "zincir",
        tags: ["Ömür Boyu Plus More", "Guided Practice", "50+ Şube"],
        location: "Çankaya, Eryaman, Ümitköy",
        classSize: "8-12 kişi",
        price: "Kampanyalı",
        priceCategory: "mid",
        experience: "Türkiye geneli 50+",
        highlight: "Ömür boyu konuşma kulübü • Rehberli pratik • Esnek",
        methodology: "Guided Practice, Flexible",
        speakingRatio: "%40-50",
        pros: [
            "Ömür boyu Plus More (konuşma kulübü) hakkı",
            "Sınırsız Guided Practice seansları",
            "Yaygın şube ağı (50+)",
            "Sosyal etkinlikler",
            "Esnek rezervasyon sistemi"
        ],
        cons: [
            "Şubeler arası kalite farkları",
            "Bazı programlar gramer odaklı",
            "İdari aksaklıklar yaşanabiliyor"
        ],
        reviews: {
            positive: ["Profesyonel personel", "Konuşma odaklı yaklaşım güzel"],
            negative: ["Şube bazlı sorunlar var"]
        },
        complaints: { sikayetvar: "Orta", risk: "Orta" },
        website: "americanlife.com.tr",
        scoring: { konusma: 30, antiTraditional: 18, sinifOrtami: 16, memnuniyet: 9 }
    },
    {
        id: 15,
        name: "American Culture",
        score: 66,
        category: "zincir",
        tags: ["Konuşarak Öğren", "Geniş Şube", "CEFR"],
        location: "Ümitköy, Kızılay, Çankaya",
        classSize: "15-20 kişi (gerçek)",
        price: "Orta",
        priceCategory: "mid",
        experience: "Türkiye geneli",
        highlight: "Konuşarak öğren sloganı (pratikte farklı)",
        methodology: "Standard (Reklamdan farklı olabilir)",
        speakingRatio: "%30-40",
        pros: [
            "Geniş şube ağı",
            "Conversation kulüpleri",
            "Uluslararası sertifika"
        ],
        cons: [
            "Şube bazlı kalite farklılıkları büyük",
            "Kalabalık sınıflar (15-20 kişi olabiliyor)",
            "Öğretmen sınıfı domine edebiliyor",
            "Gramer odaklı alıştırmalar",
            "Şikayetvar'da iade sorunları"
        ],
        reviews: {
            positive: ["Bazı öğretmenler ilgili"],
            negative: ["Yanlış seviye yerleştirme", "Güvenlik sorunları (Ümitköy)"]
        },
        complaints: { sikayetvar: "Orta", risk: "Orta" },
        website: "amerikankultur.com",
        scoring: { konusma: 27, antiTraditional: 16, sinifOrtami: 14, memnuniyet: 9 }
    },
    {
        id: 16,
        name: "English Time",
        score: 65,
        category: "zincir",
        tags: ["CEFR Uyumlu", "Uygun Fiyat", "Geniş Şube"],
        location: "Sincan, Elvankent, Ümitköy",
        classSize: "10-15 kişi",
        price: "Uygun",
        priceCategory: "budget",
        experience: "Türkiye geneli",
        highlight: "CEFR uyumlu • Yaygın şube • Ekonomik",
        methodology: "Standard with Speaking/Listening",
        speakingRatio: "%30-40",
        pros: [
            "CEFR uyumlu program",
            "Uygun fiyat seçenekleri",
            "Conversation ve listening vurgusu"
        ],
        cons: [
            "Kalabalık sınıflar",
            "Şubelerde kalite tutarsızlığı",
            "Sınırlı konuşma saati",
            "Test odaklı dersler olabiliyor"
        ],
        reviews: {
            positive: ["Öğretmenler ilgili"],
            negative: ["Sadece reklam", "Test odaklı"]
        },
        complaints: { sikayetvar: "Orta", risk: "Orta" },
        website: "englishtime.com",
        scoring: { konusma: 26, antiTraditional: 17, sinifOrtami: 15, memnuniyet: 7 }
    },
    {
        id: 17,
        name: "İngiliz Kültür (English Culture)",
        score: 72,
        category: "zincir",
        tags: ["AI Platform", "Avrupa Portfolyo", "Speaking Club"],
        location: "Ankara şubeleri",
        classSize: "~12 kişi",
        price: "Orta",
        priceCategory: "mid",
        experience: "Türkiye geneli",
        highlight: "AI destekli platformlar • Avrupa Dil Portfolyosu",
        methodology: "Tech-integrated, Communicative",
        speakingRatio: "%40-50",
        pros: [
            "Avrupa Dil Portfolyosu uyumlu",
            "AI destekli platformlar",
            "Conversation club'lar",
            "Modern sınıflar"
        ],
        cons: [
            "Yönetimsel sorunlar",
            "Şube bazlı kalite farkları",
            "Bazı programlarda gramer ağırlığı",
            "Sınıf açılmaması şikayetleri"
        ],
        reviews: {
            positive: ["Teknoloji entegrasyonu iyi"],
            negative: ["Sertifika gecikmesi", "İade sorunları"]
        },
        complaints: { sikayetvar: "Orta", risk: "Orta" },
        website: "ingilizkulturdernegi.com",
        scoring: { konusma: 28, antiTraditional: 20, sinifOrtami: 16, memnuniyet: 8 }
    },

    // ===== TAVSİYE EDİLMEYENLER =====
    {
        id: 18,
        name: "Perfect English",
        score: 28,
        category: "zincir",
        tags: ["⚠️ DİKKAT", "Şikayetler Çok", "Gramer Ağırlıklı"],
        location: "Ankara şubeleri",
        classSize: "15-20+ kişi",
        price: "Düşük (tuzaklı)",
        priceCategory: "budget",
        experience: "Tartışmalı",
        highlight: "⚠️ ÇOK SAYIDA ŞİKAYET • Sözleşme tuzakları • Gramer odaklı",
        methodology: "Grammar-heavy, Test-focused",
        speakingRatio: "%10-20",
        pros: [
            "Düşük fiyat (ama tuzaklı)"
        ],
        cons: [
            "Çok sayıda Şikayetvar şikayeti",
            "Konuşma pratiği yok denecek kadar az",
            "Kalabalık sınıflar",
            "Gramer ağırlıklı müfredat",
            "Agresif pazarlama ve sözleşme tuzakları",
            "İade süreçleri imkansız",
            "Dolandırıcılık iddiaları"
        ],
        reviews: {
            positive: [],
            negative: ["Kitap okuyup alıştırma yapmaktan ibaret", "Kesinlikle tavsiye etmem", "Dolandırıldım"]
        },
        complaints: { sikayetvar: "Çok Yüksek", risk: "ÇOK YÜKSEK" },
        website: "perfectenglish.com.tr",
        scoring: { konusma: 10, antiTraditional: 8, sinifOrtami: 8, memnuniyet: 2 }
    },
    {
        id: 19,
        name: "Akın Dil",
        score: 47,
        category: "zincir",
        tags: ["Sınav Odaklı", "YDS/YÖKDİL", "Online"],
        location: "Ankara şubeleri",
        classSize: "Kalabalık",
        price: "Yüksek",
        priceCategory: "mid",
        experience: "Türkiye geneli",
        highlight: "Sınav hazırlığı ana odak • Konuşma dersleri yetersiz",
        methodology: "Exam-focused, Traditional",
        speakingRatio: "%10-20",
        pros: [
            "Sınav hazırlığında tecrübeli",
            "Geniş online materyal"
        ],
        cons: [
            "Konuşma odaklı değil",
            "Kalabalık sınıflar",
            "Gramer ve test çözme ağırlıklı",
            "Sınıf açılmaması sorunları",
            "Yüksek ücretler"
        ],
        reviews: {
            positive: ["Öğretmenler bilgili"],
            negative: ["Konuşma dersleri açılmadı", "Para iadesi alamadım"]
        },
        complaints: { sikayetvar: "Yüksek", risk: "Yüksek" },
        website: "akindil.com.tr",
        scoring: { konusma: 18, antiTraditional: 12, sinifOrtami: 12, memnuniyet: 5 }
    },
    {
        id: 20,
        name: "TAC Yabancı Dil / Çağrı Dil",
        score: 60,
        category: "zincir",
        tags: ["Karışık Yorumlar", "Sözleşme Sorunları"],
        location: "Kızılay",
        classSize: "15+ kişi",
        price: "Orta",
        priceCategory: "mid",
        experience: "Lokal",
        highlight: "Karışık yorumlar • Sözleşme/iade sorunları",
        methodology: "Mixed (Vaat vs Gerçek farklı)",
        speakingRatio: "%30-40",
        pros: [
            "Geniş program çeşitliliği",
            "Bazı öğretmenler yüksek nitelikli"
        ],
        cons: [
            "Şikayetvar'da sözleşme ve iade sorunları",
            "Kalabalık sınıflar (15+ kişi)",
            "Derslerin Türkçe geçtiği şikayetleri",
            "Öğretmen değişiklikleri"
        ],
        reviews: {
            positive: ["Bazı öğretmenler iyi"],
            negative: ["Sözleşme hileleri", "Para iadesi alamadım"]
        },
        complaints: { sikayetvar: "Yüksek", risk: "Yüksek" },
        website: "tacyabancidil.com",
        scoring: { konusma: 25, antiTraditional: 15, sinifOrtami: 14, memnuniyet: 6 }
    },
    {
        id: 21,
        name: "Ankara Dil Akademisi",
        score: 46,
        category: "zincir",
        tags: ["Sınav Odaklı", "YDS/YÖKDİL", "Akademik"],
        location: "Ankara",
        classSize: "Kalabalık",
        price: "Orta",
        priceCategory: "mid",
        experience: "Lokal",
        highlight: "YDS/YÖKDİL hazırlık • Konuşma sınırlı",
        methodology: "Exam-focused, Traditional",
        speakingRatio: "%10-20",
        pros: [
            "YDS/YÖKDİL başarısına yönelik"
        ],
        cons: [
            "Konuşma odaklı değil",
            "Geleneksel sınav hazırlığı",
            "Esnek olmayan programlar"
        ],
        reviews: { positive: [], negative: [] },
        complaints: { sikayetvar: 0, risk: "Orta" },
        website: "ankaradilakademisi.com",
        scoring: { konusma: 18, antiTraditional: 10, sinifOrtami: 12, memnuniyet: 6 }
    }
];

// Karşılaştırma verileri
const comparisons = {
    konusma: [
        { name: "Just For Speaking", score: "85/100", desc: "Max 3 kişi, %100 konuşma, gramer yok" },
        { name: "Candelas Education", score: "87/100", desc: "Haftada 2x50dk konuşma kulübü, native" },
        { name: "MeetSpeakUp", score: "86/100", desc: "Cafe'lerde native speaker ile sosyal pratik" },
        { name: "Wall Street English", score: "86/100", desc: "3-4 kişi Encounter, AI destekli" },
        { name: "Sara Dil / Polyglot", score: "83/100", desc: "Polyglot metodu, ilk günden konuşma" }
    ],
    memnuniyet: [
        { name: "Candelas Education", score: "12/15", desc: "Aile ortamı, esnek program, şikayet yok" },
        { name: "TAD Ankara (Cinnah)", score: "12/15", desc: "75 yıllık güven, şikayet yok" },
        { name: "Bilişsel Akademi", score: "12/15", desc: "Kişisel koçluk, esnek" },
        { name: "ODTÜ SEM", score: "12/15", desc: "Prestij ve güvenilirlik" },
        { name: "MeetSpeakUp", score: "11/15", desc: "Eğlenceli sosyal ortam" }
    ],
    fiyat: [
        { name: "MeetSpeakUp", score: "Çok Düşük", desc: "Sosyal pratik, ekonomik" },
        { name: "TAD Ankara", score: "Uygun", desc: "48 saat + EFL Cafe ücretsiz" },
        { name: "Bilişsel Akademi", score: "~2.000 TL", desc: "1+1 kampanya, max 5 kişi" },
        { name: "Candelas", score: "2-3.000 TL", desc: "Aylık ödeme, esnek" },
        { name: "English Time", score: "Uygun", desc: "Ekonomik (kalite tutarsız)" }
    ],
    risk: [
        { name: "Perfect English", score: "⚠️ ÇOK YÜKSEK", desc: "Çok sayıda şikayet, sözleşme tuzakları" },
        { name: "Wall Street English", score: "⚠️ YÜKSEK", desc: "Sözleşme/senet, iptal imkansız" },
        { name: "Akın Dil", score: "⚠️ YÜKSEK", desc: "Sınıf açılmama, iade sorunları" },
        { name: "TAC Yabancı Dil", score: "⚠️ YÜKSEK", desc: "Sözleşme hileleri, Türkçe ders" },
        { name: "Active English", score: "⚠️ ORTA", desc: "Senet uygulaması, şube farkları" }
    ]
};

// Fiyat verileri (2025 projeksiyonları)
const pricingData = [
    { name: "Wall Street English", price: "24.000 - 48.000 TL", duration: "Yıllık paket", category: "premium", note: "Sözleşme dikkat!" },
    { name: "Just For Speaking", price: "~4.500 TL/ay", duration: "Kur bazlı", category: "premium", note: "Max 3 kişi" },
    { name: "Capital English", price: "~4.000 TL/ay", duration: "8-12 ay", category: "premium", note: "Native speaker" },
    { name: "Sara Dil / Polyglot", price: "~3.500 TL/ay", duration: "Kur bazlı", category: "mid", note: "Polyglot metodu" },
    { name: "Active English", price: "~3.500 TL/ay", duration: "Paket", category: "mid", note: "Senet dikkat!" },
    { name: "Candelas Education", price: "2.000 - 3.000 TL/ay", duration: "Aylık ödeme", category: "mid", note: "Esnek, güvenli" },
    { name: "Bilişsel Akademi", price: "~2.000 TL/ay", duration: "1+1 kampanya", category: "budget", note: "Ekonomik butik" },
    { name: "TAD Ankara", price: "Uygun (48 saat)", duration: "Program bazlı", category: "budget", note: "Güvenilir" },
    { name: "MeetSpeakUp", price: "Düşük abonelik", duration: "Aylık", category: "budget", note: "Sosyal pratik" },
    { name: "ODTÜ SEM", price: "34.000 - 69.000 TL", duration: "Dönemlik (16 hafta)", category: "mid", note: "Akademik" }
];

// Risk değerlendirmesi
const riskAssessment = {
    low: ["Candelas", "Just For Speaking", "TAD Ankara", "Bilişsel Akademi", "MeetSpeakUp", "Sara Dil", "Capital English", "ODTÜ SEM", "TÖMER", "Berlitz"],
    medium: ["American LIFE", "American Culture", "English Time", "İngiliz Kültür", "Active English"],
    high: ["Wall Street English", "Akın Dil", "TAC Yabancı Dil"],
    veryHigh: ["Perfect English"]
};

// DOM Elements
const institutionsGrid = document.getElementById('institutionsGrid');
const pricingTable = document.getElementById('pricingTable');
const comparisonContent = document.getElementById('comparisonContent');
const modal = document.getElementById('institutionModal');
const modalBody = document.getElementById('modalBody');

// Kurumları render et
function renderInstitutions(filter = 'all') {
    const sorted = [...institutions].sort((a, b) => b.score - a.score);
    const filtered = filter === 'all'
        ? sorted
        : sorted.filter(i => i.category === filter);

    institutionsGrid.innerHTML = filtered.map(inst => `
        <div class="institution-card ${inst.score < 50 ? 'warning-card' : ''}" data-id="${inst.id}" data-category="${inst.category}">
            <div class="card-header">
                <h3>${inst.name} 
                    <span class="card-badge ${getCategoryClass(inst.category)}">${getCategoryLabel(inst.category)}</span>
                </h3>
                <div class="card-score ${inst.score < 50 ? 'low-score' : ''}">${inst.score}/100</div>
            </div>
            <div class="card-body">
                <div class="card-tags">
                    ${inst.tags.map(tag => `<span class="tag ${tag.includes('⚠️') ? 'warning-tag' : ''}">${tag}</span>`).join('')}
                </div>
                <p class="highlight">${inst.highlight}</p>
                <div class="card-info">
                    <div class="info-item">
                        <span class="info-label">Sınıf</span>
                        <span class="info-value">${inst.classSize}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Konuşma</span>
                        <span class="info-value">${inst.speakingRatio}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Fiyat</span>
                        <span class="info-value">${inst.price}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Risk</span>
                        <span class="info-value risk-${getRiskLevel(inst.complaints.risk)}">${inst.complaints.risk}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="location">📍 ${inst.location}</span>
                    <span class="view-details">Detaylar →</span>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.institution-card').forEach(card => {
        card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
    });
}

function getCategoryClass(cat) {
    const classes = { butik: 'premium', zincir: 'chain', universite: 'academic', speaking: 'social' };
    return classes[cat] || '';
}

function getCategoryLabel(cat) {
    const labels = { butik: 'Butik', zincir: 'Zincir', universite: 'Akademik', speaking: 'Speaking Club' };
    return labels[cat] || cat;
}

function getRiskLevel(risk) {
    if (risk.includes('Çok') || risk.includes('ÇOK')) return 'veryhigh';
    if (risk.includes('Yüksek')) return 'high';
    if (risk.includes('Orta')) return 'medium';
    return 'low';
}

// Fiyat tablosu
function renderPricing() {
    pricingTable.innerHTML = pricingData.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.duration}</td>
            <td><span class="category-badge ${item.category}">${item.category === 'premium' ? 'Premium' : item.category === 'mid' ? 'Orta' : 'Ekonomik'}</span></td>
            <td class="note-cell">${item.note}</td>
        </tr>
    `).join('');
}

// Karşılaştırma
function renderComparison(tab = 'konusma') {
    const data = comparisons[tab];
    const isRisk = tab === 'risk';

    comparisonContent.innerHTML = `
        <ul class="comp-list">
            ${data.map((item, idx) => `
                <li class="comp-item ${isRisk ? 'risk-item' : ''}">
                    <div class="comp-rank ${isRisk ? 'risk-rank' : ''}">${isRisk ? '⚠️' : idx + 1}</div>
                    <div class="comp-info">
                        <div class="comp-name">${item.name}</div>
                        <div class="comp-desc">${item.desc}</div>
                    </div>
                    <div class="comp-score ${isRisk ? 'risk-score' : ''}">${item.score}</div>
                </li>
            `).join('')}
        </ul>
    `;
}

// Modal
function openModal(id) {
    const inst = institutions.find(i => i.id === id);
    if (!inst) return;

    const riskClass = getRiskLevel(inst.complaints.risk);

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${inst.name}</h2>
            <div class="modal-score ${inst.score < 50 ? 'low-score' : ''}">${inst.score}/100</div>
        </div>
        
        ${inst.complaints.risk.includes('Yüksek') || inst.complaints.risk.includes('YÜKSEK') ? `
        <div class="modal-warning">
            ⚠️ <strong>DİKKAT:</strong> Bu kurum hakkında çok sayıda şikayet bulunmaktadır. Sözleşme koşullarını dikkatle okuyun!
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h4>📍 Konum & İletişim</h4>
            <p>${inst.location} • <a href="https://${inst.website}" target="_blank" style="color: var(--primary)">${inst.website}</a></p>
        </div>
        
        <div class="modal-section">
            <h4>📊 Detaylar</h4>
            <div class="card-info" style="margin-top: 12px;">
                <div class="info-item"><span class="info-label">Sınıf</span><span class="info-value">${inst.classSize}</span></div>
                <div class="info-item"><span class="info-label">Metodoloji</span><span class="info-value">${inst.methodology}</span></div>
                <div class="info-item"><span class="info-label">Konuşma Oranı</span><span class="info-value">${inst.speakingRatio}</span></div>
                <div class="info-item"><span class="info-label">Fiyat</span><span class="info-value">${inst.price}</span></div>
                <div class="info-item"><span class="info-label">Deneyim</span><span class="info-value">${inst.experience}</span></div>
                <div class="info-item"><span class="info-label">Şikayet Riski</span><span class="info-value risk-${riskClass}">${inst.complaints.risk}</span></div>
            </div>
        </div>
        
        <div class="modal-section pros-cons">
            <div class="pros">
                <h4>✅ Güçlü Yanlar</h4>
                <ul>${inst.pros.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="cons">
                <h4>❌ Zayıf Yanlar / Riskler</h4>
                <ul>${inst.cons.length > 0 ? inst.cons.map(c => `<li>${c}</li>`).join('') : '<li>Belirgin zayıf yan bulunamadı</li>'}</ul>
            </div>
        </div>
        
        ${inst.reviews.positive.length > 0 || inst.reviews.negative.length > 0 ? `
        <div class="modal-section">
            <h4>💬 Öğrenci Yorumları</h4>
            ${inst.reviews.positive.map(r => `<div class="review-box positive"><p>"${r}"</p></div>`).join('')}
            ${inst.reviews.negative.map(r => `<div class="review-box negative"><p>"${r}"</p></div>`).join('')}
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h4>📈 Puan Dağılımı</h4>
            <div class="card-info" style="margin-top: 12px;">
                <div class="info-item"><span class="info-label">Konuşma Odaklılık</span><span class="info-value">${inst.scoring.konusma}/40</span></div>
                <div class="info-item"><span class="info-label">Geleneksel Olmama</span><span class="info-value">${inst.scoring.antiTraditional}/25</span></div>
                <div class="info-item"><span class="info-label">Sınıf Ortamı</span><span class="info-value">${inst.scoring.sinifOrtami}/20</span></div>
                <div class="info-item"><span class="info-label">Öğrenci Memnuniyeti</span><span class="info-value">${inst.scoring.memnuniyet}/15</span></div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal kapat
document.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderInstitutions(btn.dataset.filter);
    });
});

// Comparison tabs
document.querySelectorAll('.comp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.comp-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderComparison(tab.dataset.tab);
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderInstitutions();
    renderPricing();
    renderComparison('konusma');
});
