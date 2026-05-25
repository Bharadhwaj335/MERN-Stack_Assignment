# Week 03 - Backend (Express) Exercises

Overview
- This week is an Express backend practice folder focused on route organization and API testing.
- It contains separate route files for user and product APIs, plus a single server bootstrap file.

Folder Tree
```text
Week_03_Backend/
├── server.js
├── testing.http
├── package.json
├── package-lock.json
├── routes/
│   ├── Product_API.js
│   └── User_API.js
└── .gitignore
```

Purpose
- Learn how to split backend logic into route modules.
- Practice HTTP testing from VS Code using a `.http` file.
- Understand the request flow from Express app setup to route handlers and responses.

Main Files
- [server.js](Week_03_Backend/server.js#L1) - creates the Express app, mounts the route modules, and starts the server.
- [routes/Product_API.js](Week_03_Backend/routes/Product_API.js#L1) - product route definitions.
- [routes/User_API.js](Week_03_Backend/routes/User_API.js#L1) - user route definitions.
- [testing.http](Week_03_Backend/testing.http#L1) - sample REST requests.
- [package.json](Week_03_Backend/package.json#L1) - dependency list.

Schemas
- This week does not define Mongoose schemas yet.
- The focus is on Express route structure and API wiring only.

Run Instructions

```bash
cd Week_03_Backend
npm install
node server.js
```

If you want automatic restarts:

```bash
npx nodemon server.js
```

Testing
- Open `testing.http` in VS Code REST Client or use Postman/Insomnia.
- Hit the user and product routes and observe the request/response behavior.

Deployment
- No Vercel deployment link is documented for this backend.
