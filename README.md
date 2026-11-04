# Bihar Private Multi-Institute ITI ERP — Frontend

Standalone Vue 3 + TypeScript + Vite frontend for the Bihar private ITI institute-purpose CTS ERP.

## Requirements and sources
- Frozen product scope: [docs/bihar-iti-erp-blueprint-v1.0.md](docs/bihar-iti-erp-blueprint-v1.0.md).
- Confirmed authentication endpoint/response patterns were inspected in the existing [multi-iti-erp frontend](https://github.com/v-l-y/multi-iti-erp/tree/main/frontend).
- This frontend is **under development**, not a complete or verified ERP. Do not assume unimplemented commands are supported.

## Current implementation
- Login against `POST /api/auth/login`.
- Server-backed session restoration through `GET /api/me`.
- Logout through `POST /api/auth/logout`.
- Cookies with credentials, CSRF on state-changing requests; no token storage in localStorage.
- Platform/regulatory role routing separated from institute workspace.
- Institute selection limited to institute memberships received from the session.
- Responsive shared workspace shell, accessible skip navigation, sidebar, role-specific landing pages, and explicit unimplemented-module placeholders.
- Initial dashboard and Regulatory Admin landing pages (functional modules not yet integrated).
- Re-entrant session initialization protection and institute-switch action.

The server remains responsible for enforcing roles, institute isolation, authorization and request validity. Route guards alone are not security controls.

## Run locally
Requires Node.js 20+ and a compatible backend.

```bash
npm install
npm run dev
npm run build
```

Create a local `.env` (do not commit secrets) if the API is hosted on a different origin:
```env
VITE_API_BASE_URL=http://localhost:8000
```
CORS, session cookies and CSRF origin policy must be configured at the backend. This setting is public browser configuration, not a secret.

**Verification status:** Github source changes were checked after upload, but dependency installation, TypeScript compilation, production build, browser journeys and live backend integration have not yet been executed.

## Quality gates

- A local build/test run is **still required**. The current execution environment cannot reach GitHub or the npm registry to install dependencies, so compilation and browser testing are not claimed as passing.
- Once checkout is available, run `npm install`, `npm run build`, and verify login, logout, session expiration, institute selection, role boundaries, and responsive keyboard navigation against the real backend.

## Remaining work
Canonical onboarding/setup, curriculum/calendar/principal modules, institute management, trade units, ITSU, batches, admissions, staff, academics, fees, documents, inventory, reporting, accessibility, tests and complete integrated role journeys. All implementation must be driven by real backend contracts and the blueprint; no fabricated API fields or permissions.

## Browse on GitHub Pages

The repository contains a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` which builds the existing Vue application and publishes the `dist` folder to GitHub Pages.

1. Open **Settings → Pages** on this repository and select **GitHub Actions** as the build/deployment source. (The workflow cannot change repository-level Pages settings.)
2. In **Actions**, check the **Deploy frontend to GitHub Pages** workflow. Run it manually with **Run workflow** if no run was started automatically.
3. After a successful deployment, open **https://v-l-y.github.io/multi-iti-erp-frontend/**. The login route uses `#/login` so refreshes work on static hosting.

The workflow sets `GITHUB_PAGES=true` and `VITE_GITHUB_PAGES=true` during the build. It uses the Vite base `/multi-iti-erp-frontend/` and hash-based routing **only** for Pages; local development keeps history routing.

**Important:** GitHub Pages hosts static frontend assets only. The default API URL `/` will not provide the PHP/MySQL ERP backend on GitHub Pages. To use real login or ERP data, deploy the compatible HTTPS backend independently, configure its exact allowed frontend origin, CORS/CSRF and session-cookie policy, and set the public build-time variable `VITE_API_BASE_URL` to its HTTPS origin. The existing backend's same-site cookie requirements may prevent cross-site session authentication from `github.io`; do not weaken cookie or origin security settings to bypass that restriction. Without compatible backend deployment, this is a frontend shell, not a working ERP.
