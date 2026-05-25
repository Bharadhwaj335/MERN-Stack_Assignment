# Week 04 - Advanced E-Commerce Backend

Overview
- This is the advanced backend version of the e-commerce practice project.
- It adds MongoDB, Mongoose models, cookie handling, and route protection on top of the earlier Express structure.

Folder Tree
```text
Week_04_E-Commerce_Backend/
├── server.js
├── testing.http
├── package.json
├── package-lock.json
├── APIs/
│   ├── product_api.js
│   └── user_api.js
├── Middleware/
│   └── middleware1.js
├── models/
│   ├── product_model.js
│   └── user_model.js
└── .gitignore
```

Features
- User registration and login flow.
- JWT-based authentication.
- Cookie-based token storage.
- Product CRUD operations.
- Middleware-based route protection.

Main Files
- [server.js](Week_04_E-Commerce_Backend/server.js#L1) - application bootstrap and route mounting.
- [APIs/user_api.js](Week_04_E-Commerce_Backend/APIs/user_api.js#L1) - user routes.
- [APIs/product_api.js](Week_04_E-Commerce_Backend/APIs/product_api.js#L1) - product routes.
- [Middleware/middleware1.js](Week_04_E-Commerce_Backend/Middleware/middleware1.js#L1) - authentication middleware.
- [models/user_model.js](Week_04_E-Commerce_Backend/models/user_model.js#L1) - user schema.
- [models/product_model.js](Week_04_E-Commerce_Backend/models/product_model.js#L1) - product schema.

Schemas
- User schema: `username`, `password`, `email`, and `cart`.
- Cart sub-schema: `product` as an ObjectId reference to the product model and `quantity` with a minimum of 1.
- Product schema: `pid`, `productname`, `price`, and `brandname`.
- Both schemas use strict mode, timestamps, and validation rules.

Technology Stack
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser

Setup

```bash
cd Week_04_E-Commerce_Backend
npm install
node server.js
```

For development reload:

```bash
npx nodemon server.js
```

Testing
- Use `testing.http` with VS Code REST Client or Postman.
- Verify authentication, product CRUD, and protected route behavior.

Database
- The app connects to `mongodb://localhost:27017/e-commerce`.
- Make sure MongoDB is running before starting the server.

Deployment
- No Vercel deployment link is documented for this backend.
