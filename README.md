# Bihar Private Multi-Institute ITI ERP — Frontend

This is a **standalone frontend repository** for the Bihar Private ITI institute-purpose CTS ERP.

## Current state

- The frozen implementation reference is [docs/bihar-iti-erp-blueprint-v1.0.md](docs/bihar-iti-erp-blueprint-v1.0.md).
- This repository includes an initial **Vue 3 + TypeScript + Vite** application shell.
- The backend repository [v-l-y/multi-iti-erp](https://github.com/v-l-y/multi-iti-erp) already has frontend foundation code; inspect and reconcile its established behavior and API contracts before porting features here.
- Authentication, institute isolation, roles, protected pages, API requests and user journeys **are not implemented here**. The shell is not a production ERP.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Use `npm run build` for a TypeScript and production-bundle check. These commands have **not** been executed as part of this GitHub-only bootstrap.

## Implementation rules

Only implement institute-purpose data management described in the blueprint. Do not invent government approval/credential issuance, a standalone seat-matrix module or independent DGT trade master. Treat backend authorization and institute isolation as authoritative server-side controls. Validate actual backend command/API contracts before adding any form or workflow. Keep secrets out of frontend source and Git history.
