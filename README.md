# Gesund & Schön im Marktgässchen

Eine moderne, produktionsreife React-Website für das Kosmetikstudio in Aue-Bad Schlema.

## 🚀 Schnellstart

### Installation

```bash
npm install
```

### Entwicklung

```bash
npm run dev
```

Die Website läuft dann auf `http://localhost:3000`

### Produktions-Build

```bash
npm run build
```

Der Build wird im `dist/` Verzeichnis erstellt.

### Vorschau des Builds

```bash
npm run preview
```

## 📁 Projektstruktur

```
gesundundschoen/
├── public/                 # Statische Assets (Bilder)
│   ├── wellcomet.webp     # LDM® Medical-SPA Bild
│   └── ...                # Weitere Bilder
├── src/
│   ├── components/        # React Komponenten
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── LDMSection.jsx
│   │   ├── AboutAndStudio.jsx
│   │   ├── Products.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── styles/
│   │   └── global.css     # Globale Styles & CSS Variablen
│   ├── App.jsx            # Haupt-App Komponente
│   └── main.jsx           # React Entry Point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Technologien

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animationen
- **Lucide React** - Icons

## 📝 Wichtige Hinweise

- Alle Bilder befinden sich im `public/` Verzeichnis
- Das LDM® Medical-SPA Bild wurde auf `wellcomet.webp` gesetzt
- Die Website ist vollständig responsiv und mobile-optimiert
- Alle Komponenten sind modular aufgebaut und leicht erweiterbar

## 🔧 Anpassungen

### Bilder ändern

Bilder können direkt im `public/` Verzeichnis ausgetauscht werden. Die Pfade in den Komponenten verwenden absolute Pfade (z.B. `/wellcomet.webp`).

### Styling anpassen

Farben und Design-Tokens können in `src/styles/global.css` angepasst werden:

```css
:root {
  --color-primary: #e2e477;
  --color-primary-dark: #c5ca47;
  /* ... weitere Variablen */
}
```

## 📦 Deployment

Nach dem Build (`npm run build`) können die Inhalte des `dist/` Verzeichnisses auf jeden statischen Hosting-Service hochgeladen werden (z.B. Hostinger, Netlify, Vercel, etc.).

