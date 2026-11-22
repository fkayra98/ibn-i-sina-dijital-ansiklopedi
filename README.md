# İbn-i Sina — Hayatı, Bilimi ve Mirası

İbn-i Sina'nın (Avicenna) hayatı, tıbbı, felsefesi, matematik, astronomi, fizik, mantık,
psikoloji ve diğer bilim dallarındaki çalışmaları, eserleri ve dünya bilim tarihine
etkisi üzerine hazırlanmış kapsamlı, etkileşimli ve tamamen statik bir dijital
ansiklopedi.

Sunucu, veritabanı veya backend gerektirmez. Tüm etkileşim ve animasyonlar tarayıcıda
çalışır; üretim çıktısı doğrudan **Cloudflare Pages** üzerinde yayınlanabilir.

---

## 1. Teknolojiler

| Katman | Tercih |
|---|---|
| Arayüz | React 18 (JSX) |
| Derleme | Vite 5 |
| Stil | Saf CSS (değişkenler, grid, scroll-reveal, parallax) |
| Yönlendirme | History API tabanlı hafif istemci yönlendirici |
| Animasyon | CSS geçişleri + IntersectionObserver (harici animasyon kütüphanesi yok) |
| Görseller | `public/images` altında optimize JPEG dosyalar |

Harici çalışma zamanı bağımlılığı yoktur. Yalnızca Google Fonts (Cormorant Garamond,
Lora) ağdan yüklenir; font erişimi olmazsa sistem serif yazı tiplerine düşer.

---

## 2. Kurulum ve yerel çalıştırma

Gereksinim: Node.js 18 veya üzeri (test edilen sürüm: Node 24).

```bash
npm install
npm run dev
```

Varsayılan adres: `http://localhost:5173`

Üretim derlemesi:

```bash
npm run build
```

Çıktı: `dist/` klasörü.

Derlemeyi yerelde önizlemek için:

```bash
npm run preview
```

---

## 3. Cloudflare Pages'e yükleme

### Yöntem A — Doğrudan yükleme (en hızlı)

1. `npm run build` komutunu çalıştırın.
2. Cloudflare panosunda **Workers & Pages → Create → Pages → Upload assets** seçin.
3. Proje adını girin ve `dist` klasörünün **içeriğini** yükleyin
   (`dist/index.html` kök dizinde olacak şekilde).
4. **Deploy** düğmesine basın.

Bölüm adreslerinin (`/hayat`, `/tip`, `/felsefe` …) doğrudan açılması, `wrangler.jsonc`
içindeki `assets.not_found_handling: "single-page-application"` ayarıyla sağlanır. Workers Static Assets `/* /index.html 200` kuralını sonsuz döngü sayıp reddettiği için `_redirects` depodan kaldırılmıştır (bkz. Yöntem C).

### Yöntem B — Git deposu bağlayarak

1. Projeyi bir Git deposuna aktarın (kaynak kod + `package.json` yeterlidir).
2. Cloudflare Pages'te **Connect to Git** seçin.
3. Ayarlar:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 veya üzeri
4. Deploy edin.

### Yöntem C — Workers Builds (`wrangler deploy`)

Depo doğrudan Cloudflare Workers'a bağlanabilir; kökteki `wrangler.jsonc` derleme
çıktısını (`dist`) statik varlık olarak yayınlar.

1. Cloudflare'te **Workers & Pages → Create → Workers → Connect to Git** seçin.
2. **Build command:** `npm run build`, **Deploy command:** `npx wrangler deploy`
3. Deploy edin. Aynı işi yerelde `npm run deploy` komutu yapar.

### Alan adı

Cloudflare Pages projesinde **Custom domains → Set up a custom domain** ile kendi
alan adınızı bağlayabilirsiniz. Alan adı Cloudflare'de yönetiliyorsa DNS kaydı
otomatik oluşturulur; başka bir sağlayıcıdaysa verilen CNAME kaydını eklemeniz yeterlidir.

> Not: Bu proje teslim edilirken kullanıcının Cloudflare hesabına erişim
> bulunmadığından yayınlama işlemi yapılmamıştır. ZIP teslim yöntemi uygulanmıştır.

---

## 4. Proje yapısı

```
.
├── index.html               # HTML kabuğu, meta etiketleri, font bağlantıları
├── package.json
├── vite.config.js
├── wrangler.jsonc           # Workers statik varlık + SPA fallback yapılandırması
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/              # 8 üretilmiş illüstrasyon (JPEG) + 3 portre (WebP)
├── src/
│   ├── main.jsx             # React giriş noktası
│   ├── App.jsx              # Yönlendirme, sayfa başlığı, yerleşim
│   ├── data/                # Tüm ansiklopedi içeriği (veri dosyaları)
│   │   ├── life.js          # Bölüm I–II  (hayat, dönem)
│   │   ├── medicine.js      # Bölüm III   (tıp)
│   │   ├── philosophy.js    # Bölüm IV    (felsefe)
│   │   ├── sciences.js      # Bölüm V–X   (matematik, astronomi, fizik, mantık, psikoloji)
│   │   ├── works.js         # Bölüm XI    (eser kataloğu)
│   │   ├── legacy.js        # Bölüm XII–XIII (etki, yöntem)
│   │   ├── appendix.js      # Bölüm XIV–XVI (kronoloji, SSS, sözlük, kaynakça)
│   │   ├── contact.js       # İletişim ve okul künyesi
│   │   └── index.js         # Bölümleri ve menüyü birleştirir
│   ├── components/          # Header, Footer, Timeline, Faq, Glossary, Blocks,
│   │                        # SearchOverlay, SourceList…
│   ├── hooks/useRoute.js    # İstemci yönlendirici
│   ├── lib/search.js        # Site içi arama indeksi ve arama işlevi
│   ├── pages/               # Home, ChapterPage, AppendixPage, ContactPage, NotFound
│   └── styles/              # base.css, layout.css, content.css
└── dist/                    # Üretim çıktısı (Cloudflare Pages'e yüklenecek klasör)
```

İçerik eklemek veya düzeltmek için `src/data/` altındaki dosyaları düzenlemek
yeterlidir; bileşenler bu veriyi otomatik olarak işler.

---

## 5. Öne çıkan özellikler

- Sinematik açılış perdesi (oturum başına bir kez, atlanabilir).
- Kaydırma ile ortaya çıkan içerikler ve kahraman alanında parallax.
- Tıklanabilir, ayrıntı açan etkileşimli kronoloji (14 durak).
- "Uçan Adam" için duyuları tek tek kapatmaya dayalı etkileşimli düşünce deneyi.
- Kıyas örneği, beş kitaplık el-Kânûn şeması ve karşılaştırma tabloları.
- Aranabilir kavram sözlüğü (Türkçe karakter duyarlı normalizasyon).
- Üst menüden açılan site içi arama: bölümler, eserler, kronoloji, SSS, sözlük ve
  kaynaklar arasında; `Ctrl+K` veya `/` kısayolu, ok tuşları ve Enter desteği.
- İletişim ve künye sayfası: kişisel iletişim bilgileri, öğrenim bilgileri, okul
  bağlantıları ve kaynakça listesi.
- Açılır kapanır SSS, bölüm içi yapışkan içindekiler ve okuma ilerleme çubuğu.
- Görsel arşiv: renkli portre, hatıra pulu ve gravürün yer aldığı müze levhası düzeni.
- Tamamen duyarlı yerleşim; mobilde yatay kaydırmalı bölüm menüsü.
- `prefers-reduced-motion` desteği, klavye odağı stilleri, "içeriğe geç" bağlantısı,
  anlamsal başlık hiyerarşisi ve her bölüm için ayrı sayfa başlığı/açıklama.

---

## 6. İçerik ve görseller hakkında

- Metinler, kaynakça bölümünde listelenen akademik kaynaklara (Stanford Encyclopedia of
  Philosophy, Encyclopaedia Iranica, MacTutor, Internet Encyclopedia of Philosophy,
  Library of Congress) dayanılarak hazırlanmıştır.
- Tarihi kesinliği tartışmalı noktalar (doğum yılı, ölüm nedeni, bazı eserlerin
  yazarlığı) ilgili bölümlerde açıkça belirtilmiştir.
- Sayfadaki minyatür ve illüstrasyonlar **tarihî belge değildir**; dönemin görsel
  dilinden esinlenerek üretilmiş temsillerdir. Bu durum alt bilgide ve kaynakça
  bölümünde de belirtilir.
- “Görsel arşiv” bölümündeki üç portre (renkli temsilî portre, İran hatıra pulu ve
  gravür) kullanıcı tarafından sağlanmıştır ve `public/images` altında WebP olarak
  durur (`portrait-color.webp`, `portrait-stamp.webp`, `portrait-engraving.webp`).
  Bu görsellerin orijinal kaynakları/sanatçıları proje kapsamında belgelenmemiştir.
  WebP, Cloudflare Pages ve tüm güncel tarayıcılar tarafından desteklenir.
- Tıbbi içerikler tarihsel bilgi amaçlıdır, güncel tıbbi tavsiye niteliği taşımaz.

---

## 7. Lisans ve sahiplik

Kaynak kod ve metinler bu proje için üretilmiştir; teslim alan kullanıcıya aittir.
Görseller proje için üretilmiş özgün temsillerdir. Üçüncü taraf sitelere verilen
kaynakça bağlantıları yalnızca atıf amaçlıdır.
