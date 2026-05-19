# Joda Beauty Line — Next.js Website

Premium perfumes & colognes. Built with **Next.js 14 + Tailwind CSS**.
Deployed on **Vercel** — fully dynamic, SEO-optimised, worldwide CDN.

---

## Project Structure

```
jodabeautyline/          ← This is the ROOT of your GitHub repository
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles + fonts
│   ├── sitemap.ts       # Auto sitemap for Google
│   ├── robots.ts        # Crawler instructions
│   ├── not-found.tsx    # Custom 404 page
│   ├── perfumes/
│   │   └── page.tsx     # Full perfume collection
│   └── faq/
│       ├── page.tsx     # FAQ page (server)
│       └── FaqClient.tsx# FAQ accordion (client)
├── components/
│   ├── Navbar.tsx       # Sticky navbar + mobile menu
│   ├── Footer.tsx       # Footer + Instagram + contact
│   └── ProductCard.tsx  # Product card component
├── lib/
│   └── products.ts      # All product data — edit here
├── public/
│   └── images/          # 5 product photos
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## How to Upload to GitHub (File by File on Phone)

Upload files in this exact order. For each file:
1. Go to your GitHub repository
2. Tap "Add file" → "Create new file"
3. Type the full path as the filename (e.g. app/layout.tsx)
4. Paste the file content
5. Tap "Commit new file"

### Order of upload:
1. package.json
2. next.config.js
3. tailwind.config.js
4. postcss.config.js
5. tsconfig.json
6. vercel.json
7. app/globals.css
8. app/layout.tsx
9. app/page.tsx
10. app/not-found.tsx
11. app/sitemap.ts
12. app/robots.ts
13. app/perfumes/page.tsx
14. app/faq/page.tsx
15. app/faq/FaqClient.tsx
16. components/Navbar.tsx
17. components/Footer.tsx
18. components/ProductCard.tsx
19. lib/products.ts
20. public/images/ros.jpg
21. public/images/soie.jpg
22. public/images/ros-oud.jpg
23. public/images/le-mot.jpg
24. public/images/oud.jpg

---

## Deploy to Vercel

1. Go to vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your "Jodabeautyline" repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click Deploy
6. Site is live at jodabeautyline.vercel.app in ~2 minutes

---

## Connect jodabeautyline.com (Squarespace Domain)

1. Vercel dashboard → your project → Settings → Domains
2. Add jodabeautyline.com and www.jodabeautyline.com
3. Vercel gives you these DNS records:
   - Type A  |  Name: @  |  Value: 76.76.21.21
   - Type CNAME  |  Name: www  |  Value: cname.vercel-dns.com
4. Go to account.squarespace.com → Domains → jodabeautyline.com → DNS Settings
5. Add both records and save
6. Wait 30 minutes — jodabeautyline.com is live

---

## After Going Live — SEO

1. Go to search.google.com/search-console
2. Add jodabeautyline.com as a property
3. Submit sitemap: https://jodabeautyline.com/sitemap.xml
4. Create Google Business Profile at business.google.com

---

## Updating Products

Edit lib/products.ts to add, change, or remove any fragrance.
Replace files in public/images/ to update product photos.
Push changes to GitHub — Vercel redeploys automatically.

---

Contact: jodabeautyline@gmail.com | WhatsApp: +234 913 847 9374
Instagram: @jodabeautyline
