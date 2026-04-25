# See Your Site First on \*.vercel.app (No GitHub Yet)

Deploy from your computer and get a live URL like **vinayaka-steel.vercel.app** right away. You can connect GitHub later for auto-deploys.

---

## What You Need

- Node.js installed (you already have it if `npm run build` works)
- A free [Vercel](https://vercel.com) account (sign up with email or Google)

---

## Step 1: Install Dependencies (includes Vercel)

From the project root, run:

```bash
cd /Users/mangilal/Desktop/vinaykasteel/frontend
npm install
```

Vercel is already added to the project, so you don’t need a global install.

---

## Step 2: Build Your Frontend

```bash
cd /Users/mangilal/Desktop/vinaykasteel/frontend
npm run build
```

This creates the `dist` folder that Vercel will deploy.

---

## Step 3: Deploy to Vercel (No GitHub)

Still inside the **frontend** folder, run:

```bash
npm run deploy
```

*(Or: `npx vercel`)*

- First time: it will ask you to **log in** (opens browser — use your Vercel account).
- **Set up and deploy?** → Yes (`Y`).
- **Which scope?** → Your account (press Enter).
- **Link to existing project?** → No (`N`).
- **Project name?** → Press Enter to use `vinayaka-steel-frontend` or type a name like `vinayaka-steel`.
- **In which directory is your code?** → Press Enter (use `./`).

Vercel will upload and build. At the end you’ll see something like:

```text
✅ Production: https://vinayaka-steel-frontend.vercel.app
```

That link is your **live site**. Open it in your browser to see the website.

---

## Step 4: (Optional) Use a Nicer URL

- In [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings** → **Domains** you can add or change the default `*.vercel.app` URL.
- You can also add your own domain later (e.g. vinayakasteel.com).

---

## After You See the Site: Connect GitHub Later

When you’re ready:

1. Push your project to a GitHub repo.
2. In Vercel: **Add New Project** → **Import Git Repository** → choose your repo.
3. Set **Root Directory** to `frontend` so Vercel builds the right folder.
4. Deploy. From then on, every push to GitHub will auto-deploy.

Your existing **\*.vercel.app** URL will keep working; you can still use it or switch to a custom domain.

---

## Quick Recap

| Step | Command / Action |
|------|-------------------|
| 1 | `cd frontend` → `npm install` |
| 2 | `npm run build` |
| 3 | `npm run deploy` (or `npx vercel`) → log in if asked → accept defaults |
| 4 | Open the **Production** URL (e.g. `https://vinayaka-steel-frontend.vercel.app`) in your browser |

You’ll see your site first on that **\*.vercel.app** URL; connect GitHub whenever you’re ready.
