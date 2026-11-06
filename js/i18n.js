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
  "about.p1": "I live in Denizli and I'm in my final year of Computer Engineering at Pamukkale University. My favorite part of coding is the moment an idea in my head turns into something that actually works. If a button fetches the right data and the page looks perfect on a phone too, it was a good day.",
  "about.p2": "I believe the best way to learn is to build, so there's always a project on my desk next to my classes. During my internship at Kodpit I wrote APIs with NestJS, and we shipped a movie platform as a team. I delivered a complete website to a gym in Antakya, and right now I'm building a site for a plant nursery.",
  "about.p3": "I use AI tools every day, but I never let go of the wheel: I read and test the code they produce, and I don't ship anything I don't understand. Now I want to join a team where I can keep growing.",
  "about.status": "Open to internships &amp; junior roles",

  "stats.repos": "GitHub repos",
  "stats.projects": "Featured projects",
  "stats.hours": "Hours of full-stack training",
  "stats.grad": "Graduation",

  "skills.title": "My Skills",
  "skills.tech": "Technical",
  "skills.techSub": "Technologies I use every day",
  "skills.soft": "Soft skills",
  "skills.softSub": "What kind of teammate I am",
  "skills.lang": "Languages",
  "skills.langSub": "Languages I speak",
  "skills.db": "Databases",
  "skills.tools": "Tools",
  "soft.1t": "Client communication",
  "soft.1d": "I listen to the need and turn it into a clear plan.",
  "soft.2t": "End-to-end delivery",
  "soft.2d": "I own the work from design to launch.",
  "soft.3t": "Team work",
  "soft.3d": "I make clean, regular, readable Git commits.",
  "soft.4t": "Responsible AI use",
  "soft.4d": "I never ship AI output without reading and testing it.",
  "lang.trName": "Turkish",
  "lang.trLevel": "Native",
  "lang.enName": "English",

  "exp.title": "Experience &amp; Education",
  "exp.certs": "certifications",
  "cert.view": "View",
  "cert.verify": "Verify ↗",
  "cert.goit.date": "Oct 2026",
  "cert.goit.note": "~690 hours · HTML/CSS, JavaScript, React, Node.js, TypeScript · 3 team projects",
  "cert.ibm.date": "Nov 2026",
  "exp.kodpit.tag": "internship",
  "exp.kodpit.date": "Jul 2026 — Aug 2026",
  "exp.kodpit.role": "Full-Stack Developer Intern",
  "exp.kodpit.b1": "Built RESTful API services with NestJS, PostgreSQL and SQLite, covering user management, a comment system and relational data models.",
  "exp.kodpit.b2": "Co-developed the frontend of Cinemania, a movie platform, with React, Vite and the TMDB API.",
  "exp.kodpit.b3": "Deployed the project to production on Render and managed version control with Git/GitHub.",
  "exp.goit.tag": "bootcamp",
  "exp.goit.date": "Jan 2026 — Sep 2026",
  "exp.goit.desc": "~690 hours of training in HTML/CSS, JavaScript, React, Node.js and TypeScript, plus 3 team projects. TravelTrucks came out of it.",
  "exp.pau.tag": "degree",
  "exp.pau.date": "Sep 2023 — Jun 2027 (expected)",
  "exp.pau.role": "B.Sc. Computer Engineering",
  "exp.pau.place": "Pamukkale University · Denizli",
  "exp.pau.desc": "Final year. Alongside courses like image processing and computer networks, I build my own projects.",

  "projects.title": "MY PROJECTS",
  "projects.lead": "Selected projects from my internship, bootcamp and real client work. Live sites and source code are linked below.",
  "projects.more": "40+ more repos on GitHub",
  "filter.all": "All",
  "filter.app": "Web Apps",
  "filter.web": "Websites",

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
