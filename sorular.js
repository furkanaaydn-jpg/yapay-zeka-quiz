window.SORULAR = [
  {
    soru: "Yapay zekâ dünyasında 'ajan' denince ne anlamalıyız?",
    siklar: [
      "Bilgileri gizlice toplayan bir casus yazılım",
      "Telefonla satış yapan müşteri temsilcisi",
      "Hedefi verince adımları kendisi atıp iş yapan yapay zekâ",
      "Bilgisayarı virüslerden koruyan program"
    ],
    dogru: 2,
    aciklama: "Ajan konuşmakla kalmaz, iş yapar: plan kurar, araç kullanır, sonucu kontrol eder. Casuslukla ilgisi yok.",
    konu: "ajan"
  },
  {
    soru: "Yapay zekâ bir rakamı çok emin ve akıcı bir dille söyledi. Bu, rakamın doğru olduğunu gösterir mi?",
    siklar: [
      "Evet, emin konuşuyorsa doğrudur",
      "Hayır, bilmediğinde de aynı özgüvenle yazabilir",
      "Yalnızca uzun cevaplarda yanılır",
      "Ücretli sürümler hiç yanılmaz"
    ],
    dogru: 1,
    aciklama: "Buna halüsinasyon denir: akıcılık doğruluk değildir. Kaynak isteyin, önemli rakamları kontrol edin.",
    konu: "halüsinasyon"
  },
  {
    soru: "Mutfak benzetmesinde API neydi?",
    siklar: [
      "Malzemelerin saklandığı kiler",
      "Yemeklerin yazılı olduğu tarif defteri",
      "Bulaşıkları yıkayan makine",
      "Siparişi uygulamadan mutfağa taşıyan garson"
    ],
    dogru: 3,
    aciklama: "API, başka uygulamaların siparişini modele taşıyan garsondur; API anahtarı da adınıza açılmış hesap kartı gibi gizli tutulur.",
    konu: "API"
  },
  {
    soru: "Dün bir sohbette anlattığınız bütçe rakamlarını, bugün açtığınız yeni sohbette yapay zekâ bilir mi?",
    siklar: [
      "Evet, her konuşmadan anında öğrenir",
      "Evet, ama yalnızca rakamları hatırlar",
      "Hayır; her yeni sohbet temiz tezgâhla başlar",
      "Yalnızca aynı gün içinde hatırlar"
    ],
    dogru: 2,
    aciklama: "Her sohbet temiz tezgâhla başlar; kalıcı olan yalnızca hafızaya, yani buzdolabındaki nota yazılanlardır.",
    konu: "hafıza"
  },
  {
    soru: "İyi bir 'sipariş fişi', yani iyi bir prompt hangi beş parçadan oluşur?",
    siklar: [
      "Rol, bağlam, görev, format, ton",
      "Selam, rica, görev, teşekkür, imza",
      "Başlık, giriş, gelişme, sonuç, kaynak",
      "Soru, cevap, tekrar, onay, kayıt"
    ],
    dogru: 0,
    aciklama: "Fiş ne kadar netse tabak o kadar iyi gelir: kim gibi düşüneceğini, neyi, hangi biçimde ve hangi tonda istediğinizi yazın.",
    konu: "prompt"
  },
  {
    soru: "Kişisel hesabınızla bir müşterinin TC kimlik numarasını yapay zekâya yapıştırmak doğru mu?",
    siklar: [
      "Doğru, yazdıklarımı kimse görmez",
      "Doğru, sonuna 'gizli' yazarsam sorun olmaz",
      "Ekran görüntüsü olarak yüklersem doğru olur",
      "Yanlış: bu kırmızı veri, tezgâha hiç konmaz"
    ],
    dogru: 3,
    aciklama: "Kişisel hesaplarda yazdıklarınız eğitimde kullanılabilir; TC kimlik no, şifre, maaş gibi kırmızı veriler hiç paylaşılmaz.",
    konu: "veri gizliliği"
  },
  {
    soru: "MCP, yapay zekânın Takvim, Drive ve Slack'e bağlanmasını neye benzetiyordu?",
    siklar: [
      "Her cihaza ayrı kablo çekmeye",
      "Her aletin takılabildiği standart bir prize",
      "Tek kullanımlık bir pile",
      "Uzun bir uzatma kablosuna"
    ],
    dogru: 1,
    aciklama: "MCP standart priz gibidir: araçlar aynı tip fişle takılır. Claude Code, Codex, Cursor ve Copilot destekler.",
    konu: "MCP"
  },
  {
    soru: "Muhasebeci Ayşe Excel'de Copilot kullanıyor, yazılımcı Can da Copilot ile kod yazıyor. Aynı ürün mü?",
    siklar: [
      "Hayır: Microsoft 365 Copilot ve GitHub Copilot ayrı ürünler",
      "Evet, dünyada tek bir Copilot var",
      "Evet, Can'ınki yalnızca eski sürüm",
      "Copilot yalnızca Word'de çalışır"
    ],
    dogru: 0,
    aciklama: "Microsoft 365 Copilot ofis uygulamalarında, GitHub Copilot yazılımcının kod editöründe çalışır: aynı ad, iki ayrı mutfak.",
    konu: "Copilot"
  },
  {
    soru: "Abonelik ile API arasındaki farkı en iyi hangi benzetme anlatır?",
    siklar: [
      "İkisi de sınırsız ve ücretsizdir",
      "Abonelik alakart, API açık büfe",
      "Abonelik açık büfe (limitli), API alakart (token başına fatura)",
      "Hiçbir fark yok, yalnızca adları değişik"
    ],
    dogru: 2,
    aciklama: "Abonelikte aylık ücretle limit içinde yersiniz; API'de her token ayrı ayrı faturaya yazılır.",
    konu: "abonelik ve API"
  },
  {
    soru: "Telefonda müdürünüzün sesi acil bir para transferi istiyor. En doğru hareket hangisi?",
    siklar: [
      "Ses birebir aynıysa hemen gönderirim",
      "Bildiğim numarasından geri arayıp doğrularım",
      "Görüntülü ararsa gönderirim",
      "Mesajla 'emin misiniz?' diye sorarım"
    ],
    dogru: 1,
    aciklama: "Birkaç saniyelik sesten klon yapılabiliyor, görüntü bile sahte olabilir; bildiğiniz numarayı geri arayarak doğrulayın.",
    konu: "deepfake"
  }
];

window.SONUC_UNVANLARI = [
  { minYuzde: 0, unvan: "Meraklı Müşteri", aciklama: "Menüye yeni göz attınız; bir sonraki siparişte mutfağın kapısı size sonuna kadar açık." },
  { minYuzde: 40, unvan: "Komi", aciklama: "Servise başladınız! Tabakları taşıyorsunuz; birkaç tarif daha ve tezgâh sizin." },
  { minYuzde: 60, unvan: "Yardımcı Aşçı", aciklama: "Kendi tezgâhınız var, işinizi biliyorsunuz. Baş şef size güveniyor." },
  { minYuzde: 80, unvan: "Sous-chef", aciklama: "Mutfağın sağ kolusunuz: sipariş fişini de tadımı da çok iyi biliyorsunuz." },
  { minYuzde: 100, unvan: "Baş Şef", aciklama: "Kusursuz servis! Ajanları yönetecek kişi sizsiniz, mutfak emrinize hazır." }
];

window.MUTFAK_ROLLERI = [
  {
    id: "bas-sef",
    ad: "Baş Şef",
    renk: "turuncu",
    kosul: { minOran: 0.8, maxSure: 9 },
    aciklama: "Hem hızlı hem isabetli: mutfağın temposunu siz belirliyorsunuz.",
    yz: "Yapay zekâdaki karşılığı: ana ajan. İşi böler, yardımcı aşçılara dağıtır, sonucu birleştirir."
  },
  {
    id: "tadimci",
    ad: "Tadımcı",
    renk: "kirmizi",
    kosul: { minOran: 0.8 },
    aciklama: "Acele etmeden, tadına bakarak karar veriyorsunuz; sizden yanlış tabak çıkmaz.",
    yz: "Yapay zekâdaki karşılığı: testçi ajan. Tabak onun onayı olmadan servise çıkmaz."
  },
  {
    id: "garson",
    ad: "Garson",
    renk: "mavi",
    kosul: { minOran: 0.5, maxSure: 7 },
    aciklama: "Siparişi kaptığınız gibi koşuyorsunuz; hız sizde, bir iki tabak yolda karışabilir.",
    yz: "Yapay zekâdaki karşılığı: API. Siparişi uygulamadan mutfağa hızla taşır."
  },
  {
    id: "yardimci-asci",
    ad: "Yardımcı Aşçı",
    renk: "yesil",
    kosul: { minOran: 0.5 },
    aciklama: "Kendi tezgâhınızda sakin ve özenli çalışıyorsunuz; ekibin güvenilir elisiniz.",
    yz: "Yapay zekâdaki karşılığı: yardımcı ajan. Kendi tezgâhında çalışır, yalnızca sonucu getirir."
  },
  {
    id: "ozguvenli-asci",
    ad: "Özgüvenli Aşçı",
    renk: "sari",
    kosul: { maxOran: 0.49, maxSure: 6 },
    aciklama: "Bilmediğiniz yemeği bile aynı özgüvenle yaptınız! Biraz daha tadına bakmak iyi gelebilir.",
    yz: "Yapay zekâdaki karşılığı: halüsinasyon. Akıcı ama her zaman doğru değil."
  },
  {
    id: "merakli-musteri",
    ad: "Meraklı Müşteri",
    renk: "camgobegi",
    kosul: {},
    aciklama: "Mutfağa yeni adım attınız; merak en iyi baharattır, bir tur daha deneyin.",
    yz: "Yapay zekâdaki karşılığı: prompt yazan kullanıcı. Sipariş fişini siz yazarsınız, mutfak sizin için çalışır."
  }
];
