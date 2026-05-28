# AI SaaS Landing Page Website Template by Frontend Tribe

This is a starter template for the AI SaaS Landing Page video created by Frontend Tribe.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open the provided URL with your browser to see the result and start coding along with the video tutorial.

## Deploying to GitHub Pages

1. Create a GitHub repository and push this project.
2. Install updated dependencies:

```bash
npm install
```

3. If your site will be served from a repository page (for example `https://username.github.io/repo-name`), set the base path before building:

```bash
set NEXT_PUBLIC_BASE_PATH=/repo-name
npm run deploy
```

For PowerShell, use:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/repo-name'
npm run deploy
```

If your site is served from a user/organization page (`https://username.github.io`), just run:

```bash
npm run deploy
```

This will build and export the static site into `out/`, then publish it to the `gh-pages` branch.
