# Contributing to FarmConnect

Thank you for your interest in contributing to **FarmConnect — Assured Contract Farming System**! 🌾

This project was built for **Smart India Hackathon 2024**. Contributions that improve the code quality, UI, or features are welcome.

---

## 📋 How to Contribute

### 1. Fork & Clone
```sh
git clone https://github.com/ashwanthpolusani/SIH_Hackathon_43.git
cd SIH_Hackathon_43
```

### 2. Create a Feature Branch
Always branch off `main`:
```sh
git checkout -b feat/your-feature-name
```

### 3. Make Your Changes
- Follow the existing code style
- Use the design tokens from `css/global.css` — do NOT add new hardcoded colour values
- All new pages must import `css/global.css`
- All new pages must include `<meta name="description">` and a `<title>` tag
- Use `js/auth.js` and `js/utils.js` for session and utility operations

### 4. Commit with Conventional Messages
```sh
git commit -m "feat: add crop price alert feature"
git commit -m "fix: correct login redirect for farmer role"
git commit -m "docs: update README with deployment steps"
git commit -m "style: improve marketplace card mobile layout"
git commit -m "refactor: extract repeated nav code into shared include"
git commit -m "chore: update .gitignore for new OS"
```

**Commit types:**
| Type | When |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | CSS/visual changes, no logic change |
| `refactor` | Code restructure without feature change |
| `chore` | Build, config, tooling changes |

### 5. Push & Pull Request
```sh
git push origin feat/your-feature-name
```
Then open a Pull Request on GitHub against the `main` branch.

---

## 🎨 Code Style Guide

### HTML
- Use **semantic HTML5** elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Every page must have exactly **one `<h1>`**
- All images require a descriptive `alt` attribute
- Form inputs must have matching `<label>` elements

### CSS
- Use CSS custom properties from `css/global.css` — never hardcode colour values
- Page-specific styles go inside a `<style>` block in the page's `<head>`
- No inline `style=""` attributes for anything except truly one-off overrides

### JavaScript
- Use `const` and `let` — never `var`
- Function names in `camelCase`
- Use `Auth` and `Utils` modules from `js/auth.js` and `js/utils.js`
- No `console.log` in production code

---

## 🚫 What NOT to Do
- Do not hardcode colour hex values — use CSS variables
- Do not store sensitive data in `localStorage` beyond what `auth.js` defines
- Do not add external libraries without discussion (keep zero-dependency policy)
- Do not commit to `main` directly — always use a branch

---

## 📬 Contact
For questions: **ashwanthpolusani@gmail.com**
