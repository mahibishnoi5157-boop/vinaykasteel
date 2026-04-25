# Where to See Your Website

## Option 1: See It on Your Computer (No Domain, Instant)

You don’t need any domain or deployment. Run the site locally:

```bash
cd /Users/mangilal/Desktop/vinaykasteel/frontend
npm run dev
```

Then **open in your browser:**

**http://localhost:3000**

- Use this address only on your computer (not on the internet).
- To stop the server: press `Ctrl + C` in the terminal.

---

## Option 2: See It on the Internet (Temporary Vercel URL)

After you run **`npm run deploy`**, Vercel gives you a **temporary free URL** like:

- `https://vinayaka-steel-frontend.vercel.app`  
- or `https://vinayaka-steel-frontend-xxxx.vercel.app`

### Where to find it

1. **In the terminal**  
   After `npm run deploy` finishes, scroll up. You’ll see something like:
   ```text
   ✅ Production: https://vinayaka-steel-frontend.vercel.app
   ```
   That link is your temporary domain. Copy it and open it in your browser.

2. **In Vercel’s website**  
   - Go to **[vercel.com](https://vercel.com)** and log in.  
   - Open **Dashboard** → click your project (**vinayaka-steel-frontend** or the name you chose).  
   - At the top you’ll see **Domains**. The `*.vercel.app` URL listed there is your temporary domain. Click it to open the site.

---

## Summary

| Want to…              | Do this                          | Where to see it                    |
|-----------------------|-----------------------------------|------------------------------------|
| See it only on my PC  | `cd frontend` → `npm run dev`     | **http://localhost:3000**          |
| See it on the internet| `cd frontend` → `npm run deploy`  | URL in terminal or Vercel Dashboard |

You don’t need a custom domain to see the site; the Vercel URL is your temporary domain.
