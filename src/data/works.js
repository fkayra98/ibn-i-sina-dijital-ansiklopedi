export const worksChapter = {
  id: "eserler",
  path: "/eserler",
  nav: "Eserler",
  kicker: "Bölüm XI",
  title: "Eserlerinin Kapsamlı Kataloğu",
  subtitle:
    "Tıp, felsefe, metafizik, astronomi ve psikoloji alanlarındaki başlıca eserler ve içerikleri.",
  lead: `İbn-i Sina'nın eserlerini yalnızca isimleriyle sıralamak yerine, her birinin bilimsel amacı ve içeriğiyle birlikte değerlendirmek gerekir. Aşağıdaki katalog, onun ansiklopedik üretiminin ana hatlarını çıkarır.`,
  hero: "/images/manuscript.jpg",
  featured: [
    {
      title: "el-Kânûn fi't-Tıbb",
      field: "Tıp",
      image: "/images/anatomy.jpg",
      text: `Beş kitaplık dev tıp ansiklopedisi. Genel tıp ilkelerinden basit ve bileşik ilaçlara, organ hastalıklarından genel hastalıklara uzanan bir bütün. Latinceye çevrilerek Avrupa tıp eğitiminde yüzyıllarca kullanıldı.`,
      note: "Yaklaşık 800 basit ilaç · yaklaşık 650 bileşik formül",
    },
    {
      title: "Kitâbü'ş-Şifâ",
      field: "Felsefe ve bilim",
      image: "/images/library.jpg",
      text: `Mantık, fizik, matematik ve metafizik bölümlerinden oluşan kapsamlı bilim ve felsefe sistemi. İbn-i Sina'nın bilimleri ortak bir düzen içinde ele alma yönteminin en açık örneğidir.`,
      note: "Mantık · Fizik · Matematik · Metafizik",
    },
    {
      title: "Dânişnâme-i Alâî",
      field: "Felsefe",
      image: "/images/isfahan.jpg",
      text: `Farsça kaleme alınmış bilim ve felsefe eseri; Alâüddevle'ye sunulmuştur. Bilimsel ve felsefi bilgilerin Farsça aktarılması açısından dikkat çekicidir.`,
      note: "Farsça · Alâüddevle'ye sunuldu",
    },
  ],
  sections: [
    {
      id: "katalog",
      title: "Başlıca eserler",
      blocks: [
        {
          type: "table",
          head: ["Eser", "Alan", "İçerik"],
          rows: [
            ["el-Kânûn fi't-Tıbb", "Tıp", "Beş kitaplık tıp ansiklopedisi"],
            ["Kitâbü'ş-Şifâ", "Felsefe ve bilim", "Kapsamlı bilim ve felsefe sistemi"],
            ["en-Necât", "Felsefe", "Felsefi sistemin özeti"],
            ["el-İşârât ve't-Tenbîhât", "Felsefe", "Mantık ve metafizik"],
            ["Dânişnâme-i Alâî", "Felsefe", "Farsça bilim ve felsefe eseri"],
            ["Uyûnü'l-Hikme", "Felsefe", "Mantık, fizik ve metafizik"],
            ["el-Mübâhasât", "Felsefe", "Tartışmalar ve açıklamalar"],
            ["et-Ta'lîkât", "Felsefe", "Felsefi notlar"],
            ["el-Mebde' ve'l-Meâd", "Metafizik", "Varlığın başlangıcı ve sonu"],
            ["Hay bin Yakzan", "Felsefe", "Akıl ve bilgi üzerine anlatı"],
            ["el-Urcûze fi't-Tıbb", "Tıp", "Manzum tıp bilgileri"],
            ["el-Edviyetü'l-Kalbiyye", "Tıp", "Kalp ve ilaçlar"],
            ["Ahvâlü'n-Nefs", "Psikoloji", "Ruh ve zihinsel yetenekler"],
            ["er-Risâletü'l-Arşiyye", "Metafizik", "Tanrı ve varlık"],
            ["Taḥrîrü'l-Mecistî", "Astronomi", "Batlamyus astronomisi"],
            ["Makale fi'l-Âlâti'r-Resadiyye", "Astronomi", "Gözlem araçları"],
          ],
        },
        {
          type: "note",
          text: `Eserlerin kataloglanmasıyla ilgili önemli not: İbn-i Sina'nın eserlerinin isimleri, yazma nüshaları ve ona atfedilen metinler konusunda akademik literatürde farklılıklar bulunmaktadır. Bu nedenle katalogda kesinliği tartışmalı eserleri ayrıca işaretlemek gerekir.`,
        },
      ],
    },
    {
      id: "kayip-eserler",
      title: "Metinlerin günümüze ulaşma serüveni",
      blocks: [
        {
          type: "p",
          text: `Orta Çağ'da kitaplar elle çoğaltıldığı için her eserin bütün nüshalarının günümüze ulaşması beklenemez. İbn-i Sina'nın metinleri; saray kütüphaneleri, medreseler ve özel koleksiyonlar aracılığıyla yüzyıllar boyunca kopyalandı. Bazı eserleri yalnızca sonraki yazarların aktarımları veya Latince çevirileri üzerinden bilinmektedir.`,
        },
        {
          type: "p",
          text: `Bu nedenle tarihçiler için asıl mesele yalnızca "hangi eserleri yazdı?" sorusu değil; "hangi metin gerçekten ona ait, hangi nüsha hangi geleneğe dayanıyor?" sorusudur. Filolojik çalışmalar, yazma eser katalogları ve karşılaştırmalı baskılar bu soruların cevabını netleştirmeye çalışır.`,
        },
        {
          type: "p",
          text: `el-Kânûn fi't-Tıbb'ın Latince baskıları ve farklı yazma nüshaları, eserin Avrupa ve İslam dünyasındaki dolaşımını izlemeyi mümkün kılar. Kitâbü'ş-Şifâ'nın bölümleri ise farklı kütüphanelerde dağınık nüshalar hâlinde bulunur.`,
        },
      ],
    },
  ],
};
