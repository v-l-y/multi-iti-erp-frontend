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
- Initial dashboard and Regulatory Admin landing pages (functional modules not yet integrated).

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

## Remaining work
Canonical onboarding/setup, curriculum/calendar/principal modules, institute management, trade units, ITSU, batches, admissions, staff, academics, fees, documents, inventory, reporting, accessibility, tests and complete integrated role journeys. All implementation must be driven by real backend contracts and the blueprint; no fabricated API fields or permissions.
