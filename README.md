# Basireddy Yashwanth Reddy — Cinematic Portfolio

> A dark, editorial, cinematic personal portfolio built for **Basireddy Yashwanth Reddy** — Computer Science Undergraduate building software and exploring data- and AI-driven solutions.

---

## ✨ Features & Architecture

- **Visual Aesthetic**: Premium dark editorial experience (`#07070a`) with warm ivory typography (`#f3efe6`), amber/gold lighting accents (`#ff5a0a`, `#ffb52e`), and an electric yellow (`#f5e642`) concluding contact section.
- **Kinetic Scroll Scenes**:
  - **The Leap (Hero)**: 270vh scroll canvas featuring a tumbling stick figure SVG, conic/radial golden light beam, and kinetic typography separation (`FALL` $\leftrightarrow$ `LET GO`).
  - **The Noise (Skills)**: 3 continuous alternating marquee tiers with hover pause, central solar orb, and circular rotating SVG text ring.
  - **Selected Work**: Accordion project cards utilizing zero-reflow CSS Grid height expansion (`grid-template-rows: 0fr -> 1fr`).
  - **Open To**: 5 numbered career opportunities with golden hover states, interest tags, and arrow micro-interactions.
  - **Rise (Ascension)**: 260vh upward journey featuring an ascending figure, vertical laser beam, and 4-phase sequential storytelling typography.
  - **About**: Editorial profile with oversized academic metrics (`8.4 CGPA`, `97.7%`, `9.3 SSC`), education cards, and expressive typography clouds.
  - **The Portal**: Authentic portrait framed within an architectural pulsing arch gate, Decode Labs internship card, and 6 verified certifications.
  - **Contact & Footer**: Electric yellow climax with oversized direct mailto link, interactive clipboard copy actions, verified GitHub and LinkedIn rows, and smooth back-to-top navigation.
- **Global Foundation**:
  - Top scroll progress bar (`#bar`).
  - 60 FPS ambient ember particle canvas (`#em`) with visibility detection.
  - Spring-interpolated cursor lens peek tracker (`[data-peek]`).
  - Fixed top navbar with `mix-blend-mode: difference` for legible automatic contrast across dark and yellow sections.
  - Fullscreen circular `clip-path` expandable navigation menu.
  - Full `prefers-reduced-motion` compliance across all animations and transitions.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Typography**: Google Fonts — [Archivo](https://fonts.google.com/specimen/Archivo) & [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)
- **Styling**: Pure Modern CSS (CSS Grid, Variables, Keyframe Animations, Clamp fluid typography)
- **Motion**: Hardware-accelerated CSS Transforms (`translate3d`), requestAnimationFrame throttling, IntersectionObserver API

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- [npm](https://www.npmjs.com/)

### 2. Installation
```bash
# Clone the repository or navigate to project directory
cd d:/Portfolio

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:3000/`.

### 4. Production Build
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory, ready to deploy.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Click **Deploy**.

### Deploy to Netlify
1. Run `npm run build` locally.
2. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your repository for automatic continuous deployments.

### Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.ts`, set `base: '/<repository-name>/'`.
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📂 Project Structure

```
d:/Portfolio/
├── public/
│   ├── favicon.svg             # Custom YR monogram vector favicon
│   └── profile.jpg             # Authentic portrait of Yashwanth Reddy
├── src/
│   ├── components/
│   │   ├── foundation/
│   │   │   ├── Container.tsx         # Layout wrapper
│   │   │   ├── CursorPeek.tsx        # Spring cursor peek lens
│   │   │   ├── FullscreenMenu.tsx    # Circular clip-path overlay menu
│   │   │   ├── Navbar.tsx            # Fixed top navbar with mix-blend-mode
│   │   │   ├── ParticleCanvas.tsx    # Ambient ember canvas
│   │   │   └── ScrollProgressBar.tsx # Top progress bar
│   │   └── sections/
│   │       ├── TheLeap.tsx / .css    # Section 1: Hero
│   │       ├── TheNoise.tsx / .css   # Section 2: Skills
│   │       ├── SelectedWork.tsx / .css # Section 3: Projects
│   │       ├── OpenTo.tsx / .css     # Section 4: Opportunities
│   │       ├── Rise.tsx / .css       # Section 5: Ascension
│   │       ├── About.tsx / .css      # Section 6: Profile & Education
│   │       ├── ThePortal.tsx / .css  # Section 7: Experience & Arch Gate
│   │       └── Contact.tsx / .css    # Section 8: Electric Yellow Climax & Footer
│   ├── data/
│   │   └── portfolioData.ts          # Centralized data model & content
│   ├── hooks/
│   │   ├── useIntersectionReveal.ts  # Scroll-reveal intersection observer
│   │   └── useReducedMotion.ts       # prefers-reduced-motion detector
│   ├── styles/
│   │   └── index.css                 # Global CSS variables & typography
│   ├── types/
│   │   └── index.ts                  # TypeScript definitions
│   ├── App.tsx                       # Root section orchestrator
│   └── main.tsx                      # Entry point
├── index.html                        # Meta tags, fonts, Open Graph
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 👤 Author

**Basireddy Yashwanth Reddy**  
Computer Science Undergraduate · Hyderabad, Telangana, India  
- **Email**: [byreddy899@gmail.com](mailto:byreddy899@gmail.com)  
- **GitHub**: [github.com/byreddy899](https://github.com/byreddy899)  
- **LinkedIn**: [linkedin.com/in/basireddy-yashwanth-reddy](https://www.linkedin.com/in/basireddy-yashwanth-reddy-575b1a3a4/)  

---

© 2026 Basireddy Yashwanth Reddy. Built with curiosity.

