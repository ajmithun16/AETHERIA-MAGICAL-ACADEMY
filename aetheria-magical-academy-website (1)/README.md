# 🏰 AETHERIA — Die Akademie der Magie

> *Wissen. Mut. Magie.* — Knowledge. Courage. Magic.

A cinematic, bilingual (German / English) website for a fictional magical university hidden in the Bavarian Alps. Built as a college project to showcase German culture, interactive web design, and immersive storytelling.

![AETHERIA Hero](public/img/hero-castle.jpg)

---

## ✨ Features

- **Cinematic Homepage** — Parallax castle artwork, staged entrance animations, floating golden particles, ambient fog
- **Bilingual System** — Full German ↔ English switch (zero external libraries, instant, persisted)
- **Four Magical Houses** — Drachenfels, Silberwald, Nachtkrähe, Grünquell with unique heraldic artwork
- **Interactive Sorting Quiz** — 5-question personality quiz assigns users to a house
- **12 Pop-Culture Professors** — Walter White, Tony Stark, Loki, Daemon Targaryen, Jackie Chan, Harvey Specter, and more — each with portrait, biography, and interactive modal dossier
- **German Culture & Traditions** — Traditional food cards with detailed culinary modals, Oktoberfest, Christmas Markets, Lantern Festival, Schuhplattler
- **Interactive Campus Map** — AI-illustrated isometric fantasy map with drag, zoom, and 8 clickable locations
- **Admissions Form** — Working bilingual form with validation, animated sealing, provisional acceptance letter
- **Secret Archives** — Hidden rotating sigil with a riddle about the legendary Fifth Tower
- **Ambient Audio** — Synthesised WebAudio soundscape (warm pad + wind-bell chimes), off by default
- **Magical Cursor** — Golden glow with trailing ember particles
- **3D Card Tilt** — Mouse-reactive parallax on all interactive cards
- **Fully Responsive** — Desktop, tablet, and mobile layouts
- **Accessibility** — Keyboard navigation, reduced-motion support, semantic HTML, proper ARIA labels

---

## 🛠️ Technologies Used

| Category | Technology |
|---|---|
| **Framework** | [React](https://react.dev/) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 5.9 |
| **Build Tool** | [Vite](https://vite.dev/) 7.3 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4 + Custom CSS |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Utilities** | clsx, tailwind-merge |
| **Audio** | Native Web Audio API (no external files) |
| **Fonts** | Google Fonts (Cormorant Garamond, Inter, UnifrakturMaguntia) |
| **Images** | AI-generated artwork + Pexels photography + Wikimedia Commons portraits |
| **Build Output** | vite-plugin-singlefile (compiles to one HTML file) |

### There is NO:
- Backend server
- Database
- External API
- Authentication
- Environment variables or secrets

This is a **100% static frontend** application.

---

## 📁 Project Structure

```
aetheria/
├── public/
│   └── img/                    # AI-generated artwork (10 images)
│       ├── hero-castle.jpg     # Hero section — cinematic castle
│       ├── castle-main.jpg     # Academy section — main castle
│       ├── campus-map.jpg      # Campus — illustrated bird's-eye map
│       ├── forbidden-forest.jpg# Campus — enchanted forest
│       ├── house-drachenfels.jpg
│       ├── house-silberwald.jpg
│       ├── house-nachtkraehe.jpg
│       ├── house-gruenquell.jpg
│       ├── regalia-main.jpg    # Student Life — ceremonial robes
│       └── regalia-detail.jpg  # Student Life — insignia details
├── src/
│   ├── components/
│   │   ├── Academy.tsx         # History, timeline, secrets
│   │   ├── Admissions.tsx      # Application form
│   │   ├── Archives.tsx        # Secret fifth-tower mystery
│   │   ├── Campus.tsx          # Interactive zoomable map
│   │   ├── Credits.tsx         # Creator credits
│   │   ├── Footer.tsx          # Footer
│   │   ├── Hero.tsx            # Cinematic homepage hero
│   │   ├── Houses.tsx          # Four houses + sorting quiz
│   │   ├── Navbar.tsx          # Two-tier navigation bar
│   │   ├── Professors.tsx      # Faculty grid + profile modals
│   │   ├── StudentLife.tsx     # Regalia, food, festivals, clubs
│   │   └── ui.tsx              # Shared UI: Reveal, TiltCard, Particles, CountUp, etc.
│   ├── utils/
│   │   └── cn.ts               # clsx + tailwind-merge utility
│   ├── App.tsx                 # Root component
│   ├── audio.ts                # WebAudio ambient engine
│   ├── data.ts                 # All content: houses, professors, food, campus, etc.
│   ├── i18n.tsx                # Complete German/English translation dictionary
│   ├── index.css               # Tailwind + custom animations/theme
│   └── main.tsx                # React entry point
├── index.html                  # HTML shell
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite + Tailwind + singlefile plugin
├── .gitignore
├── .env.example                # (Empty — no secrets needed)
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or higher**
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/aetheria.git
cd aetheria

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

This compiles the entire application into `dist/index.html` — a single self-contained HTML file (~530 KB, ~150 KB gzipped).

The `dist/img/` folder contains the local artwork and must be served alongside the HTML.

### Preview the Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://www.netlify.com/) → "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/) → "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite. Confirm:
   - **Framework Preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click "Deploy"

### GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### Manual / Static Hosting

Simply upload the contents of the `dist/` folder to any static hosting provider (Apache, Nginx, AWS S3, Firebase Hosting, etc.). No server-side processing is required.

---

## 🎓 The Faculty

| Professor | Subject | Portrayed by | From |
|---|---|---|---|
| Prof. Dr. Walter White | Chemistry | Bryan Cranston | Breaking Bad |
| Prof. Tony Stark | Physics | Robert Downey Jr. | Iron Man / Marvel |
| Prof. Wanda Maximoff | Dark Magic | Elizabeth Olsen | Marvel |
| Prof. Severus Snape | Potions | Alan Rickman | Harry Potter |
| Prof. Alan Garner | Mathematics | Zach Galifianakis | The Hangover |
| Prof. Patrick Jane | Psychology | Simon Baker | The Mentalist |
| Prof. Harvey Specter | Law | Gabriel Macht | Suits |
| Prof. Jackie Chan | Martial Arts | Jackie Chan | Karate Kid |
| Prof. Sergio Marquina | Mastermind Studies | Álvaro Morte | Money Heist |
| Prof. Daemon Targaryen | Sword Fighting | Matt Smith | House of the Dragon |
| Prof. Loki Laufeyson | Spells & Time Control | Tom Hiddleston | Loki / Marvel |
| Prof. Charles Xavier | Mutation & Evolution | James McAvoy | X-Men: First Class |

---

## 🏠 The Four Houses

| House | Colours | Heraldic Beast | Values |
|---|---|---|---|
| **Drachenfels** | Burgundy & Gold | Dragon | Courage, Ambition, Determination, Leadership |
| **Silberwald** | Silver & Midnight Blue | Owl | Intelligence, Curiosity, Creativity, Wisdom |
| **Nachtkrähe** | Black & Deep Purple | Raven | Mystery, Strategy, Independence, Observation |
| **Grünquell** | Forest Green & Antique Gold | Stag | Loyalty, Patience, Kindness, Harmony |

---

## 👥 Creators

**KEVIN · PIYUSH · YUVRAJ · PRISCILLA · ANUSH · MITHUN**

*Crafted with imagination, creativity and a touch of magic.*

---

## 📝 License

This is a college project. All fictional content (professors, houses, stories) is original.

Professor portraits are sourced from Wikimedia Commons (CC-BY / public domain) and Wikipedia (fair use).
Photography from [Pexels](https://www.pexels.com/) (free license).

MIT License — see [LICENSE](LICENSE) for details.

---

## ⚡ Quick Reference

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

*Verborgen zwischen den majestätischen Gipfeln der Bayerischen Alpen liegt Aetheria – eine Akademie, in der Wissen auf Magie trifft und das Unmögliche Wirklichkeit wird.*
