# bracketCV

**The "No-Nonsense" Resume Generator for Developers**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/psocbitm/bracketCV)

## 🎯 Quick Start

**Already deployed!** Jump straight to **[bracket-cv.vercel.app](https://bracket-cv.vercel.app/)** and start building your resume in minutes.

---

## 🧐 What is this?

**bracketCV** is a tool for developers who believe resume data belongs in a JSON object, not trapped in a `.docx` file. We take your raw **JSON** and compile it into a crisp, ATS-friendly, **two-column resume** that actually looks good.

---

## 🥊 Why use this? (A.K.A. The Rant)

**vs. Microsoft Word:** Because moving an image 2mm to the left shouldn't cascade into a formatting apocalypse on page 3.

**vs. LaTeX:** Because you shouldn't need a PhD to update your email address or debug `Overfull \hbox (15.2pt too wide)` errors. Get the LaTeX _aesthetic_ without the `\documentclass{panic}`.

**vs. Photoshop/Canva:** Because recruiters actually need to _copy_ your text. Pretty pictures won't parse through ATS systems.

**vs. Online Resume Builders:** Because paywalls, watermarks, and "premium templates" are the enemy of productivity.

---

## 🚀 Features

- **JSON-Driven:** Your career in structured, version-controllable data
- **Two-Column Layout:** Clean, professional design that's easy to scan
- **Live Preview:** Built with Next.js—see changes instantly
- **Print Perfect:** CSS optimized for `Ctrl + P` → Save as PDF
- **ATS-Friendly:** Passes Applicant Tracking Systems without black magic
- **Developer-First:** No drag-and-drop nonsense. Just code, data, and results.

---

## 🌐 Deployment Options

### Option 1: Use the Live Site (Easiest)

Just visit **[bracket-cv.vercel.app](https://bracket-cv.vercel.app/)** and start editing your resume immediately. No setup required.

### Option 2: Self-Host (For Customization)

#### 1. Clone the repo

```bash
git clone https://github.com/psocbitm/bracketCV.git
cd bracketCV
```

#### 2. Install dependencies

```bash
pnpm install
```

#### 3. Edit your data

Open the JSON file (typically in `src/data/` or `public/`) and update it with your information:

- Add your name and contact info
- List your experience and skills
- Flex your achievements

#### 4. Run locally

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### 5. Export your resume

Hit `Ctrl + P` (or `Cmd + P` on Mac) and save as PDF. Done.

---

## 💻 Tech Stack

- **Next.js** – React framework for blazing-fast performance
- **JavaScript** – The glue that holds it all together
- **Tailwind CSS** – Utility-first styling without the bloat
- **Vercel** – Instant deployments with zero config

---

## 🤝 Contributing

Found a bug? Want to add dark mode? Got ideas for new layouts?

**Pull requests are welcome!**

1. Fork it
2. Branch it (`git checkout -b feature/amazing-idea`)
3. Commit it (`git commit -m 'Add amazing feature'`)
4. Push it (`git push origin feature/amazing-idea`)
5. PR it

---

## 📝 License

MIT License – Do whatever you want with this. Build your resume empire.

---

## 🙌 Show Some Love

If this saved you from Word hell or LaTeX purgatory, drop a ⭐ on the [GitHub repo](https://github.com/psocbitm/bracketCV)!

---

**Made with chai and mild frustration by developer, for developers.**
