# Book Review Platform - Backend

## 📌 Project Overview
This is the backend for the **Book Review Platform**, built with Node.js and Express.js. It provides APIs for user authentication, book management, and reviews.

## 🚀 Features
- User authentication (Register/Login with JWT)
- CRUD operations for books and reviews
- Secure API endpoints with middleware
- MongoDB as the database

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Storage**: Cloudinary (for images)

## 📂 Folder Structure
```
Backend/
├── config/        # Configuration files (e.g., DB connection)
│   ├── db.js
├── controllers/   # Business logic
│   ├── authController.js
│   ├── bookController.js
│   ├── reviewController.js
│   ├── userController.js
├── middleware/    # Authentication & validation middleware
│   ├── authMiddleware.js
├── models/        # Database models
│   ├── book.js
│   ├── review.js
│   ├── user.js
├── routes/        # API routes
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   ├── reviewRoutes.js
│   ├── userRoutes.js
├── .env           # Environment variables (DO NOT COMMIT)
├── server.js      # Main entry point
├── package.json   # Project dependencies
```

## ⚡ Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/sky1143/book-review-platform.git
cd book-review-platform/Backend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file and add the following:
```sh
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
```

### 4️⃣ Start the server
```sh
npm start
```

## 📡 API Endpoints
| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| POST   | /api/auth/register  | Register a new user        |
| POST   | /api/auth/login     | User login                 |
| GET    | /api/books          | Get all books              |
| POST   | /api/books          | Add a new book             |
| GET    | /api/books/:id      | Get a single book          |
| PUT    | /api/books/:id      | Update book details        |
| DELETE | /api/books/:id      | Delete a book              |
| POST   | /api/reviews        | Add a review               |
| GET    | /api/reviews/:bookId| Get reviews for a book     |

## 🎯 Contribution
Contributions are welcome! Fork the repo, make changes, and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

---
### 🔗 Connect with Me
📧 **Email**: your-email@example.com  
🌐 **GitHub**: [sky1143](https://github.com/sky1143)  
