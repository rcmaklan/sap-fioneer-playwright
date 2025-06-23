# SAP Fioneer Playwright Automation

This repository contains Playwright end-to-end tests for the SAP Fioneer website, covering navigation, UI validation, and contact form validations.

---

## Project Structure

- `pages/` - Page Object Model classes for HomePage and ContactPage.
- `tests/` - Test files for navigation, UI checks, and form validations.
- `utils/fixtures.ts` - Custom Playwright fixtures to initialize page objects.
- `playwright.config.ts` - Playwright configuration file.

---

## Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn package manager

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/sap-fioneer-playwright.git
cd sap-fioneer-playwright
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run tests**
To run all tests on Chromium with headed mode and slow motion (configured in playwright.config.ts):
```bash
npx playwright test
```
Or for a specific test file:
```bash
npx playwright test tests/navigation_bookmarks.spec.ts
```

4. **View test report**
```bash
npx playwright show-report
```

## Test Details
**HomePage Tests:**
- Verify "Get in touch" buttons are visible and have correct yellow background.
- Navigation through main menu > section > bookmark links.

**ContactPage Tests:**
- Validate contact form email input with invalid email shows appropriate error.