# Week 04: Advanced E-Commerce Backend

This is a full-featured MERN stack backend application with MongoDB integration, JWT authentication, and complete user and product management APIs.

## Features

### Authentication & Authorization
- User registration with password hashing (bcrypt)
- User login with JWT token generation
- Cookie-based session management
- Protected routes using middleware

### User Management
- User registration
- User login/logout
- User profile management
- Password hashing for security

### Product Management
- Create products
- Read/list products
- Update products
- Delete products

## Project Structure

```
Week_04_Advanced_Backend/
├── APIs/
│   ├── user_api.js       # User routes and controllers
│   └── product_api.js    # Product routes and controllers
├── Middleware/
│   └── middleware1.js    # Authentication middleware
├── models/
│   ├── user_model.js     # User MongoDB schema
│   └── product_model.js  # Product MongoDB schema
├── server.js             # Main application entry point
├── package.json          # Dependencies and scripts
└── testing.http          # HTTP requests for testing
```

## Technologies Used

- **Express.js** (v5.2.1): Web framework
- **MongoDB** with **Mongoose** (v9.1.5): Database and ODM
- **JWT** (jsonwebtoken): Token-based authentication
- **bcrypt.js**: Password hashing
- **cookie-parser**: Cookie handling
- **nodemon**: Development auto-restart

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB running on `localhost:27017`

### Installation

```bash
cd Week_04_Advanced_Backend
npm install
```

### Running the Application

```bash
# Start the server
node server.js

# Or for development with auto-restart
npx nodemon server.js
```

The server will start on `http://localhost:3000`

## API Endpoints

### User API (`/user-api`)
- `POST /user-api/register` - Register a new user
- `POST /user-api/login` - Login user
- `GET /user-api/profile` - Get user profile (protected)
- Additional user operations...

### Product API (`/product-api`)
- `POST /product-api/products` - Create a new product
- `GET /product-api/products` - Get all products
- `GET /product-api/products/:id` - Get product by ID
- `PUT /product-api/products/:id` - Update product
- `DELETE /product-api/products/:id` - Delete product

## Testing

Use the `testing.http` file with REST Client extension in VS Code or any HTTP client to test the endpoints.

## Database Configuration

The application connects to MongoDB at:
```
mongodb://localhost:27017/e-commerce
```

Make sure MongoDB is running before starting the application.

## Security Features

- Passwords are hashed using bcrypt before storing
- JWT tokens for stateless authentication
- HTTP-only cookies for secure token storage
- Authentication middleware to protect routes
- Error handling middleware for graceful error responses

## Development Notes

This is the advanced version (Week 4) that builds upon the basic Express backend from Week 3, adding:
- Database persistence with MongoDB
- User authentication and authorization
- Security best practices
- Production-ready error handling
