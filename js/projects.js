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
    live: "https://cinemania-frontend.onrender.com/",
    github: "https://github.com/baboopsc/cinemania-fullstack",
    tech: ["React", "Vite", "TMDB API", "NestJS", "TypeORM", "PostgreSQL", "SQLite"],
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
    live: "https://travel-trucks-silk-seven.vercel.app/",
    github: "https://github.com/baboopsc/TravelTrucks",
    tech: ["React", "Redux Toolkit", "React Router", "Axios", "Vite"],
    tr: {
      title: "TravelTrucks — Karavan Kiralama",
      context: "GoIT · Bootcamp projesi",
      badge: "",
      summary: "Karavanları filtreleyip detaylarını inceleyebileceğin ve rezervasyon formu doldurabileceğin karavan kiralama uygulaması.",
      role: "Bireysel proje · Tasarımdan deploy'a tüm frontend",
      problem: "Kullanıcıların karavanları özelliklerine göre filtreleyip karşılaştırabileceği ve kolayca rezervasyon talebi bırakabileceği bir uygulama gerekiyordu.",
      solution: "Global state ve filtreleri Redux Toolkit ile, katalog ve detay sayfalarını React Router ile, API isteklerini Axios ile yönettim ve uygulamayı yayına aldım.",
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
      solution: "I managed global state and filters with Redux Toolkit, catalog and detail pages with React Router, and API requests with Axios, then deployed the app.",
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
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Render"],
    tr: {
      title: "Xsportgym — Online Koçluk Sitesi",
      context: "Gerçek müşteri · Antakya",
      badge: "Gerçek müşteri",
      summary: "Antakya'daki bir spor salonunun link-in-bio sayfasının yerini alan, online koçluk paketlerini tanıtan web sitesi.",
      role: "Tek geliştirici · Tasarım, geliştirme, alan adı ve yayın",
      problem: "Salonun tek dijital vitrini bir link-in-bio sayfasıydı. Online koçluk paketlerini profesyonelce anlatacak, telefonda iyi görünen bir siteye ihtiyaç vardı.",
      solution: "Siteyi müşteriyle birlikte tasarlayıp Node.js, Express ve PostgreSQL ile geliştirdim: logonun renklerinde tema, açık/koyu mod, poster tarzı paket kapakları ve içerikleri yönetmek için bir admin paneli. Alan adını bağlayıp siteyi xsportgym.com adresinde yayına aldım.",
      highlights: [
        "Gerçek bir müşteriye uçtan uca teslim edildi",
        "Admin paneli: bcrypt ile şifre, HttpOnly çerez, giriş deneme sınırı",
        "Açık / koyu tema ve mobil öncelikli tasarım",
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
      solution: "I designed the site together with the client and built it with Node.js, Express and PostgreSQL: a theme in the logo's colors, light/dark mode, poster-style package covers and an admin panel to manage content. I connected the domain and launched it at xsportgym.com.",
      highlights: [
        "Delivered end to end to a real client",
        "Admin panel: bcrypt passwords, HttpOnly cookies, login rate limiting",
        "Light / dark theme and mobile-first design",
        "Custom domain: xsportgym.com"
      ]
    }
  },

  {
    id: "sag-fidancilik",
    category: "web",
    year: "2026",
    image: "images/projects/sag-fidancilik.png",
    live: "https://fidan-template.onrender.com/",
    github: "https://github.com/baboopsc/fidan--template",
    tech: ["Vite", "JavaScript", "Three.js", "SEO", "Responsive"],
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
