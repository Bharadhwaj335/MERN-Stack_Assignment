# Week 08 - User Management App (Fullstack)

Overview
- This folder contains a fullstack project split into `Backend` and `Frontend` subfolders.
- The backend is an Express/MongoDB API and the frontend is a Vite + React application.

Folder Tree
```text
Week_08_user-management-app/
├── Backend/
│   ├── server.js
│   ├── testing.http
│   ├── package.json
│   ├── package-lock.json
│   ├── APIs/
│   └── Models/
└── Frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── README.md
```

Learning Goals
- Connect a React frontend to an Express/MongoDB backend.
- Separate responsibilities between API, model, middleware, and UI layers.
- Practice fullstack folder organization.

Backend Summary
- The backend exposes user-management APIs.
- The main schema is the `UserModel` in the backend `Models` folder.
- The backend README has the route details and schema fields.

Frontend Summary
- The frontend uses route-based pages and a shared layout shell.
- The frontend README lists the main page components and route map.

Structure Links
- [Backend](Week_08_user-management-app/Backend/README.md#L1) - API server and schema details.
- [Frontend](Week_08_user-management-app/Frontend/README.md#L1) - React UI and component details.

Quick Start

```bash
cd Week_08_user-management-app/Backend
npm install
node server.js
```

Then run the frontend in another terminal:

```bash
cd Week_08_user-management-app/Frontend
npm install
npm run dev
```

Deployment
- No Vercel deployment link is documented for the fullstack app root yet.

