# JWT Authentication System

A complete JWT Authentication System built using Node.js, Express.js, MongoDB, JWT, Cookies, and Local Storage.

## Features

- User Registration
- User Login
- Password Hashing using bcrypt
- Access Token Authentication
- Refresh Token Authentication
- Protected Routes
- User Profile Route
- Logout Functionality
- MongoDB Integration
- HTTP Only Cookies
- Automatic Access Token Refresh

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- cors
- dotenv

### Frontend

- HTML
- CSS
- JavaScript

---

## Project Structure

```bash
JWT-AUTH
│
├── BACKEND
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── config
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── FRONTEND
    ├── index.html
    ├── style.css
    └── app.js
```

---

## Authentication Flow

### 1. Register

User creates an account.

- Password is hashed using bcrypt.
- User data is stored in MongoDB.

---

### 2. Login

User logs in with email and password.

Backend generates:

- Access Token (15 Minutes)
- Refresh Token (7 Days)

Access Token is stored in:

```text
Local Storage
```

Refresh Token is stored in:

```text
HTTP Only Cookie
```

and also saved in MongoDB.

---

### 3. Protected Route

Frontend sends:

```http
Authorization: Bearer ACCESS_TOKEN
```

Backend middleware:

- Verifies JWT
- Extracts User ID
- Attaches user information to request

Then user can access protected routes.

---

### 4. Refresh Token

When Access Token expires:

Frontend calls:

```http
POST /api/auth/refresh
```

Backend:

- Verifies Refresh Token
- Checks MongoDB
- Generates new Access Token

User remains logged in without entering credentials again.

---

### 5. Logout

Backend:

- Removes Refresh Token from MongoDB
- Clears Cookie

Frontend:

- Removes Access Token from Local Storage

User is completely logged out.

---

## API Endpoints

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

### Profile

```http
GET /api/auth/profile
```

### Refresh Token

```http
POST /api/auth/refresh
```

### Logout

```http
POST /api/auth/logout
```

---

## Environment Variables

Create a `.env` file inside BACKEND folder.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/JWT-AUTH

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/JWT-AUTH.git
```

### Backend Setup

```bash
cd BACKEND

npm install

npm run dev
```

### Frontend

Run frontend using Live Server.

```text
http://localhost:5500
```

---

## What I Learned

- JWT Authentication
- Access Token vs Refresh Token
- Cookies
- Local Storage
- Middleware
- Protected Routes
- MongoDB Authentication Flow
- Token Refresh Mechanism
- CORS Handling
- Cookie Security

---

## Author

Hasan
