# Week 08 - User Management Backend

Overview
- This folder contains the backend API for the user management fullstack app.
- It uses Express, MongoDB, and environment variables to handle server and data-layer logic.

Folder Tree
```text
Backend/
├── server.js
├── testing.http
├── package.json
├── package-lock.json
├── APIs/
│   └── UserAPI.js
├── Models/
│   └── UserModel.js
└── .gitignore
```

Learning Goals
- Build REST APIs for user management.
- Separate routes, models, and server bootstrap logic.
- Prepare an API backend for frontend integration.

Main Files
- [server.js](Week_08_user-management-app/Backend/server.js#L1) - server setup, middleware, DB connection, and route mounting.
- [APIs/UserAPI.js](Week_08_user-management-app/Backend/APIs/UserAPI.js#L1) - user CRUD routes.
- [Models/UserModel.js](Week_08_user-management-app/Backend/Models/UserModel.js#L1) - user schema/model.
- [testing.http](Week_08_user-management-app/Backend/testing.http#L1) - sample API requests.
- [package.json](Week_08_user-management-app/Backend/package.json#L1) - dependencies and metadata.

Schema Details
- `UserModel` includes `name`, `email`, `dateOfBirth`, `mobileNumber`, and `status`.
- `status` is used for soft delete and activation flow.
- The schema uses timestamps, no version key, and strict mode.

API Flow
- `POST /user-api/users` creates a user.
- `GET /user-api/users` lists active users.
- `GET /user-api/users/:id` fetches one user.
- `DELETE /user-api/users/:id` soft deletes a user.
- `PATCH /user-api/users/:id` reactivates a user.

Tech Stack
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