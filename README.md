# Grapple Properties — demo site

Next.js 14 + TypeScript + Tailwind CSS. No backend, no database — a
static-data demo site, deployable for free on Vercel.

## What's real in this build
- Logo, team photos and two aerial property shots are your actual uploaded
  images, in `public/images/`.
- Contact details, address, services and the 5 property listings are the
  real details you gathered from their public listings — nothing invented.
- The listings filter (town / type / budget) is a real, working client-side
  filter — no backend needed, it just filters the array in
  `lib/properties.ts`.

## Push to GitHub from your phone

### Android — Termux
1. Install **Termux** (F-Droid build recommended).
2. `pkg update && pkg install git`
3. Set up a GitHub **personal access token** (GitHub app → Settings →
   Developer settings → Personal access tokens → generate one, "repo"
   scope), and keep it somewhere safe — you'll use it as your password
   when pushing.
4. Extract the zip you downloaded into Termux's storage
   (`termux-setup-storage` first, then move the folder into
   `~/storage/downloads` or similar, then `cd` into it from Termux).
5. Inside the project folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/grapple-properties.git
   git push -u origin main
   ```
   (Create the empty repo on github.com first, in your phone browser —
   "New repository", no README, no .gitignore, since this folder already
   has one.)
6. When prompted for a password, paste the personal access token.

### iPhone — Working Copy
1. Install **Working Copy** from the App Store.
2. Extract the zip in the Files app.
3. In Working Copy: create a new repository, then use its file import to
   pull in this project's files (or connect it to a blank GitHub repo you
   created first, then copy the files in via the Files app share sheet).
4. Commit, then push — both are buttons in the app, no terminal needed.

## Deploy on Vercel
1. Go to vercel.com in your phone browser, sign up/sign in with GitHub.
2. "Add New" → "Project" → select the `grapple-properties` repo.
3. Leave all settings on default (Vercel auto-detects Next.js) → Deploy.
4. You'll get a live `*.vercel.app` link within a couple of minutes — that's
   the link to send Grapple Properties.

After this first deploy, any future change just needs: edit file → commit →
push. Vercel redeploys automatically every time.

## If they say yes
Swap in their real full listings, add their own logo file if they have a
higher-res version, and point a custom domain (`grappleproperties.co.zw`
itself, or a new one) at the Vercel project under Project → Settings →
Domains.
