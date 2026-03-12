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

## Deployment (Global Standard via CI/CD)

This repo includes `.github/workflows/deploy-pages.yml` that:

1. Installs Node.js dependencies with `npm ci`
2. Builds the app with `npm run build`
3. Uploads `dist/` and deploys to GitHub Pages

### One-time GitHub setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Build and deployment → Source** to **GitHub Actions**
4. Push to `main` (or run workflow manually)

After deployment, your site URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

## Customize for your profile

Update content in:

- `src/App.jsx` (hero, skills, experience, projects, contact)
- `src/styles.css` (theme and layout styling)
