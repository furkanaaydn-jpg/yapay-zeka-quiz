(() => {
  "use strict";

  const SURE = 20;
  const RENKLER = ["#AF3029", "#BC5215", "#AD8301", "#66800B", "#24837B", "#205EA6"];
  const sorular = Array.isArray(window.SORULAR) ? window.SORULAR : [];
  const unvanlar = Array.isArray(window.SONUC_UNVANLARI) ? window.SONUC_UNVANLARI : [];
  const roller = Array.isArray(window.MUTFAK_ROLLERI) && window.MUTFAK_ROLLERI.length ? window.MUTFAK_ROLLERI : null;
  const azHareket = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const $ = (secici) => document.querySelector(secici);

  const el = {
    giris: $("#ekran-giris"),
    soru: $("#ekran-soru"),
    sonuc: $("#ekran-sonuc"),
    basla: $("#basla-btn"),
    girisMetni: $("#giris-metni"),
    girisBilgi: $("#giris-bilgi"),
    sayac: $("#soru-sayac"),
    puan: $("#puan"),
    sureKutu: $("#sure-kutu"),
    sure: $("#sure"),
    rozet: $("#soru-rozeti"),
    konu: $("#soru-konu"),
    ilerleme: $("#ilerleme"),
    cevapAnahtari: $("#cevap-anahtari"),
    cevapListesi: $("#cevap-listesi"),
    soruMetni: $("#soru-metni"),
    siklar: $("#siklar"),
    geri: $("#geri-bildirim"),
    geriBaslik: $("#geri-bildirim-baslik"),
    aciklama: $("#aciklama"),
    sonraki: $("#sonraki-btn"),
    sonucPuan: $("#sonuc-puan"),
    sonucUnvan: $("#sonuc-unvan"),
    sonucAciklama: $("#sonuc-aciklama"),
    rolKarti: $("#rol-karti"),
    rolAdi: $("#rol-adi"),
    rolAciklama: $("#rol-aciklama"),
    rolYz: $("#rol-yz"),
    rolIstatistik: $("#rol-istatistik"),
    paylas: $("#paylas-btn"),
    tekrar: $("#tekrar-btn"),
    paylasMesaj: $("#paylas-mesaj"),
    konfeti: $("#konfeti")
  };

  const durum = {
    sira: 0,
    dogru: 0,
    sureler: [],
    cevaplar: [],
    cevaplandi: false,
    baslangic: 0,
    zamanlayici: 0,
    konfetiZamani: 0,
    rol: null
  };

  const BASLIKLAR = { dogru: "Doğru!", yanlis: "Yanlış!", "sure-doldu": "Süre doldu!" };

  function ekranGoster(ad) {
    el.giris.hidden = ad !== "giris";
    el.soru.hidden = ad !== "soru";
    el.sonuc.hidden = ad !== "sonuc";
    document.body.dataset.ekran = ad;
    window.scrollTo(0, 0);
  }

  function sayaciDurdur() {
    if (durum.zamanlayici) {
      clearInterval(durum.zamanlayici);
      durum.zamanlayici = 0;
    }
  }

  function sayaciGuncelle() {
    const gecen = (Date.now() - durum.baslangic) / 1000;
    const kalan = Math.max(0, SURE - gecen);
    el.sureKutu.style.setProperty("--kalan", (kalan / SURE).toFixed(3));
    el.sure.textContent = String(Math.ceil(kalan));
    el.sureKutu.classList.toggle("az", kalan <= 5);
    if (kalan <= 0) {
      cevapla(null);
    }
  }

  function sikDugmesi(metin, i) {
    const dugme = document.createElement("button");
    dugme.type = "button";
    dugme.className = "sik";
    dugme.dataset.index = String(i);
    const harf = document.createElement("span");
    harf.className = "sik-harf";
    harf.textContent = "ABCD"[i];
    const yazi = document.createElement("span");
    yazi.className = "sik-metin";
    yazi.textContent = metin;
    dugme.append(harf, yazi);
    dugme.addEventListener("click", () => cevapla(i));
    return dugme;
  }

  function soruGoster() {
    const s = sorular[durum.sira];
    durum.cevaplandi = false;
    el.sayac.textContent = `${durum.sira + 1} / ${sorular.length}`;
    el.puan.textContent = `${durum.dogru} doğru`;
    el.soruMetni.textContent = s.soru;
    el.rozet.hidden = s.seyirci !== true;
    el.konu.textContent = s.konu || "";
    el.konu.hidden = !s.konu;
    el.ilerleme.querySelectorAll("li").forEach((nokta, i) => nokta.classList.toggle("simdi", i === durum.sira));
    el.siklar.replaceChildren(...s.siklar.map(sikDugmesi));
    el.geri.hidden = true;
    el.geri.className = "";
    el.sureKutu.classList.remove("az");
    el.sureKutu.style.setProperty("--kalan", "1");
    el.sure.textContent = String(SURE);
    sayaciDurdur();
    durum.baslangic = Date.now();
    durum.zamanlayici = setInterval(sayaciGuncelle, 100);
  }

  function cevapla(secim) {
    if (durum.cevaplandi || document.body.dataset.ekran !== "soru") {
      return;
    }
    durum.cevaplandi = true;
    sayaciDurdur();
    const s = sorular[durum.sira];
    const gecen = secim === null ? SURE : Math.min(SURE, (Date.now() - durum.baslangic) / 1000);
    durum.sureler.push(gecen);
    const dugmeler = el.siklar.querySelectorAll(".sik");
    dugmeler.forEach((dugme, i) => {
      dugme.disabled = true;
      if (i === s.dogru) {
        dugme.classList.add("dogru");
      }
    });
    let tur = "sure-doldu";
    if (secim !== null) {
      dugmeler[secim].classList.add("secili");
      if (secim === s.dogru) {
        tur = "dogru";
        durum.dogru += 1;
      } else {
        tur = "yanlis";
        dugmeler[secim].classList.add("yanlis");
      }
    }
    durum.cevaplar[durum.sira] = tur;
    const nokta = el.ilerleme.children[durum.sira];
    if (nokta) {
      nokta.classList.remove("simdi");
      nokta.classList.add(tur === "dogru" ? "dogru" : "yanlis");
    }
    el.puan.textContent = `${durum.dogru} doğru`;
    el.geri.className = tur;
    el.geriBaslik.textContent = BASLIKLAR[tur];
    el.aciklama.textContent = s.aciklama;
    el.sonraki.textContent = durum.sira === sorular.length - 1 ? "Sonucu gör" : "Sonraki soru";
    el.geri.hidden = false;
    el.geri.scrollIntoView({ behavior: azHareket ? "auto" : "smooth", block: "nearest" });
  }

  function unvanBul(yuzde) {
    let secilen = null;
    for (const u of unvanlar) {
      if (typeof u.minYuzde === "number" && u.minYuzde <= yuzde) {
        secilen = u;
      }
    }
    return secilen || { unvan: "Mutfak Dostu", aciklama: "" };
  }

  function rolBul(oran, ortSure) {
    const bulunan = roller.find((r) => {
      const k = r.kosul || {};
      return (k.minOran ?? 0) <= oran && oran <= (k.maxOran ?? 1) &&
        (k.minSure ?? 0) <= ortSure && ortSure <= (k.maxSure ?? Infinity);
    });
    return bulunan || roller[roller.length - 1];
  }

  function cevapAnahtariniDoldur() {
    const maddeler = sorular.map((s, i) => {
      const li = document.createElement("li");
      li.className = durum.cevaplar[i] || "yanlis";
      const soru = document.createElement("p");
      soru.className = "ca-soru";
      soru.textContent = `${i + 1}. ${s.soru}`;
      const cevap = document.createElement("p");
      cevap.className = "ca-cevap";
      cevap.textContent = `Doğru cevap: ${"ABCD"[s.dogru]}) ${s.siklar[s.dogru]}`;
      const aciklama = document.createElement("p");
      aciklama.className = "ca-aciklama";
      aciklama.textContent = s.aciklama;
      li.append(soru, cevap, aciklama);
      return li;
    });
    el.cevapListesi.replaceChildren(...maddeler);
    el.cevapAnahtari.open = false;
  }

  function konfetiPatlat() {
    if (!el.konfeti || azHareket) {
      return;
    }
    const parcalar = document.createDocumentFragment();
    for (let i = 0; i < 70; i += 1) {
      const p = document.createElement("i");
      p.className = "konfeti-parca";
      p.style.setProperty("--x", (Math.random() * 100).toFixed(1));
      p.style.setProperty("--renk", RENKLER[i % RENKLER.length]);
      p.style.setProperty("--gecikme", `${(Math.random() * 0.6).toFixed(2)}s`);
      p.style.setProperty("--sure", `${(2.2 + Math.random() * 1.4).toFixed(2)}s`);
      p.style.setProperty("--donus", `${Math.round(360 + Math.random() * 720)}deg`);
      p.style.setProperty("--kayma", `${Math.round(Math.random() * 120 - 60)}px`);
      parcalar.appendChild(p);
    }
    el.konfeti.replaceChildren(parcalar);
    clearTimeout(durum.konfetiZamani);
    durum.konfetiZamani = setTimeout(() => el.konfeti.replaceChildren(), 4500);
  }

  function sonucGoster() {
    sayaciDurdur();
    const n = sorular.length;
    const oran = durum.dogru / n;
    const yuzde = Math.round(100 * oran);
    const u = unvanBul(yuzde);
    el.sonucPuan.textContent = `${durum.dogru} / ${n}`;
    el.sonucUnvan.textContent = u.unvan;
    el.sonucAciklama.textContent = u.aciklama || "";
    el.paylasMesaj.textContent = "";
    cevapAnahtariniDoldur();
    durum.rol = null;
    if (roller && el.rolKarti) {
      const ortSure = durum.sureler.reduce((a, b) => a + b, 0) / n;
      const rol = rolBul(oran, ortSure);
      durum.rol = rol;
      el.rolKarti.dataset.rol = rol.id || "";
      el.rolKarti.dataset.renk = rol.renk || "turuncu";
      el.rolAdi.textContent = rol.ad;
      el.rolAciklama.textContent = rol.aciklama || "";
      el.rolYz.textContent = rol.yz || "";
      el.rolIstatistik.textContent = `Ortalama ${ortSure.toFixed(1).replace(".", ",")} sn · %${yuzde} doğru`;
      el.rolKarti.hidden = false;
    }
    ekranGoster("sonuc");
    if (roller && oran >= 0.5) {
      konfetiPatlat();
    }
  }

  function ilerle() {
    if (!durum.cevaplandi) {
      return;
    }
    if (durum.sira < sorular.length - 1) {
      durum.sira += 1;
      soruGoster();
      window.scrollTo(0, 0);
    } else {
      sonucGoster();
    }
  }

  function baslat() {
    if (!sorular.length) {
      return;
    }
    sayaciDurdur();
    durum.sira = 0;
    durum.dogru = 0;
    durum.sureler = [];
    durum.cevaplar = [];
    durum.rol = null;
    el.cevapListesi.replaceChildren();
    el.cevapAnahtari.open = false;
    el.ilerleme.replaceChildren(...sorular.map(() => document.createElement("li")));
    if (el.konfeti) {
      el.konfeti.replaceChildren();
    }
    ekranGoster("soru");
    soruGoster();
  }

  async function paylas() {
    const adres = location.href.split("#")[0].split("?")[0];
    const rolMetni = durum.rol ? `, mutfaktaki rolüm: ${durum.rol.ad}` : "";
    const metin = `Yapay Zekâ Mutfağı quiz'inde ${durum.dogru}/${sorular.length} yaptım, unvanım: ${el.sonucUnvan.textContent}${rolMetni}! Sen de dene:`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Yapay Zekâ Mutfağı", text: metin, url: adres });
        el.paylasMesaj.textContent = "Paylaşıldı, afiyet olsun!";
        return;
      }
    } catch (hata) {
      if (hata && hata.name === "AbortError") {
        el.paylasMesaj.textContent = "Paylaşım iptal edildi.";
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(`${metin} ${adres}`);
      el.paylasMesaj.textContent = "Sonucun panoya kopyalandı.";
    } catch (hata) {
      el.paylasMesaj.textContent = `${metin} ${adres}`;
    }
  }

  document.addEventListener("keydown", (olay) => {
    if (olay.altKey || olay.ctrlKey || olay.metaKey) {
      return;
    }
    if (document.body.dataset.ekran !== "soru") {
      return;
    }
    const harita = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
    const tus = olay.key.toLocaleLowerCase("tr");
    if (!durum.cevaplandi && Object.prototype.hasOwnProperty.call(harita, tus)) {
      olay.preventDefault();
      cevapla(harita[tus]);
    } else if (durum.cevaplandi && olay.key === "Enter" && document.activeElement !== el.sonraki) {
      olay.preventDefault();
      ilerle();
    }
  });

  el.basla.addEventListener("click", baslat);
  el.sonraki.addEventListener("click", ilerle);
  el.tekrar.addEventListener("click", baslat);
  el.paylas.addEventListener("click", paylas);

  if (!sorular.length) {
    el.girisMetni.textContent = "Sorular hazırlanıyor…";
    el.basla.disabled = true;
  } else {
    el.girisBilgi.textContent = `${sorular.length} soru · her soru ${SURE} saniye`;
  }
  ekranGoster("giris");
})();
