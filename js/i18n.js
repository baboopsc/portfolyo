/* =========================================================
   ÇEVİRİLER
   Türkçe metinler doğrudan index.html içinde duruyor.
   Burada sadece İngilizce karşılıkları var.
   Bir metni değiştirirsen: Türkçesini index.html'de,
   İngilizcesini aşağıda aynı anahtarla (data-i18n) değiştir.
   ========================================================= */

const I18N_EN = {
  "skip": "Skip to content",

  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "hero.kicker": "Denizli · Open to remote",
  "hero.cta1": "My Projects",
  "hero.cta2": "Download CV",

  "toc.title": "TABLE OF<br>CONTENTS",
  "toc.about": "about me",
  "toc.skills": "skills",
  "toc.exp": "experience",
  "toc.projects": "projects",
  "toc.contact": "contact",

  "about.title": "Hello,<br><span class=\"hl\">I'm Ali!</span>",
  "about.p1": "I'm a final-year Computer Engineering student at Pamukkale University (graduating June 2027). I build full-stack web applications with React, Redux, Node.js, NestJS and PostgreSQL.",
  "about.p2": "During my internship at Kodpit Teknoloji I built RESTful API services and a React frontend, and deployed the project to production on Render. I trained at the GoIT Full Stack bootcamp and delivered a website end to end for a real client.",
  "about.p3": "I use AI coding tools every day, and I always read and test their output before shipping.",
  "about.status": "Open to internships &amp; junior roles",

  "stats.repos": "GitHub repos",
  "stats.projects": "Featured projects",
  "stats.client": "Real client project",
  "stats.grad": "Graduation",

  "skills.title": "My Skills",
  "skills.tech": "technical",
  "skills.soft": "soft skills",
  "skills.lang": "languages",
  "skills.db": "Databases",
  "skills.tools": "Tools",
  "soft.1": "Direct client communication: turning needs into a clear plan",
  "soft.2": "End-to-end delivery: from design to launch",
  "soft.3": "Team work: clean, regular Git commits",
  "soft.4": "Responsible AI use: reading and testing its output",
  "lang.tr": "Turkish — native",
  "lang.en": "English — B1 (intermediate)",

  "exp.title": "Experience &amp; Education",
  "exp.certs": "certifications",
  "exp.kodpit.tag": "internship",
  "exp.kodpit.date": "Jul 2026 — Aug 2026",
  "exp.kodpit.role": "Full-Stack Developer Intern",
  "exp.kodpit.b1": "Built RESTful API services with NestJS, PostgreSQL and SQLite, covering user management, a comment system and relational data models.",
  "exp.kodpit.b2": "Co-developed the frontend of Cinemania, a movie platform, with React, Vite and the TMDB API.",
  "exp.kodpit.b3": "Deployed the project to production on Render and managed version control with Git/GitHub.",
  "exp.goit.tag": "bootcamp",
  "exp.goit.date": "Jan 2026 — Sep 2026",
  "exp.goit.desc": "Full-stack web development training focused on React, Redux and Node.js. Projects like TravelTrucks came out of it.",
  "exp.pau.tag": "degree",
  "exp.pau.date": "Sep 2023 — Jun 2027 (expected)",
  "exp.pau.role": "B.Sc. Computer Engineering",
  "exp.pau.place": "Pamukkale University · Denizli",
  "exp.pau.desc": "Final year. Alongside courses like image processing and computer networks, I build my own projects.",

  "projects.title": "MY<br>PROJECTS",
  "projects.lead": "Selected projects from my internship, bootcamp, coursework and real client work.",
  "projects.more": "40+ more repos on GitHub",
  "filter.all": "All",
  "filter.app": "Web Apps",
  "filter.web": "Websites",
  "filter.cv": "Computer Vision",

  "process.title": "How I Work",
  "process.1.t": "Discovery",
  "process.1.d": "I clarify the need, the users and the expectations, and write the requirements down.",
  "process.2.t": "Planning",
  "process.2.d": "I design the page structure, data model and API endpoints, and split the work into small tasks.",
  "process.3.t": "Development",
  "process.3.d": "I build the UI with React and the API with Node.js / NestJS, committing regularly with Git.",
  "process.4.t": "Test &amp; Launch",
  "process.4.d": "I test on every screen size, deploy to Render and improve based on feedback.",

  "testi.title": "Kind Words",

  "contact.title": "LET'S WORK<br>TOGETHER?",
  "contact.lead": "Write to me about an internship, a junior role or a freelance project.",
  "contact.mail": "Email",
  "contact.locVal": "Denizli, Türkiye · Open to remote",

  "form.title": "Send a message",
  "form.name": "Your name",
  "form.email": "Your email",
  "form.msg": "Your message",
  "form.send": "Send",
  "form.note": "Pressing Send opens your email app with the message ready.",

  "footer.top": "Back to top ↑"
};

/* JavaScript içinde üretilen metinler (proje kartları, pencere vb.) */
const UI_TEXT = {
  tr: {
    project: "Proje",
    details: "Detay",
    live: "Canlı Site ↗",
    code: "GitHub ↗",
    problem: "Problem",
    solution: "Çözüm",
    highlights: "Öne çıkanlar",
    tech: "Teknolojiler",
    role: "Rolüm",
    close: "Kapat",
    formError: "Lütfen tüm alanları doldur.",
    mailSubject: "Portfolyo sitenden mesaj",
    lang: "Dili değiştir"
  },
  en: {
    project: "Project",
    details: "Details",
    live: "Live Site ↗",
    code: "GitHub ↗",
    problem: "Problem",
    solution: "Solution",
    highlights: "Highlights",
    tech: "Tech stack",
    role: "My role",
    close: "Close",
    formError: "Please fill in all fields.",
    mailSubject: "Message from your portfolio",
    lang: "Change language"
  }
};
