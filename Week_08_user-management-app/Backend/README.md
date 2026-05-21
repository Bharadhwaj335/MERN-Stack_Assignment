# Week 08 - User Management Backend

Overview
- This folder contains the backend API for the user management fullstack app.
- It uses Express, MongoDB, and environment variables to handle server and data-layer logic.

Learning goals
- Build REST APIs for user management.
- Separate routes, models, and server bootstrap logic.
- Prepare an API backend for frontend integration.

Project structure
- [server.js](Week_08_user-management-app/Backend/server.js#L1) - main server entry point.
- [APIs/UserAPI.js](Week_08_user-management-app/Backend/APIs/UserAPI.js#L1) - user API routes.
- [Models/UserModel.js](Week_08_user-management-app/Backend/Models/UserModel.js#L1) - user schema/model.
- [testing.http](Week_08_user-management-app/Backend/testing.http#L1) - sample API requests.
- [package.json](Week_08_user-management-app/Backend/package.json#L1) - dependencies and metadata.

Tech stack
- Node.js
- Express
- MongoDB / Mongoose
- CORS
- dotenv

How to run

```bash
cd Week_08_user-management-app/Backend
npm install
node server.js
```

Testing
- Use `testing.http` in VS Code REST Client or another API client to exercise the endpoints.

Deployment
- No Vercel deployment link is documented yet. Add the deployed API URL here if this backend is published later.