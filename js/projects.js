/* =========================================================
   PROJELER
   Yeni proje eklemek / düzenlemek için sadece bu dosyayı değiştir.

   category : "app" (Web Uygulaması) · "web" (Web Sitesi) · "cv" (Görüntü İşleme)
   image    : images/projects/ klasörüne koyacağın ekran görüntüsü.
              Dosya yoksa otomatik olarak şık bir yer tutucu görünür.
   live     : Canlı site linki   → boş bırakırsan buton görünmez
   github   : GitHub repo linki  → boş bırakırsan buton görünmez
   badge    : Kartın sağ üstündeki küçük etiket (istemezsen boş bırak)
   ========================================================= */

const PROJECTS = [
  {
    id: "cinemania",
    category: "app",
    year: "2026",
    image: "images/projects/cinemania.jpg",
    live: "https://cinemania-frontend.onrender.com",
    github: "",
    tech: ["React", "Vite", "TMDB API", "NestJS", "PostgreSQL", "SQLite", "Render"],
    tr: {
      title: "Cinemania — Film Platformu",
      context: "Kodpit Teknoloji · Staj",
      badge: "Staj projesi",
      summary: "TMDB API ile çalışan film platformu. Staj ekibiyle birlikte React arayüzünü geliştirdim ve projeyi Render'da canlıya aldım.",
      role: "Full-stack stajyer · Frontend geliştirme, REST API servisleri, deploy",
      problem: "Kullanıcıların güncel film verilerini keşfedebileceği, gerçek bir API ile çalışan ve canlıda erişilebilen bir film platformu geliştirmek.",
      solution: "Arayüzü React ve Vite ile, film verilerini TMDB API ile kurduk. Staj süresince NestJS, PostgreSQL ve SQLite ile kullanıcı yönetimi ve yorum sistemi gibi konuları kapsayan REST API servisleri de geliştirdim. Proje Render'da yayında.",
      highlights: [
        "TMDB API entegrasyonu ile gerçek film verileri",
        "NestJS ile REST API servisleri ve ilişkisel veri modelleri",
        "Render'a production deploy, Git/GitHub ile ekip çalışması"
      ]
    },
    en: {
      title: "Cinemania — Movie Platform",
      context: "Kodpit Teknoloji · Internship",
      badge: "Internship",
      summary: "A movie platform powered by the TMDB API. I co-developed the React frontend with the intern team and deployed it to production on Render.",
      role: "Full-stack intern · Frontend development, REST API services, deployment",
      problem: "Build a movie platform where users can explore up-to-date movie data, powered by a real API and available in production.",
      solution: "We built the UI with React and Vite and pulled movie data from the TMDB API. During the internship I also built REST API services with NestJS, PostgreSQL and SQLite covering user management and a comment system. The project is live on Render.",
      highlights: [
        "Real movie data through the TMDB API",
        "REST API services and relational data models with NestJS",
        "Production deploy on Render, team work with Git/GitHub"
      ]
    }
  },

  {
    id: "traveltrucks",
    category: "app",
    year: "2026",
    image: "images/projects/traveltrucks.jpg",
    live: "",
    github: "",
    tech: ["React", "Redux Toolkit", "React Router", "Axios", "Render"],
    tr: {
      title: "TravelTrucks — Karavan Kiralama",
      context: "GoIT · Bootcamp projesi",
      badge: "",
      summary: "Karavanları filtreleyip detaylarını inceleyebileceğin ve rezervasyon formu doldurabileceğin karavan kiralama uygulaması.",
      role: "Bireysel proje · Tasarımdan deploy'a tüm frontend",
      problem: "Kullanıcıların karavanları özelliklerine göre filtreleyip karşılaştırabileceği ve kolayca rezervasyon talebi bırakabileceği bir uygulama gerekiyordu.",
      solution: "Global state ve filtreleri Redux Toolkit ile, katalog ve detay sayfalarını React Router ile, API isteklerini Axios ile yönettim. Uygulamayı Render'da yayına aldım.",
      highlights: [
        "Filtrelenebilir karavan kataloğu",
        "Her karavan için detay sayfası",
        "Rezervasyon formu",
        "Redux Toolkit ile düzenli state yönetimi"
      ]
    },
    en: {
      title: "TravelTrucks — Camper Rental",
      context: "GoIT · Bootcamp project",
      badge: "",
      summary: "A camper rental app where you can filter campers, explore detail pages and send a booking request.",
      role: "Solo project · The whole frontend, from design to deployment",
      problem: "Users needed a way to filter and compare campers by their features and easily send a booking request.",
      solution: "I managed global state and filters with Redux Toolkit, catalog and detail pages with React Router, and API requests with Axios. The app is deployed on Render.",
      highlights: [
        "Filterable camper catalog",
        "Detail page for each camper",
        "Booking form",
        "Clean state management with Redux Toolkit"
      ]
    }
  },

  {
    id: "xsportgym",
    category: "web",
    year: "2026",
    image: "images/projects/xsportgym.jpg",
    live: "https://xsportgym.com",
    github: "",
    tech: ["HTML", "CSS", "JavaScript", "Render", "Responsive"],
    tr: {
      title: "Xsportgym — Online Koçluk Sitesi",
      context: "Gerçek müşteri · Antakya",
      badge: "Gerçek müşteri",
      summary: "Antakya'daki bir spor salonunun link-in-bio sayfasının yerini alan, online koçluk paketlerini tanıtan web sitesi.",
      role: "Tek geliştirici · Tasarım, geliştirme, alan adı ve yayın",
      problem: "Salonun tek dijital vitrini bir link-in-bio sayfasıydı. Online koçluk paketlerini profesyonelce anlatacak, telefonda iyi görünen bir siteye ihtiyaç vardı.",
      solution: "Siteyi müşteriyle birlikte tasarlayıp geliştirdim: logonun renklerinde tema, açık/koyu mod ve poster tarzı paket kapakları. Alan adını bağlayıp siteyi xsportgym.com adresinde yayına aldım.",
      highlights: [
        "Gerçek bir müşteriye uçtan uca teslim edildi",
        "Açık / koyu tema desteği",
        "Mobil öncelikli tasarım",
        "Özel alan adı: xsportgym.com"
      ]
    },
    en: {
      title: "Xsportgym — Online Coaching Website",
      context: "Real client · Antakya",
      badge: "Real client",
      summary: "A website for a gym in Antakya that replaced its link-in-bio page and presents its online coaching packages.",
      role: "Sole developer · Design, development, domain and launch",
      problem: "The gym's only online presence was a link-in-bio page. It needed a mobile-friendly site that presents its online coaching packages professionally.",
      solution: "I designed and built the site together with the client: a theme in the logo's colors, light/dark mode and poster-style package covers. I connected the domain and launched it at xsportgym.com.",
      highlights: [
        "Delivered end to end to a real client",
        "Light / dark theme",
        "Mobile-first design",
        "Custom domain: xsportgym.com"
      ]
    }
  },

  {
    id: "run-kulesi",
    category: "cv",
    year: "2026",
    image: "images/projects/run-kulesi.jpg",
    live: "",
    github: "https://github.com/baboopsc/GI_OYUN",
    tech: ["Görüntü İşleme / Computer Vision", "El hareketi tanıma", "Gerçek zamanlı"],
    tr: {
      title: "Rün Kulesi — El Hareketiyle Oynanan Oyun",
      context: "Görüntü İşleme dersi projesi",
      badge: "Ders projesi",
      summary: "Kameradan el işaretlerini gerçek zamanlı tanıyarak büyü yaptığın bir büyücü kule savunma oyunu.",
      role: "Geliştirici · Oyun tasarımı ve hareket tanıma",
      problem: "Ders kapsamında el hareketi tanıma algoritmalarıyla gerçek zamanlı, etkileşimli bir oyun geliştirmek.",
      solution: "Oyuncu, kameraya yaptığı el işaretleriyle büyüler yapıp gelen dalgalara karşı kuleyi savunuyor; dalgalar arasında yardımcılar satın alabiliyor.",
      highlights: [
        "Kameradan gerçek zamanlı el hareketi tanıma",
        "Hareketle tetiklenen büyüler",
        "Dalga savunma sistemi ve dalga arası yardımcı satın alma"
      ]
    },
    en: {
      title: "Rune Tower — A Hand-Gesture Game",
      context: "Image Processing course project",
      badge: "Course project",
      summary: "A wizard tower-defense game where you cast spells by making hand gestures in front of your webcam, recognized in real time.",
      role: "Developer · Game design and gesture recognition",
      problem: "For the course, build a real-time interactive game using hand gesture recognition algorithms.",
      solution: "The player casts spells with hand gestures to defend the tower against incoming waves, and can buy helpers between waves.",
      highlights: [
        "Real-time hand gesture recognition from the webcam",
        "Gesture-triggered spells",
        "Wave defense with helpers bought between waves"
      ]
    }
  },

  {
    id: "sag-fidancilik",
    category: "web",
    year: "2026",
    image: "images/projects/sag-fidancilik.jpg",
    live: "",
    github: "",
    tech: ["HTML", "CSS", "JavaScript", "SEO", "Responsive"],
    tr: {
      title: "Sağ Fidancılık — Fidancılık Web Sitesi",
      context: "Aile işletmesi · Devam ediyor",
      badge: "Devam ediyor",
      summary: "Toptan fidan üreten bir işletme için görsel ağırlıklı, Google'da üst sıralarda çıkmayı hedefleyen kurumsal web sitesi.",
      role: "Tek geliştirici · Tasarım, geliştirme, SEO",
      problem: "İşletmenin eski sitesi güncelliğini yitirmişti; ürünleri doğru görsellerle tanıtacak ve aramalarda iyi sıralanacak yeni bir siteye ihtiyaç vardı.",
      solution: "Fidan çeşitlerini görsellerle öne çıkaran, mobil uyumlu ve SEO odaklı yeni bir site geliştiriyorum. İletişim; WhatsApp ve sosyal medya üzerinden kurgulandı.",
      highlights: [
        "SEO odaklı yapı",
        "Görsel ağırlıklı ürün tanıtımı",
        "Mobil uyumlu tasarım"
      ]
    },
    en: {
      title: "Sağ Fidancılık — Nursery Website",
      context: "Family business · In progress",
      badge: "In progress",
      summary: "A visual-first company website for a wholesale plant nursery, built to rank well on Google.",
      role: "Sole developer · Design, development, SEO",
      problem: "The business's old website was outdated; it needed a new site that presents its plants with accurate photos and ranks well in search.",
      solution: "I'm building a mobile-friendly, SEO-focused site that highlights each plant variety with photos. Contact flows through WhatsApp and social media.",
      highlights: [
        "SEO-focused structure",
        "Visual-first product presentation",
        "Mobile-friendly design"
      ]
    }
  },

  {
    id: "sag-logo",
    category: "app",
    year: "2026",
    image: "images/projects/sag-logo.jpg",
    live: "",
    github: "",
    tech: ["Vite", "JavaScript", "Mobil öncelikli / Mobile-first"],
    tr: {
      title: "Logo Ekleme Aracı",
      context: "Aile işletmesi için araç",
      badge: "",
      summary: "Fotoğraflara işletme logosunu ekleyen, iPhone'da rahat kullanılan basit bir web aracı.",
      role: "Tek geliştirici",
      problem: "İşletme sahibinin sosyal medyaya yüklediği fotoğraflara her seferinde logoyu kolayca ekleyebilmesi gerekiyordu; çoğunlukla telefondan.",
      solution: "Fotoğrafı yükle, logoyu sürükle, boyutunu, saydamlığını ve gölgesini ayarla, indir. Birkaç hazır logo rengi var ve ayarlar bir sonraki kullanım için hatırlanıyor.",
      highlights: [
        "Mobil öncelikli, iOS'ta rahat kullanım",
        "Sürükle, boyutlandır, saydamlık ve gölge ayarı",
        "Ayarları hatırlama"
      ]
    },
    en: {
      title: "Logo Stamp Tool",
      context: "Tool for a family business",
      badge: "",
      summary: "A simple web tool that adds a business logo to photos, designed to be easy to use on an iPhone.",
      role: "Sole developer",
      problem: "The business owner needed an easy way to add the logo to the photos he posts on social media, mostly from his phone.",
      solution: "Upload a photo, drag the logo, adjust size, opacity and shadow, then download. A few preset logo colors are included and settings are remembered for next time.",
      highlights: [
        "Mobile-first, comfortable on iOS",
        "Drag, resize, opacity and shadow controls",
        "Remembers your settings"
      ]
    }
  }
];

/* =========================================================
   MÜŞTERİ YORUMLARI
   Sadece GERÇEK yorumları ekle. Liste boşken bölüm gizli kalır.
   Örnek:
   {
     name: "Ad Soyad",
     tr: { role: "Unvan, Firma", quote: "Yorum metni" },
     en: { role: "Title, Company", quote: "Quote text" }
   }
   ========================================================= */
const TESTIMONIALS = [];
