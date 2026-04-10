# 🌾 FarmConnect — Assured Contract Farming System

> India's trusted platform connecting farmers with reliable buyers through transparent, digitally-signed contracts.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white)](https://pages.github.com/)

---

## 🚀 Live Demo

🔗 **[View Live on GitHub Pages](https://ashwanthpolusani.github.io/SIH_Hackathon_43/)**

📹 **Demo Videos:**
- [Demo Video 1 — Farmer Workflow](https://drive.google.com/file/d/1_cHgWdjqW96wm_f7tpDzFoJrUpDDiS3l/view?usp=sharing)
- [Demo Video 2 — Trader Workflow](https://drive.google.com/file/d/1cDSS6OV02AbulzKTWHQZ3IKlYRHXXu9k/view?usp=sharing)

---

## 📖 Project Overview

**FarmConnect** is a web-based **Assured Contract Farming System** built to solve the critical problem of market uncertainty for Indian farmers. Through the platform, **farmers** can register their produce and receive binding contracts from **traders (buyers)** before the harvest season — guaranteeing stable income and eliminating the risk of crop price crashes.

### 🎯 Problem Statement
Indian farmers consistently face:
- **Price volatility** — crop prices collapse post-harvest
- **No guaranteed buyers** — produce goes unsold or sold at a loss
- **Middlemen exploitation** — 3-4 agents take cuts without adding value
- **Opaque contracts** — verbal agreements with no enforcement mechanism

### ✅ Our Solution
FarmConnect provides:
- **Digital contracts** via DocuSign — legally binding, verifiable
- **Direct farmer-buyer connections** — zero middlemen
- **Pre-harvest pricing** — contracts signed before sowing
- **Transparent marketplace** — live crop listings with verified pricing

---

## 🏗️ Project Structure

```
SIH_Hackathon_43/
│
├── index.html                   # Landing page
├── user-type-select.html        # Role selection (Farmer / Trader)
│
├── pages/
│   ├── farmer/                  # Farmer-side pages
│   │   ├── login.html           # Farmer login (email + OTP)
│   │   ├── dashboard.html       # Farmer dashboard
│   │   ├── my-farm.html         # View registered farms
│   │   ├── add-farm.html        # Register new farm
│   │   ├── crop-calendar.html   # Planting & harvest tracker
│   │   ├── traders.html         # Incoming trader requests
│   │   ├── my-sales.html        # Active and completed sales
│   │   └── agreement.html       # Contract signing via DocuSign
│   │
│   └── trader/                  # Trader-side pages
│       ├── signup.html          # Trader registration (2-step)
│       ├── dashboard.html       # Trader dashboard + farmer browser
│       ├── marketplace.html     # Live crop marketplace
│       ├── my-orders.html       # Purchase order tracking
│       └── agreement.html       # Purchase contract signing
│
├── css/
│   └── global.css               # Global design system (CSS variables, components)
│
├── js/
│   ├── auth.js                  # User session management (localStorage)
│   └── utils.js                 # Shared utilities (formatting, validation, toasts)
│
├── assets/
│   └── icons/                   # UI icons
│
├── output screenshots/          # Screenshots for documentation
│
├── .github/workflows/
│   └── static.yml               # GitHub Pages auto-deployment workflow
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure across all pages |
| **CSS3** | Global design system with CSS Custom Properties |
| **Vanilla JavaScript** | Session management, form validation, dynamic UI |
| **Google Fonts (Inter + Outfit)** | Modern, professional typography |
| **Font Awesome** | Icons |
| **DocuSign API** | Digital contract signing and verification |
| **localStorage** | Client-side data persistence for user sessions and farm data |
| **GitHub Actions** | Automated CI/CD to GitHub Pages |

---

## 🎨 Design System

The project uses a unified design system defined in `css/global.css`:

- **Color Palette:** Forest green primary (`#2E7D32`), harvest amber accent (`#F9A825`)
- **Typography:** `Outfit` for headings, `Inter` for body text
- **CSS Variables:** All colors, spacing, shadows, and border-radii as custom properties
- **Components:** Reusable `.btn`, `.card`, `.form-input`, `.badge`, `.alert` classes
- **Responsive:** Mobile-first breakpoints at 480px, 768px, 1024px

---

## 👥 Team Members

| Name | Role | Contribution |
|---|---|---|
| **Polusani Ashwanth** | Frontend Lead & Project Planner | Architecture, JS modules, design system, page integration |
| **Byri Varshini** | UI/UX Designer | Page layouts, visual design, icons, and user experience |
| **Shaistha Nazneen** | Frontend Developer & Tester | HTML page development, CSS styling, cross-browser testing |

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ashwanthpolusani/SIH_Hackathon_43.git
   cd SIH_Hackathon_43
   ```

2. **Open the landing page:**
   - Double-click `index.html` or open it in any modern browser.
   - Navigate using the **Get Started** button to explore both user flows.

3. **Test the Farmer workflow:**
   - `index.html` → `user-type-select.html` → `pages/farmer/login.html` → `pages/farmer/dashboard.html`

4. **Test the Trader workflow:**
   - `index.html` → `user-type-select.html` → `pages/trader/signup.html` → `pages/trader/dashboard.html`

> No build tools, server, or dependencies required. Pure HTML/CSS/JS.

---

## 🤝 Collaboration

This project was built collaboratively for **Smart India Hackathon 2024** using:
- **GitHub** — version control and code collaboration
- **GitHub Actions** — automated deployment to GitHub Pages
- **Google Meet** — team co-ordination and planning sessions

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For any queries, reach out to: **ashwanthpolusani@gmail.com**

---

*Built with ❤️ by Team FarmConnect for SIH Hackathon 2024, Telangana.*
