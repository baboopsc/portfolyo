# Ali Muhsin Mışraklı — Portfolio

Personal portfolio website of **Ali Muhsin Mışraklı**, Junior Full Stack Developer (Denizli, Türkiye · open to remote).

A single-page site built from rounded, slide-like panels in a blue + butter-yellow palette, built with plain HTML, CSS and JavaScript (no framework, no build step).

## Features

- Bilingual: Turkish / English toggle (remembers the choice)
- Sections: hero, about, skills, projects, experience & education, certifications, process, testimonials, contact
- Filterable project cards with a detail dialog for each project
- Fully responsive, mobile menu, scroll-reveal animations (respects `prefers-reduced-motion`)
- SEO basics: meta description, Open Graph tags, JSON-LD `Person` schema, `robots.txt`, custom 404 page

## Project structure

```
├── index.html
├── 404.html
├── favicon.svg
├── robots.txt
├── css/style.css
├── js/
│   ├── i18n.js       # English translations (Turkish lives in index.html)
│   ├── projects.js   # Projects + testimonials data
│   └── main.js       # Language, projects, dialog, menu, animations, form
├── images/
│   ├── ben.jpg                              # profile photo
│   ├── og-image.png                         # link preview image
│   └── projects/                            # project screenshots
└── assets/Ali_Muhsin_Misrakli_CV.pdf
```

## Run locally

Open `index.html` in a browser, or use the **Live Server** extension in VS Code.

## Deploy (Render)

New → **Static Site** → connect this repo → Build command: *(empty)* → Publish directory: `.`

---

### Kısa notlar (TR)

- **Fotoğraf:** Kendi fotoğrafını `images/ben.jpg` adıyla koy. Dik (portre) bir fotoğraf en iyi sonucu verir; arka planını silmene gerek yok.
- **Proje görselleri:** `images/projects/` içine `cinemania.jpg`, `traveltrucks.jpg`, `xsportgym.jpg`, `run-kulesi.jpg`, `sag-fidancilik.jpg`, `sag-logo.jpg`. Önerilen oran 16:10, örneğin 1600×1000.
- **Proje eklemek veya düzenlemek:** `js/projects.js`
- **Metinler:** Türkçeler `index.html` içinde, İngilizceler `js/i18n.js` içinde.
