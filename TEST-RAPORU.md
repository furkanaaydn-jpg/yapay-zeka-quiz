# Test raporu: Yapay Zekâ Mutfağı (yedek sürüm)

**Sonuç: BAŞARILI** · `python3 araclar/kontrol.py`: 10 soru, 0 hata

Bu sürüm, canlı demonun yedek tabağıdır: Görev 1 (quiz) ve Görev 2 (mutfak rolü + konfeti) birlikte hazırdır.

## Test edilenler

- [x] Açılış ekranı, "Başla" düğmesi (64 px)
- [x] 10 sorunun hepsi oynandı; doğru ve yanlış geri bildirim, tek cümle açıklama
- [x] İlerleme noktaları ve konu etiketi her soruda doğru
- [x] 20 saniyelik sayaç: süre dolunca "Süre doldu!" ve doğru şık gösteriliyor
- [x] Sonuç ekranı: puan, unvan, açıklama, cevap anahtarı (10 madde)
- [x] Mutfak rolü kartı ve konfeti (doğru oranı %50 ve üstü)
- [x] Paylaş: paylaşım menüsü yoksa panoya kopyalama, o da yoksa metin gösterimi
- [x] Tekrar oyna: 1. sorudan yeniden başlıyor
- [x] 360 px telefonda yatay taşma yok, dokunma hedefleri 48 px üstü
- [x] Masaüstünde ortada kart görünümü
- [x] Konsolda hata yok, dış kaynak yok

## Ekran görüntüleri

`durum/kontrol/` altında: 01-giris, 02-soru, 03-dogru, 04-yanlis, 05-sure-doldu, 06-sonuc, 07-dar-360, 08-masaustu, 09-cevap-anahtari.
