# First Choice Termite & Pest Control LLC – Modern Web Application & Competitor Audit

A high-converting, modern, interactive web application built to replace and upgrade the existing website at [https://firstchoicepestcontrolllc.com](https://firstchoicepestcontrolllc.com).

This project includes both:
1. **The Revamped Live Website** with real-time interactive tools (instant cost calculator, bug symptom identifier, 1-day bed bug heat analyzer, Georgia closing termite letter portal, 25-mile Atlanta ZIP checker, and real-time appointment booking).
2. **The In-Depth Competitor Gap Audit & Strategy Dashboard** directly switchable from the top header or mobile bar.

---

## 🔍 Executive Summary: What `firstchoicepestcontrolllc.com` Was Missing

After analyzing the live website of **First Choice Termite and Pest Control LLC** (Decatur, GA 30030) and benchmarking against top regional and national competitors (**Arrow Exterminators, Orkin, Terminix, Truly Nolen, and Northwest Exterminating**), here are the critical gaps identified:

### 1. No Online Price Calculator (Major Drop-Off Cause)
* **The Problem:** The current site only says *"call us now"*. Over 70% of modern homeowners bounce to competitors because they don’t know whether a treatment costs $80 or $1,500.
* **Competitor Standard:** Aptive, Terminix, and Orkin offer instant cost estimations based on square footage and pest type.
* **New Solution Implemented:** An interactive **Instant Price & Plan Estimator** that calculates transparent rates in real-time and applies a `$50 OFF` promo code (`FIRST25`).

### 2. No After-Hours Lead Capture / Calendar Booking
* **The Problem:** Most people discover bugs, bed bug bites, or attic noises between 7 PM and 6 AM when office phones are unstaffed. Without online scheduling, these urgent high-value leads are lost.
* **Competitor Standard:** 24/7 appointment slot reservation.
* **New Solution Implemented:** A streamlined **Schedule Free Inspection Modal** allowing customers to pick date and morning/afternoon/evening/urgent time slots.

### 3. Missing Pest Identification & Symptom Diagnostic Tool
* **The Problem:** Homeowners frequently confuse swarming termites with flying ants, or bed bug welts with mosquito bites. The original site had flat walls of generic text.
* **Competitor Standard:** Orkin Pest Library & Terminix Bug Identifier.
* **New Solution Implemented:** An interactive **Bug Symptom Diagnostic Tool** that filters by real-world physical signs (e.g. mud tubes, wood shavings, nocturnal scratching, kitchen pepper specks), explains why grocery store sprays fail, and directly routes to professional treatment.

### 4. Under-Promoted 1-Day Bed Bug Thermal Heat Remediation
* **The Problem:** Thermal heat treatment is First Choice's highest-ticket service ($1,200 – $3,000+), but the old site had only a few plain paragraphs.
* **Competitor Standard:** Educational comparisons demonstrating why heat destroys resistant eggs in 1 day without chemical residues.
* **New Solution Implemented:** An interactive **Heat vs Chemical Comparison Tool** demonstrating 100% egg kill in 1 day and showing how many rooms are needed.

### 5. Georgia Real Estate Termite Letter (WDIR-100) Portal
* **The Problem:** In Georgia, real estate sales require an official Wood Infestation Inspection Report. Realtors, closing attorneys, and buyers need rapid 24–48 hour turnaround.
* **Competitor Standard:** Expedited order forms for real estate transactions.
* **New Solution Implemented:** A dedicated **Fast-Track WDIR Clearance Order Portal** for Decatur and Atlanta realtors.

### 6. Vague "Within 25 Miles" Service Area
* **The Problem:** Visitors from Tucker, Stone Mountain, Brookhaven, or Atlanta wonder if First Choice services their address.
* **Competitor Standard:** ZIP code validation with arrival estimates.
* **New Solution Implemented:** Live **Atlanta Metro ZIP Code Checker** confirming neighborhood coverage and local technician dispatch time.

### 7. Weak Trust Signals & Licensing
* **The Problem:** No visible Georgia Department of Agriculture licensing badges, GPCA membership, or explicit 100% Free Re-treatment Callback Guarantees.
* **New Solution Implemented:** Verified badges, EPA-registered pet/child-safe IPM standards, and customer reviews with 4.9-star rating.

### 8. Non-Responsive Mobile Frantic Emergency UX
* **The Problem:** Panicked mobile users had to search for phone numbers.
* **New Solution Implemented:** Persistent mobile emergency bottom bar with 1-tap call to `(770) 482-7322`, instant quote, and inspection booking.

---

## 🚀 How to Run on GitHub Pages

This app is configured with `vite-plugin-singlefile`, which produces a **self-contained** `dist/index.html` — one file with the JavaScript and CSS inlined, no external server dependencies, perfect for GitHub Pages.

### Repository layout

| Path | What it is |
| --- | --- |
| `src/` | The Vite project (entry point `src/index.html`, React sources) |
| `dist/` | Build output — `dist/index.html` (git-ignored) |
| `index.html` | **The published app.** `npm run build` copies the built file here, because GitHub Pages in *"Deploy from a branch"* mode serves the root of the branch. |
| `_config.yml` | Keeps the source out of the published Jekyll build |
| `.github/workflows/deploy.yml` | Builds, publishes and deploys on every push to `main` |

### Option A: GitHub Actions (recommended)

1. Push the repository to GitHub.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.

From then on, every push to `main` rebuilds the app and deploys it — no manual step.

### Option B: "Deploy from a branch" (works out of the box)

If the source stays on **Deploy from a branch** (`main`, path `/`), GitHub serves the root of the branch, and the root `index.html` is already the finished app. The `Deploy to GitHub Pages` workflow keeps that file in sync: after every build it commits the refreshed `index.html` back to `main`.

> Publishing the raw source instead (an `index.html` that points at `/src/main.tsx`) renders a **blank page**, because Pages never compiles TypeScript.

### Option C: Local Development
```bash
# Install dependencies
npm install

# Start local development server -> http://localhost:5173
npm run dev

# Build the production bundle and publish it to the repository root
npm run build

# Preview the production build
npm run preview
```

---

## 🛠️ Tech Stack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Vite 7** with `vite-plugin-singlefile`
- **Lucide React** (icons)
- **Canvas-Confetti** (interactive animations)
