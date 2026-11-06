/* =========================================================
   Ali Muhsin Mışraklı — Portfolio · main.js
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Güvenli localStorage ---------- */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* yok say */ } }
  };

  const escapeHtml = (str = "") =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* =========================================================
     DİL (TR / EN)
     ========================================================= */
  const i18nEls = $$("[data-i18n]");
  // Türkçe metinleri sayfadan kaydet (TR'ye geri dönerken kullanılacak)
  i18nEls.forEach((el) => { el.dataset.tr = el.innerHTML; });

  const initialLang =
    store.get("lang") ||
    ((navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en");

  let lang = initialLang;

  function applyLang(next) {
    lang = next === "en" ? "en" : "tr";
    document.documentElement.lang = lang;

    i18nEls.forEach((el) => {
      const key = el.dataset.i18n;
      el.innerHTML = lang === "en" && I18N_EN[key] ? I18N_EN[key] : el.dataset.tr;
    });

    $$(".lang-toggle span").forEach((s) => s.classList.toggle("is-active", s.dataset.lang === lang));
    $("#langToggle").setAttribute("aria-label", UI_TEXT[lang].lang);
    $("#modalClose").setAttribute("aria-label", UI_TEXT[lang].close);

    renderProjects();
    renderTestimonials();
    store.set("lang", lang);
  }

  $("#langToggle").addEventListener("click", () => applyLang(lang === "tr" ? "en" : "tr"));

  /* =========================================================
     YER TUTUCU GÖRSELLER (fotoğraf henüz eklenmediyse)
     ========================================================= */
  function photoPlaceholder(file) {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800">' +
      '<rect width="600" height="800" fill="#d7dcf0"/>' +
      '<circle cx="300" cy="300" r="110" fill="#5566a3" opacity=".55"/>' +
      '<path d="M90 800 C90 590 185 470 300 470 C415 470 510 590 510 800 Z" fill="#5566a3" opacity=".55"/>' +
      '<rect x="150" y="640" width="300" height="56" rx="28" fill="#38457a"/>' +
      '<text x="300" y="676" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#f1df9f">' +
      escapeHtml(file) + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function setupPhoto(img) {
    const useFallback = () => {
      if (img.dataset.fallback) return;
      img.dataset.fallback = "1";
      img.src = photoPlaceholder(img.dataset.file || "");
    };
    img.addEventListener("error", useFallback);
    if (img.complete && img.naturalWidth === 0) useFallback();
  }
  $$('img[data-placeholder="photo"]').forEach(setupPhoto);

  function setupProjectImage(img, label) {
    const swap = () => {
      if (!img.isConnected) return;
      const ph = document.createElement("div");
      ph.className = "project-ph";
      ph.setAttribute("aria-hidden", "true");
      ph.textContent = label;
      img.replaceWith(ph);
    };
    img.addEventListener("error", swap, { once: true });
    if (img.complete && img.naturalWidth === 0) swap();
  }

  /* =========================================================
     PROJELER
     ========================================================= */
  const grid = $("#projectGrid");
  let activeFilter = "all";

  function shortName(title) {
    return title.split("—")[0].trim();
  }

  function renderProjects() {
    const t = UI_TEXT[lang];

    grid.innerHTML = PROJECTS.map((p, i) => {
      const d = p[lang];
      const no = String(i + 1).padStart(2, "0");
      return `
        <article class="panel project-card reveal is-visible" data-category="${p.category}" data-id="${p.id}">
          <header class="project-head">
            <span class="display project-no">${t.project} ${no}</span>
            ${d.badge ? `<span class="project-badge">${escapeHtml(d.badge)}</span>` : ""}
          </header>
          <div class="project-media">
            <img src="${p.image}" alt="${escapeHtml(d.title)}" loading="lazy" data-label="${escapeHtml(shortName(d.title))}">
          </div>
          <p class="project-meta">${escapeHtml(d.context)} · ${p.year}</p>
          <h3 class="project-title">${escapeHtml(d.title)}</h3>
          <p class="project-summary">${escapeHtml(d.summary)}</p>
          <ul class="tags">${p.tech.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
          <div class="project-actions">
            <button class="btn btn--dark" type="button" data-open="${p.id}">${t.details}</button>
            ${p.live ? `<a class="btn btn--outline" href="${p.live}" target="_blank" rel="noopener">${t.live}</a>` : ""}
            ${p.github ? `<a class="btn btn--outline" href="${p.github}" target="_blank" rel="noopener">${t.code}</a>` : ""}
          </div>
        </article>`;
    }).join("");

    $$(".project-media img", grid).forEach((img) => setupProjectImage(img, img.dataset.label));
    applyFilter(activeFilter);

    const stat = $("#statProjects");
    if (stat) stat.textContent = PROJECTS.length;
  }

  function applyFilter(filter) {
    activeFilter = filter;
    $$(".filter").forEach((b) => {
      const on = b.dataset.filter === filter;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    });
    let v = 0;
    $$(".project-card", grid).forEach((card) => {
      const hidden = filter !== "all" && card.dataset.category !== filter;
      card.classList.toggle("is-hidden", hidden);
      if (hidden) return;
      // Görünen kartlara dama düzeninde renk ver (masaüstü 2 sütun, mobil tek sütun)
      card.classList.toggle("is-alt", (Math.floor(v / 2) + (v % 2)) % 2 === 1);
      card.classList.toggle("is-alt-mobile", v % 2 === 1);
      v++;
    });
  }

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (btn) applyFilter(btn.dataset.filter);
  });

  /* ---------- Proje detay penceresi ---------- */
  const modal = $("#projectModal");
  const modalBody = $("#modalBody");

  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    const d = p[lang];
    const t = UI_TEXT[lang];

    modalBody.innerHTML = `
      <div class="modal-media">
        <img src="${p.image}" alt="${escapeHtml(d.title)}">
      </div>
      <div class="modal-content">
        <p class="project-meta">${escapeHtml(d.context)} · ${p.year}</p>
        <h2 id="modalTitle">${escapeHtml(d.title)}</h2>
        <div>
          <h3>${t.role}</h3>
          <p>${escapeHtml(d.role)}</p>
        </div>
        <div class="modal-cols">
          <div><h3>${t.problem}</h3><p>${escapeHtml(d.problem)}</p></div>
          <div><h3>${t.solution}</h3><p>${escapeHtml(d.solution)}</p></div>
        </div>
        <div>
          <h3>${t.highlights}</h3>
          <ul class="bullet-list">${d.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>${t.tech}</h3>
          <ul class="tags">${p.tech.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </div>
        <div class="project-actions">
          ${p.live ? `<a class="btn btn--dark" href="${p.live}" target="_blank" rel="noopener">${t.live}</a>` : ""}
          ${p.github ? `<a class="btn btn--outline" href="${p.github}" target="_blank" rel="noopener">${t.code}</a>` : ""}
        </div>
      </div>`;

    setupProjectImage($(".modal-media img", modalBody), shortName(d.title));

    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.body.classList.add("no-scroll");
    modal.scrollTop = 0;
  }

  function closeModal() {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openProject(btn.dataset.open);
  });
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); }); // dışına tıklayınca kapan
  modal.addEventListener("close", () => document.body.classList.remove("no-scroll"));

  /* =========================================================
     YORUMLAR
     ========================================================= */
  function renderTestimonials() {
    const section = $("#testimonials");
    if (!section || !Array.isArray(TESTIMONIALS) || TESTIMONIALS.length === 0) return;
    section.hidden = false;
    $("#testiGrid").innerHTML = TESTIMONIALS.map((x) => {
      const d = x[lang] || x.tr;
      return `<figure class="testi">
          <blockquote>${escapeHtml(d.quote)}</blockquote>
          <figcaption>${escapeHtml(x.name)} · ${escapeHtml(d.role)}</figcaption>
        </figure>`;
    }).join("");
  }

  /* =========================================================
     ÜST MENÜ
     ========================================================= */
  const header = $("#siteHeader");
  const nav = $("#nav");
  const menuBtn = $("#menuToggle");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  }
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Hangi bölümdeysen menüde o link altı çizili olsun
  if ("IntersectionObserver" in window) {
    const links = $$("a", nav);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["hero", "about", "skills", "experience", "projects", "contact"].forEach((id) => {
      const s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }

  /* =========================================================
     KAYDIRINCA BELİRME
     ========================================================= */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* =========================================================
     İLETİŞİM FORMU → e-posta uygulamasını açar
     ========================================================= */
  const form = $("#contactForm");
  const note = $("#formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!name || !email || !message) {
      note.textContent = UI_TEXT[lang].formError;
      note.classList.add("is-error");
      return;
    }
    note.classList.remove("is-error");
    note.innerHTML = lang === "en" && I18N_EN["form.note"] ? I18N_EN["form.note"] : note.dataset.tr;

    const subject = `${UI_TEXT[lang].mailSubject} — ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href =
      "mailto:uyaali52@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* ---------- Yıl ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Başlat ---------- */
  applyLang(initialLang);
})();
