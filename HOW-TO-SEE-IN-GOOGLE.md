# How to See Your Website in Google Search

Follow these steps so your Vinayaka Steel & Railing website appears in Google.

---

## Step 1: Deploy Your Website Online

Your site must be **live on the internet** (not only on your computer) for Google to index it.

**Options to host (many have free tiers):**

| Option | Best for | Link |
|--------|----------|------|
| **Vercel** | Easiest, free | [vercel.com](https://vercel.com) – connect GitHub, deploy `frontend` folder |
| **Netlify** | Simple, free | [netlify.com](https://netlify.com) – drag & drop `frontend/dist` or connect repo |
| **GitHub Pages** | Free, static | Host the built `frontend/dist` as a static site |
| **Your own hosting** | If you already have a server | Upload `frontend/dist` and point your domain to it |

**You need a domain** (e.g. `vinayakasteel.com` or `vinayakasteel.in`). You can buy one from Namecheap, GoDaddy, or get a free subdomain from Vercel/Netlify (e.g. `vinayaka-steel.vercel.app`).

After deploy, note your **live URL**, e.g. `https://vinayakasteel.com`.

---

## Step 2: Update Sitemap and robots.txt with Your Real URL

1. Open **`frontend/public/sitemap.xml`**  
   Replace every `https://YOUR-DOMAIN.com` with your real URL (e.g. `https://vinayakasteel.com`).

2. Open **`frontend/public/robots.txt`**  
   Replace `https://YOUR-DOMAIN.com` with the same URL.

3. Rebuild and redeploy:
   ```bash
   cd frontend && npm run build
   ```
   Then deploy the new `frontend/dist` again.

---

## Step 3: Submit Your Site to Google

### A. Google Search Console (main step)

1. Go to **[Google Search Console](https://search.google.com/search-console)**.
2. Sign in with your Google account.
3. Click **“Add property”**.
4. Choose **“URL prefix”** and enter your full website URL (e.g. `https://vinayakasteel.com`).
5. **Verify ownership** using one of the methods Google offers (e.g. HTML file upload, DNS record, or meta tag in your site).
6. After verification, go to **“Sitemaps”** in the left menu.
7. Enter: `sitemap.xml` (or `https://your-domain.com/sitemap.xml`) and click **Submit**.

Google will then crawl your site and start showing it in search over the next few days or weeks.

### B. Request indexing for the homepage

1. In Search Console, open **“URL inspection”** (left menu).
2. Enter your homepage URL (e.g. `https://vinayakasteel.com`).
3. Click **“Request indexing”** so Google prioritises that page.

---

## Step 4: Give It Time

- **New sites:** It can take from a few days to a few weeks to see your site in Google.
- **Check:** Search `site:your-domain.com` on Google (e.g. `site:vinayakasteel.com`) to see if any pages are indexed.
- **Improve:** Add more local keywords (e.g. “steel railing Bengaluru”, “railing fabrication Karnataka”) in your page titles and content to improve local search.

---

## Quick Checklist

- [ ] Website deployed and live at a URL
- [ ] `sitemap.xml` and `robots.txt` updated with your real URL and redeployed
- [ ] Property added in Google Search Console and verified
- [ ] Sitemap submitted in Search Console
- [ ] Homepage (and optionally Contact) URL requested for indexing
- [ ] Wait and then search `site:your-domain.com` to confirm

Once these are done, your site can start appearing in Google search.
