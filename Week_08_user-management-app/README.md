# Week 08 — User Management App (Fullstack)

Overview
- This folder contains a small fullstack project split into `Backend` and `Frontend` subfolders. The backend is an Express API; the frontend is a Vite + React app.

Learning goals
- Connect a React frontend to an Express/MongoDB backend.
- Separate responsibilities between API, model, middleware, and UI layers.
- Practice fullstack folder organization.

Structure
- [Backend](Week_08_user-management-app/Backend/README.md#L1) — API server and endpoints.
- [Frontend](Week_08_user-management-app/Frontend/README.md#L1) — React frontend (has its own README and run instructions).

Quick start — Backend

```bash
cd Week_08_user-management-app/Backend
npm install
node server.js
```

Notes
- Backend depends on `dotenv`, `express`, `mongoose`, and `cors` — configure `.env` as needed before starting. The `testing.http` file includes example requests.
- Frontend has its own `README.md` and can be started with `npm install` then `npm run dev` inside `Frontend`.

