# UPS.com Playwright MCP Automation Framework

## 🚀 Features
- Playwright + TypeScript
- Page Object Model (POM)
- Environment variables via `.env`
- Sample tests:
  - Package Tracking
  - Login (invalid credentials)
  - Shipping form
- HTML reports with screenshots/videos

## 📂 Structure
- `e2e/pages/` → Page Objects
- `e2e/tests/` → Test specs
- `e2e/fixtures/` → Test data
- `e2e/utils/` → Logger utils
- `e2e/env/` → Environment configs

## ▶️ Run Locally
```bash
npm install
npx playwright test
npx playwright show-report
