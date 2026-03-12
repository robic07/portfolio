# Portfolio Website (React + GitHub Pages)

A modern portfolio website built with React (browser ESM imports), designed to showcase your skills, projects, and hiring value.

## Run locally

```bash
python3 -m http.server 4173
```

Then open: `http://localhost:4173`

## Deploy automatically with GitHub Actions

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the portfolio to GitHub Pages whenever you push to `main`.

### One-time GitHub setup

1. Push this repository to GitHub.
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from **Actions** tab).

After deploy, your portfolio will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## Best sections to customize for job applications

Update the following inside `index.html`:

- Hero headline and introduction
- Skills list
- Experience bullets with measurable outcomes
- Project impact statements
- Certifications and contact links

Design and style tweaks can be made in `styles.css`.
