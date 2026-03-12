# 🐋 The Slop Tunnel — Whale Anatomy Diagram

An interactive whale anatomy diagram built with React. Click on labeled points to learn about each part of the whale's digestive and respiratory system.

## Live Demo

Hosted on GitHub Pages: `https://<your-username>.github.io/whale-diagram/`

## Features

- Interactive SVG diagram with clickable anatomy labels
- Covers the blowhole, lungs, baleen/mouth, stomach, intestines, and exit
- Ocean-themed dark UI
- Built with React + Vite, no external dependencies

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/whale-diagram.git
cd whale-diagram
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deployment

### GitHub Pages

1. Set the base path in `vite.config.js`:

```js
export default {
  base: '/whale-diagram/',
}
```

2. Install the deploy helper:

```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:

```bash
npm run deploy
```

5. In your GitHub repo, go to **Settings → Pages** and set the source branch to `gh-pages`.

### Netlify / Vercel (easier)

Connect your repo and set the build command to `npm run build` and publish directory to `dist`. Auto-deploys on every push.

## Project Structure

```
whale-diagram/
├── src/
│   └── App.jsx        # Main whale diagram component
├── public/
├── vite.config.js
└── package.json
```

## Built With

- [React](https://react.dev)
- [Vite](https://vitejs.dev)

## License

MIT
