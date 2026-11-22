export const sciencesChapter = {
  id: "bilimler",
  path: "/bilimler",
  nav: "Bilimler",
  kicker: "Bölüm V – X",
  title: "Matematik, Astronomi, Fizik, Mantık ve Psikoloji",
  subtitle:
    "Aritmetikten astronomiye, meyil teorisinden iç duyulara uzanan çok yönlü bir bilim programı.",
  lead: `İbn-i Sina'nın bilim anlayışının en belirgin özelliği, disiplinleri birbirinden kopuk alanlar olarak görmemesidir. Matematik astronomiye, fizik metafiziğe, mantık tıbba bağlanır. Bu bölüm, onun matematik, astronomi, fizik, mantık, psikoloji, biyoloji, kimya ve müzik alanlarındaki çalışmalarını bir arada sunar.`,
  hero: "/images/astronomy.jpg",
  sections: [
    {
      type: "part",
      kicker: "Bölüm V",
      title: "Matematik ve Geometriye Katkıları",
      text: `Matematik, İbn-i Sina'nın bilim sınıflandırmasının temel taşlarından biridir. Kitâbü'ş-Şifâ'nın matematik bölümü; aritmetik, geometri, astronomi ve müzik olmak üzere dört disiplini bir arada ele alır.`,
    },
    {
      id: "matematik",
      num: "37",
      title: "İbn-i Sina'nın matematik anlayışı",
      blocks: [
        {
          type: "p",
          text: `Matematik çalışmaları, onun çok yönlü bilim anlayışının önemli bir parçasıdır. Matematiği yalnızca sayısal işlemlerden ibaret görmemiş; doğanın, gök cisimlerinin ve farklı bilimsel olayların anlaşılmasında kullanılan temel bir bilim olarak değerlendirmiştir.`,
        },
        {
          type: "p",
          text: `Matematiksel bilimler, Kitâbü'ş-Şifâ'nın önemli bir bölümünü oluşturur. Bu eserde matematik dört temel alanda ele alınır:`,
        },
        {
          type: "ol",
          items: ["Aritmetik", "Geometri", "Astronomi", "Müzik"],
        },
        {
          type: "p",
          text: `Bu sınıflandırma, Antik Yunan'dan Orta Çağ'a uzanan matematik geleneğinin bir devamıdır.`,
        },
      ],
    },
    {
      id: "aritmetik",
      num: "38",
      title: "Aritmetik ve sayılar",
      blocks: [
        {
          type: "p",
          text: `Aritmetik, sayıların özelliklerini ve sayısal işlemleri inceleyen matematik dalıdır. İbn-i Sina, aritmetiği matematiksel bilimlerin temel alanlarından biri olarak ele aldı. Sayı kavramı, nicelik, matematiksel ilişkiler ve hesaplama gibi konular matematiğin temelini oluşturur.`,
        },
        { type: "h3", text: "38.1. Sayı kavramı" },
        {
          type: "p",
          text: `Sayılar, nesnelerin miktarını ifade etmenin yanında matematiksel ilişkilerin kurulmasını sağlar. İbn-i Sina'nın matematik felsefesinde sayı, soyut bir nicelik olarak değerlendirilir. Bir nesnenin fiziksel özellikleri ile o nesnenin sayısal miktarı birbirinden farklı biçimde incelenebilir.`,
        },
        { type: "h3", text: "38.2. Matematiksel soyutlama" },
        {
          type: "p",
          text: `Matematikte soyutlama, belirli nesnelerden bağımsız olarak genel ilişkileri incelemeyi sağlar. Örneğin üç elma ile üç taş farklı nesnelerdir; ancak matematiksel açıdan her ikisi de üç sayısıyla ifade edilebilir. Bu tür ilişkiler, matematiğin diğer bilimlerden farklı yönlerinden biridir.`,
        },
        { type: "h3", text: "38.3. Matematiğin bilimsel düşüncedeki rolü" },
        {
          type: "p",
          text: `İbn-i Sina, matematiksel bilgiyi doğa olaylarını anlamada kullanılan önemli bir araç olarak gördü. Astronomide gök cisimlerinin hareketlerinin hesaplanması, geometride şekillerin incelenmesi ve müzikte ses oranlarının değerlendirilmesi matematiksel bilgi gerektirir.`,
        },
      ],
    },
    {
      id: "geometri",
      num: "39",
      title: "Geometri çalışmaları",
      blocks: [
        {
          type: "p",
          text: `Geometri, şekillerin, boyutların, konumların ve uzamsal ilişkilerin incelendiği matematik dalıdır. İbn-i Sina'nın geometri anlayışı özellikle Öklid geleneğiyle ilişkilidir. Öklid'in Elementler adlı eseri, geometrinin sistematik biçimde ele alınmasını sağlayan en önemli klasik kaynaklardan biridir.`,
        },
        { type: "h3", text: "39.1. Öklid geometrisi" },
        {
          type: "p",
          text: `Öklid geometrisi nokta, doğru, düzlem, açı ve çokgen gibi temel kavramlardan hareket eder. Bu kavramlar belirli tanımlar ve önermeler yardımıyla incelenir. İbn-i Sina, geometrik bilgiyi bu klasik matematik geleneği içerisinde değerlendirdi.`,
        },
        { type: "h3", text: "39.2. Geometrik kanıtlamalar" },
        {
          type: "p",
          text: `Geometrinin en önemli özelliklerinden biri, ulaşılan sonuçların mantıksal olarak kanıtlanabilmesidir. Bir geometrik önerme yalnızca gözleme dayanarak doğru kabul edilmez; önceden kabul edilen tanımlar ve önermeler kullanılarak kanıtlanması gerekir. Bu yaklaşım, İbn-i Sina'nın mantık anlayışıyla da bağlantılıdır.`,
        },
        { type: "h3", text: "39.3. Geometri ve fizik ilişkisi" },
        {
          type: "p",
          text: `Geometri, doğadaki cisimlerin konumlarını, büyüklüklerini ve uzamsal ilişkilerini anlamada kullanılabilir. İbn-i Sina'nın doğa felsefesinde mekân ve cisim kavramlarının incelenmesi, geometrik düşünceyle yakından ilişkilidir.`,
        },
        { type: "h3", text: "39.4. Geometri ve astronomi ilişkisi" },
        {
          type: "p",
          text: `Astronomide gök cisimlerinin konumları ve hareketleri geometrik modeller yardımıyla açıklanır. Bu nedenle geometri, astronominin matematiksel temelini oluşturan bilim dallarından biridir.`,
        },
        {
          type: "note",
          text: `Tarihsel değerlendirme: İbn-i Sina'nın geometri alanındaki önemini, modern geometrinin kurucusu olarak değil; klasik matematiksel bilgiyi bilim sınıflandırması içerisinde ele alan ve bu geleneği sürdüren bir düşünür olarak değerlendirmek gerekir.`,
        },
      ],
    },
    {
      id: "matematik-iliskiler",
      num: "40",
      title: "Matematiğin diğer bilimlerle ilişkisi",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın bilim sınıflandırmasında matematik, diğer bilimlerle güçlü bağlantılar içerisindedir:`,
        },
        {
          type: "ul",
          items: [
            "Matematik ve astronomi, gök cisimlerinin hareketlerini anlamak için birlikte kullanılır.",
            "Matematik ve geometri, uzamsal ilişkilerin incelenmesini sağlar.",
            "Matematik ve müzik, sesler arasındaki oranların açıklanmasına yardımcı olur.",
            "Matematik ve fizik, doğadaki niceliksel ilişkilerin değerlendirilmesinde kullanılır.",
          ],
        },
        {
          type: "p",
          text: `Bu yaklaşım, İbn-i Sina'nın bilimleri birbirinden kopuk alanlar olarak görmediğini göstermektedir.`,
        },
      ],
    },
    {
      type: "part",
      kicker: "Bölüm VI",
      title: "Astronomiye Katkıları",
      text: `Gök cisimlerinin hareketlerini, Batlamyus'un yer merkezli modelini ve gözlem araçlarını inceleyen İbn-i Sina, astronomiyi matematiğin bir dalı olarak ele aldı; ancak modellerin fiziksel gerçekliğini de sorguladı.`,
    },
    {
      id: "astronomi",
      num: "41",
      title: "İbn-i Sina'nın astronomi anlayışı",
      blocks: [
        {
          type: "p",
          text: `Astronomi, gök cisimlerini, evrenin yapısını ve göksel hareketleri inceleyen bilim dalıdır. İbn-i Sina astronomiyi matematiksel bilimlerin önemli bir parçası olarak değerlendirdi.`,
        },
        {
          type: "p",
          text: `Çalışmalarında Batlamyus'un eserlerinden yararlandı; özellikle el-Mecistî'yi inceledi. Batlamyus'un astronomi sistemi, Orta Çağ boyunca farklı bilim çevrelerinde etkili olmuştu. Bu sistemde Dünya evrenin merkezinde kabul ediliyor ve Güneş ile gezegenlerin hareketleri Dünya merkezli geometrik modellerle açıklanıyordu. İbn-i Sina bu sistemi inceledi ve bazı fiziksel ve matematiksel yönlerini eleştirdi.`,
        },
        {
          type: "figure",
          src: "/images/astronomy.jpg",
          alt: "Astrolap, gök küresi ve yıldız haritalarıyla dolu bir astronomi masası",
          caption:
            "Astrolap ve göksel küreler, Orta Çağ astronomisinin hem gözlem hem de hesaplama araçlarıydı.",
        },
      ],
    },
    {
      id: "gok-cisimleri",
      num: "42",
      title: "Gök cisimlerinin hareketleri",
      blocks: [
        {
          type: "p",
          text: `Astronomi çalışmalarında Güneş, Ay, gezegenler ve yıldızların hareketleri önemli bir yer tutar. Gök cisimlerinin düzenli hareketlerinin matematiksel modellerle açıklanması, dönemin astronomi biliminin temel amaçlarından biriydi. İbn-i Sina bu modelleri felsefi ve fiziksel açıdan değerlendirdi.`,
        },
      ],
    },
    {
      id: "batlamyus",
      num: "43",
      title: "Batlamyus'un evren modeli",
      blocks: [
        {
          type: "p",
          text: `Batlamyus, Antik Çağ'ın en önemli astronomlarından biridir. Geliştirdiği yer merkezli evren sistemi yüzyıllar boyunca astronomi çalışmalarında kullanıldı. Bu modele göre Dünya merkezde bulunur ve diğer gök cisimleri belirli düzenler içerisinde onun çevresinde hareket eder.`,
        },
        {
          type: "p",
          text: `İbn-i Sina, Batlamyus'un astronomi eserini inceleyerek bu sistemin matematiksel yapısını değerlendirdi. Ancak göksel hareketlerin açıklanmasında kullanılan bazı modellerin fiziksel gerçekliği temsil edip etmediği üzerine eleştiriler geliştirdi.`,
        },
      ],
    },
    {
      id: "gozlem",
      num: "44",
      title: "Astronomik gözlem ve ölçüm",
      blocks: [
        {
          type: "p",
          text: `Astronomi çalışmalarında gözlem de önemli bir yere sahiptir. Gök cisimlerinin konumlarını incelemek, ölçüm yapmak ve astronomik olayları değerlendirmek için dönemin gözlem araçlarından yararlanıldı. İbn-i Sina'nın astronomik gözlem araçları üzerine yazdığı risaleler, bu alandaki ilgisini gösterir. Çalışmaları yalnızca felsefi açıklamalarla sınırlı kalmamıştır.`,
        },
      ],
    },
    {
      id: "dunya-hareketi",
      num: "45",
      title: "Dünya'nın hareketi üzerine görüşleri",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina, Dünya'nın hareket edip etmediği konusundaki tartışmalara katıldı. Dönemin yaygın astronomi sisteminde Dünya hareketsiz kabul ediliyordu. Ancak İbn-i Sina, Dünya'nın hareketi hakkındaki bazı tartışmaları fiziksel açıdan değerlendirdi ve yer merkezli sistemin savunmalarına yönelik eleştiriler geliştirdi.`,
        },
        {
          type: "note",
          text: `Bu konudaki düşüncelerini modern anlamda Güneş merkezli sistemi savunmakla eşitlemek doğru değildir. Çalışmaları, Orta Çağ astronomi ve doğa felsefesi içerisindeki tartışmaların bir parçasıdır.`,
        },
      ],
    },
    {
      id: "astronomi-eserleri",
      num: "46",
      title: "Astronomi alanındaki eserleri",
      blocks: [
        {
          type: "ul",
          items: [
            "Taḥrîrü'l-Mecistî",
            "el-Arsâdü'l-Külliyye",
            "Makale fi'l-Âlâti'r-Resadiyye",
            "Dünya'nın hareketi üzerine risalesi",
          ],
        },
      ],
    },
    {
      type: "part",
      kicker: "Bölüm VII",
      title: "Fizik ve Doğa Felsefesine Katkıları",
      text: `Hareket, meyil, zaman, mekân, madde-biçim ve nedensellik: İbn-i Sina'nın doğa felsefesi, Aristotelesçi çerçeveyi alıp dönüştürdüğü kavramlarla örülüdür.`,
    },
    {
      id: "fizik",
      num: "47",
      title: "İbn-i Sina'nın fizik anlayışı",
      blocks: [
        {
          type: "p",
          text: `Fizik çalışmaları, modern deneysel fizik anlayışından farklı olarak doğa felsefesi çerçevesinde şekillenmiştir. Doğadaki cisimlerin nasıl hareket ettiğini, hareketin nedenlerini, maddelerin özelliklerini ve evrenin yapısını inceledi.`,
        },
        {
          type: "p",
          text: `Bu çalışmalarında Aristoteles'in doğa felsefesinden yararlandı; ancak bazı konularda kendi açıklamalarını geliştirdi.`,
        },
      ],
    },
    {
      id: "hareket",
      num: "48",
      title: "Hareket kavramı",
      blocks: [
        {
          type: "p",
          text: `Hareket, İbn-i Sina'nın fiziksel düşüncesinin merkezinde yer alır. Hareketi yalnızca bir cismin yer değiştirmesi olarak değil, doğadaki değişim süreçlerinin önemli bir parçası olarak ele aldı. Bir cismin hareket etmesi, durması ve hareketinin devam etmesi gibi konular üzerinde durdu.`,
        },
      ],
    },
    {
      id: "meyil",
      num: "49",
      title: "Meyil teorisi",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın hareket üzerine geliştirdiği önemli düşüncelerden biri meyil kavramıyla ilişkilidir. Meyil, bir cismin hareketini sürdürmesiyle bağlantılı olarak ele alınan içsel eğilim veya kuvvet düşüncesidir.`,
        },
        {
          type: "p",
          text: `Aristotelesçi gelenekte hareketin devam etmesiyle ilgili açıklamalar farklı biçimlerde ele alınmıştı. İbn-i Sina, bu konudaki bazı görüşleri değerlendirerek hareketin sürdürülmesinde cismin kazandığı bir eğilimin rol oynayabileceğini savundu. Bu düşünce, sonraki Orta Çağ fizik tartışmalarını etkiledi.`,
        },
        {
          type: "note",
          text: `Meyil teorisi, modern eylemsizlik ilkesiyle aynı değildir. Ancak hareketin devamını açıklamaya yönelik tarihsel düşünce gelişiminde önemlidir.`,
        },
      ],
    },
    {
      id: "zaman-mekan",
      num: "50",
      title: "Zaman ve mekân",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina, zaman ve mekânı doğa felsefesinin temel konuları arasında değerlendirdi. Zamanın hareketle ilişkisini ve mekânın cisimlerin konumlarıyla bağlantısını inceledi. Bu konular, Antik Yunan'dan Orta Çağ'a kadar filozoflar arasında tartışılmıştır. İbn-i Sina'nın değerlendirmeleri, Aristotelesçi fizik geleneğinin gelişiminde önemli bir yere sahiptir.`,
        },
      ],
    },
    {
      id: "madde-bicim",
      num: "51",
      title: "Madde ve biçim",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın fizik ve metafizik sisteminde madde ve biçim ayrımı önemli bir yere sahiptir. Madde, bir varlığın meydana gelmesinde temel olan potansiyel unsur olarak değerlendirilir. Biçim ise maddenin belirli bir varlık hâline gelmesini sağlayan ilkedir.`,
        },
        {
          type: "p",
          text: `Örneğin bir nesnenin yalnızca hangi maddeden oluştuğunu bilmek, onun ne olduğunu tam olarak açıklamak için yeterli değildir. Nesnenin biçimi ve düzeni de dikkate alınmalıdır. Bu yaklaşım, Aristotelesçi madde-biçim öğretisinin İbn-i Sina tarafından geliştirilmiş bir yorumudur.`,
        },
      ],
    },
    {
      id: "nedensellik",
      num: "52",
      title: "Nedensellik",
      blocks: [
        {
          type: "p",
          text: `Nedensellik, olayların ve değişimlerin hangi sebepler sonucunda meydana geldiğini inceleyen felsefi konudur. İbn-i Sina'ya göre doğadaki olayların anlaşılması için nedenlerin araştırılması gerekir.`,
        },
        {
          type: "p",
          text: `Bir olayın yalnızca gerçekleştiğini bilmek, onun bilimsel açıklamasını oluşturmaz. Olayın hangi koşullarda ve hangi nedenlerle meydana geldiğini de anlamak gerekir. Bu düşünce, onun hem fizik hem de metafizik anlayışında önemli bir yer tutar.`,
        },
      ],
    },
    {
      type: "part",
      kicker: "Bölüm VIII",
      title: "Mantık ve Bilimsel Düşünce",
      text: `Kavramlar, tanımlar, önermeler, kıyas ve burhan: İbn-i Sina için mantık, bütün bilimlerin doğru biçimde öğrenilmesini sağlayan araçtır.`,
    },
    {
      id: "mantik",
      num: "53",
      title: "İbn-i Sina'nın mantık anlayışı",
      blocks: [
        {
          type: "p",
          text: `Mantık, doğru düşünmenin, geçerli akıl yürütmenin ve bilgiyi düzenlemenin kurallarını inceleyen bilim dalıdır. İbn-i Sina, mantığı diğer bilimlerin doğru biçimde öğrenilmesini sağlayan temel araçlardan biri olarak değerlendirdi.`,
        },
        {
          type: "p",
          text: `Ona göre bir insanın bilimsel bilgiye ulaşabilmesi için kavramları doğru tanımlaması, önermeleri değerlendirmesi ve geçerli çıkarımlar yapabilmesi gerekir. Mantık sistemi, Aristoteles'in mantık geleneğinden etkilenmekle birlikte önemli özgün katkılar içerir.`,
        },
      ],
    },
    {
      id: "kavramlar",
      num: "54",
      title: "Kavramlar ve tanımlar",
      blocks: [
        {
          type: "p",
          text: `Bilimsel düşünmenin ilk aşamalarından biri, incelenen kavramın doğru biçimde tanımlanmasıdır. Bir kavramın anlamı açık değilse o kavram üzerine kurulan düşünceler de belirsiz hâle gelebilir. İbn-i Sina, tanımların oluşturulması ve kavramların birbirleriyle ilişkilerinin açıklanması üzerine ayrıntılı çalışmalar yaptı.`,
        },
      ],
    },
    {
      id: "onermeler",
      num: "55",
      title: "Önermeler",
      blocks: [
        {
          type: "p",
          text: `Önerme, doğru veya yanlış olarak değerlendirilebilen yargıdır. Örneğin:`,
        },
        {
          type: "ul",
          items: [
            "Bütün insanlar canlıdır.",
            "Bazı canlılar uçar.",
            "Dünya bir gezegendir.",
          ],
        },
        {
          type: "p",
          text: `Bu tür ifadeler, mantıksal incelemenin temelini oluşturur. İbn-i Sina, önermelerin farklı türlerini ve birbirleriyle ilişkilerini inceledi.`,
        },
      ],
    },
    {
      id: "kiyas",
      num: "56",
      title: "Kıyas ve çıkarım",
      blocks: [
        {
          type: "p",
          text: `Kıyas, belirli öncüllerden hareket ederek bir sonuca ulaşma yöntemidir. Klasik örnek şöyledir:`,
        },
        {
          type: "syllogism",
          premises: ["Bütün insanlar ölümlüdür.", "İbn-i Sina bir insandır."],
          conclusion: "Öyleyse İbn-i Sina ölümlüdür.",
        },
        {
          type: "p",
          text: `Bu örnekte iki öncülden mantıksal bir sonuç elde edilir. İbn-i Sina, kıyasın yapısını ve geçerlilik koşullarını ayrıntılı şekilde inceledi.`,
        },
      ],
    },
    {
      id: "burhan",
      num: "57",
      title: "Burhan ve bilimsel kanıtlama",
      blocks: [
        {
          type: "p",
          text: `Burhan, kesin bilgiye ulaşmayı amaçlayan kanıtlama biçimidir. İbn-i Sina'nın mantık sisteminde burhan önemli bir yere sahiptir. Bir bilimsel iddianın doğru olduğunu göstermek için yalnızca kanaat veya varsayım yeterli değildir; iddianın mantıksal olarak temellendirilmesi gerekir. Bu yaklaşım, onun bilimsel bilgiye verdiği önemi göstermektedir.`,
        },
      ],
    },
    {
      type: "part",
      kicker: "Bölüm IX",
      title: "Psikoloji, Bilinç ve İnsan Ruhu",
      text: `Dış duyulardan iç duyulara, hafızadan hayal gücüne: İbn-i Sina'nın nefs teorisi, Orta Çağ psikolojisinin en ayrıntılı sistemlerinden birini kurar.`,
    },
    {
      id: "psikoloji",
      num: "58",
      title: "İbn-i Sina'nın psikoloji anlayışı",
      blocks: [
        {
          type: "p",
          text: `Psikoloji üzerine çalışmaları, modern psikolojinin yöntemlerinden farklıdır. Onun psikoloji anlayışı, felsefi nefs teorisi ve insanın zihinsel yetenekleri üzerine kuruludur. İnsan ruhunun özelliklerini, algıyı, hafızayı, hayal gücünü ve akıl yürütmeyi inceledi.`,
        },
        {
          type: "p",
          text: `Bu konular özellikle Kitâbü'ş-Şifâ'nın doğa felsefesi bölümünde ele alınır.`,
        },
      ],
    },
    {
      id: "dis-duyular",
      num: "59",
      title: "Dış duyular",
      blocks: [
        {
          type: "p",
          text: `İnsan çevresini beş temel duyu aracılığıyla algılar:`,
        },
        { type: "ol", items: ["Görme", "İşitme", "Koklama", "Tatma", "Dokunma"] },
        {
          type: "p",
          text: `İbn-i Sina, bu duyuların dış dünyadan bilgi edinmedeki rolünü inceledi.`,
        },
      ],
    },
    {
      id: "ic-duyular",
      num: "60",
      title: "İç duyular",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın psikoloji anlayışında iç duyular önemli bir yer tutar. İç duyular, dış dünyadan elde edilen bilgilerin zihinde işlenmesiyle ilişkilidir. Bunlar arasında ortak duyu, hayal gücü, tasarlama, vehim ve hafıza gibi yetenekler bulunur.`,
        },
        {
          type: "cards",
          items: [
            { title: "Ortak duyu", text: "Farklı duyulardan gelen izlenimleri bir araya getirir." },
            { title: "Hayal gücü", text: "Algılanan imgeleri saklar ve yeniden biçimlendirir." },
            { title: "Tasarlama", text: "İmgeleri birleştirerek yeni tasarımlar kurar." },
            { title: "Vehim", text: "İmgeden bağımsız anlamları ve sezgisel yargıları kavrar." },
            { title: "Hafıza", text: "Geçmiş izlenimleri saklar ve hatırlatır." },
          ],
        },
        {
          type: "p",
          text: `İbn-i Sina'nın iç duyulara ilişkin sınıflandırması, Orta Çağ psikoloji ve felsefe tarihinin önemli konularından biridir.`,
        },
      ],
    },
    {
      id: "hafiza",
      num: "61",
      title: "Hafıza",
      blocks: [
        {
          type: "p",
          text: `Hafıza, geçmişte edinilen bilgilerin saklanması ve gerektiğinde yeniden hatırlanmasıyla ilişkilidir. İbn-i Sina, hafızayı insanın zihinsel yetenekleri içerisinde değerlendirdi. Hafızanın yalnızca duyusal algıdan ibaret olmadığını, insanın zihinsel faaliyetleriyle bağlantılı olduğunu açıklamaya çalıştı.`,
        },
      ],
    },
    {
      id: "hayal-gucu",
      num: "62",
      title: "Hayal gücü",
      blocks: [
        {
          type: "p",
          text: `Hayal gücü, insanın daha önce algıladığı nesneleri zihninde yeniden canlandırabilmesini sağlar. Aynı zamanda farklı düşüncelerin bir araya getirilmesine ve yeni tasarımların oluşturulmasına yardımcı olur. İbn-i Sina, hayal gücünü insanın bilişsel yapısının önemli bir parçası olarak ele aldı.`,
        },
      ],
    },
    {
      id: "akil-dusunme",
      num: "63",
      title: "Akıl ve düşünme",
      blocks: [
        {
          type: "p",
          text: `Akıl, insanın kavramlar oluşturmasını, ilişkileri anlamasını ve soyut düşünmesini sağlar. İbn-i Sina'nın akıl teorisi, bilgi felsefesinin temelini oluşturur. İnsan yalnızca gördüğü ve duyduğu şeyleri kaydetmez; bu bilgileri değerlendirerek genel sonuçlara ulaşabilir. Bu özellik, insan düşüncesinin önemli yönlerinden biridir.`,
        },
      ],
    },
    {
      type: "part",
      kicker: "Bölüm X",
      title: "Diğer Bilim Dalları",
      text: `Biyoloji, botanik, mineraloji, kimya ve müzik: İbn-i Sina'nın ansiklopedik ilgisi, canlılardan sesin matematiğine kadar uzanır.`,
    },
    {
      id: "biyoloji",
      num: "64",
      title: "Biyoloji ve botanik",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina, canlıların özelliklerini doğa felsefesi içerisinde değerlendirdi. Bitkiler, hayvanlar ve insanın canlılık özellikleri üzerine çalışmalar yaptı. Kitâbü'ş-Şifâ'nın doğa felsefesi bölümlerinde canlıların yapısı, gelişimi ve farklı özellikleri ele alınır.`,
        },
        { type: "h3", text: "Bitkiler üzerine düşünceleri" },
        {
          type: "p",
          text: `Bitkilerin beslenmesi, büyümesi ve çoğalması gibi konuları inceledi. Bitkisel yaşamı, canlılığın temel özelliklerinden biri olarak değerlendirdi.`,
        },
        { type: "h3", text: "Hayvanlar üzerine düşünceleri" },
        {
          type: "p",
          text: `Hayvanların hareketleri, duyuları ve yaşam özellikleri üzerine açıklamalarda bulundu. Bu çalışmalar, Aristotelesçi biyoloji geleneğiyle ilişkilidir.`,
        },
        {
          type: "figure",
          src: "/images/materia-medica.jpg",
          alt: "Şifalı bitkiler, kökler ve eczacılık kaplarından oluşan bir natürmort",
          caption:
            "Bitki ve mineral bilgisi, hem tıp hem de doğa felsefesi açısından İbn-i Sina'nın ilgi alanına giriyordu.",
        },
      ],
    },
    {
      id: "kimya",
      num: "65",
      title: "Kimya ve mineraloji",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın madde, mineral ve doğadaki dönüşümler üzerine de görüşleri bulunmaktadır. Orta Çağ'da kimya ile simya arasındaki sınırlar günümüzdeki kadar belirgin değildi. İbn-i Sina, minerallerin ve maddelerin özelliklerini doğa felsefesi çerçevesinde değerlendirdi.`,
        },
        {
          type: "p",
          text: `Özellikle minerallerin oluşumu ve farklı maddelerin özellikleri üzerine düşünceleri bulunmaktadır. Ancak ona atfedilen her kimya veya simya metninin gerçek yazarlığı kesin değildir. Simya alanındaki görüşleri, özellikle maddelerin altına dönüştürülmesi gibi iddialar açısından eleştirel bir değerlendirme gerektirir.`,
        },
      ],
    },
    {
      id: "muzik",
      num: "66",
      title: "Müzik bilimi",
      blocks: [
        {
          type: "p",
          text: `İbn-i Sina'nın daha az bilinen çalışma alanlarından biri müziktir. Müziği matematiksel bilimler arasında değerlendirdi. Seslerin farklı özelliklerini, sesler arasındaki oranları ve müzikal uyumu inceledi.`,
        },
        { type: "h3", text: "Ses ve oran" },
        {
          type: "p",
          text: `Müzikte farklı seslerin birbiriyle uyumlu olabilmesi, belirli matematiksel oranlarla açıklanabilir. İbn-i Sina bu ilişkileri matematiksel bilimler çerçevesinde değerlendirdi.`,
        },
        { type: "h3", text: "Ritim ve müzikal yapı" },
        {
          type: "p",
          text: `Müziğin yalnızca seslerden oluşmadığını, düzen ve ritim gibi unsurların da önemli olduğunu ele aldı. Bu çalışmalar, onun bilimleri birbirleriyle ilişkilendiren yaklaşımının bir başka örneğidir.`,
        },
      ],
    },
  ],
};
