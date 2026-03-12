# Portfolio Website (React + Vite + Node.js)

A professional portfolio built with **React (JavaScript)** and **Vite**, using standard Node.js tooling for development, linting, build, and deployment.

## Tech Stack

- React 18
- Vite 5
- ESLint 9 (flat config)
- GitHub Actions for CI/CD deployment to GitHub Pages

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open: `http://localhost:5173`

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Deployment (GitHub Pages from `main` / `docs`)

This repo includes a committed production build in `docs/` so GitHub Pages can publish directly from the repository without relying on the Pages deployment action.

### One-time GitHub setup

1. Push this repo to GitHub
2. Go to **Settings -> Pages**
3. Set **Build and deployment -> Source** to **Deploy from a branch**
4. Select branch `main` and folder `/docs`
5. Save

After deployment, your site URL should be:

- `https://robic07.github.io/portfolio/`

GitHub Pages is configured to publish from `main` and `/docs`.

### Updating the published site

When you change the app, regenerate the published files with:

```bash
npm run build:pages
```

Then commit the updated `docs/` folder.

## Customize for your profile

Update content in:

- `src/App.jsx` for hero, skills, experience, projects, and contact details
- `src/styles.css` for theme and layout styling
