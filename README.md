# Music Drama Radio Website

Un sito web moderno per Music Drama Radio costruito con React, Vite e Tailwind CSS.

## 🚀 Tecnologie Utilizzate

- **React 18** - Libreria per l'interfaccia utente
- **Vite** - Build tool veloce e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Routing per applicazioni React

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── ContactModal.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ScrollIndicator.jsx
│   └── TypewriterText.jsx
├── contexts/           # Context API per gestione stato
│   └── ThemeContext.jsx
├── hooks/              # Custom hooks
│   ├── useScrollAnimation.js
│   └── useSearch.js
├── pages/              # Pagine dell'applicazione
│   ├── About.jsx
│   ├── Artists.jsx
│   ├── Blog.jsx
│   ├── Home.jsx
│   ├── Interviews.jsx
│   ├── Privacy.jsx
│   └── Terms.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🛠️ Installazione e Avvio

1. **Clona il repository**
   ```bash
   git clone <url-repository>
   cd MusicDramaRadio-Website
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser** su `http://localhost:5173`

## 📜 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linting del codice

## 🌟 Caratteristiche

- Design responsive e moderno
- Tema scuro/chiaro
- Animazioni fluide
- Componenti riutilizzabili
- Routing client-side
- Performance ottimizzate

## 🚀 Deploy

Per creare una build di produzione:

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### GitHub Pages

Il sito viene automaticamente deployato su GitHub Pages tramite GitHub Actions quando viene fatto push sul branch `main`. Il workflow:

1. Installa le dipendenze
2. Esegue il linting
3. Crea la build di produzione
4. Deploya su GitHub Pages

Per abilitare GitHub Pages:
1. Vai su Settings > Pages nel repository
2. Seleziona "GitHub Actions" come source

## 📄 Licenza

Questo progetto è privato e proprietario di Music Drama Radio.