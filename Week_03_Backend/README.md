# Week 03 — Backend (Express) Exercises

Overview
- Simple Node/Express backend examples demonstrating route structure and API endpoints. This week contains a small Express server and route handlers for `Product` and `User` APIs.

Goals
- Learn how to split backend logic into route files.
- Practice HTTP testing from VS Code using a `.http` file.
- Understand the flow from request -> route -> response.

Prerequisites
- Node.js (v14+). From the `Week_03_Backend` folder run `npm install` to install dependencies.

Files
- [server.js](Week_03_Backend/server.js#L1) — main Express server entry.
- [routes/Product_API.js](Week_03_Backend/routes/Product_API.js#L1) — product-related endpoints.
- [routes/User_API.js](Week_03_Backend/routes/User_API.js#L1) — user-related endpoints.
- [package.json](Week_03_Backend/package.json#L1) — lists dependencies (express, nodemon).
- [testing.http](Week_03_Backend/testing.http#L1) — example HTTP requests for quick testing (use with REST client extension).

Suggested flow
- Start the server.
- Open `testing.http` and call the routes.
- Compare the structure used for user routes and product routes.

Run instructions
- Install dependencies:

```bash
cd Week_03_Backend
npm install
```

- Start the server (one of):

```bash
node server.js
# or if you prefer live reload (nodemon is a dependency):
npx nodemon server.js
```

Notes
- Endpoints and request examples are provided in `testing.http` to experiment with the APIs.
- No Vercel deployment link is documented for this backend yet.
