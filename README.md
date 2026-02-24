# SATYAM INTERIORS Website

Luxury, premium, multi-page static website for **SATYAM INTERIORS**.

## Site Structure
- `/` Home
- `/about/`
- `/services/`
- `/projects/`
- `/projects/open-tap/`
- `/gallery/`
- `/contact/`

## Local Run
```bash
python3 -m http.server 8000
```
Open: `http://localhost:8000`

---

## PREVIEW KAISE KARU?

### Quick Preview (Recommended)
```bash
./scripts/preview.sh
```
Then browser me open karein: `http://localhost:8000`

### Custom Port
```bash
./scripts/preview.sh 5500
```
Then open: `http://localhost:5500`

### Without Script (Direct Command)
```bash
python3 -m http.server 8000
```

### Mobile me Preview (same Wi-Fi)
1. Laptop ka local IP nikaalein:
```bash
hostname -I
```
2. Agar IP `192.168.1.15` aaye aur port `8000` ho, to mobile me open karein:
`http://192.168.1.15:8000`

> Agar page open na ho to firewall me port allow karein ya same network verify karein.

---

## SITE KO LIVE KAISE KAREIN (Fastest Options)

### Option 1 (Recommended): Netlify (5 min)
1. Netlify account login karein.
2. **Add new site → Deploy manually**.
3. Is repo ka pura folder drag-drop karein.
4. Site instantly live ho jayegi.
5. Site settings me custom domain add kar sakte hain.

### Option 2: Vercel
1. Vercel login karein.
2. **Add New Project** → GitHub repo import karein.
3. Framework: **Other** (Static).
4. Build command: *(blank)*, Output directory: `.`
5. Deploy click karein.

### Option 3: GitHub Pages (Already Configured)
Repository me workflow file add hai:
- `.github/workflows/deploy-github-pages.yml`

#### Steps:
1. GitHub repo open karein.
2. **Settings → Pages** me jaake Source: **GitHub Actions** select karein.
3. `main` branch (ya jis branch ko aap use kar rahe hain) par push karein.
4. Actions run complete hone ke baad URL mil jayega:
   `https://<username>.github.io/<repo>/`

> Agar custom domain chahiye, Pages settings me domain add karke DNS point karein.

---

## Quick Production Checklist
- [ ] Final phone/WhatsApp links verify
- [ ] Real project images replace (optional)
- [ ] Domain + SSL enable
- [ ] Test mobile + desktop once after deploy
