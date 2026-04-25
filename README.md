# 📚 Full Stack Bookstore

A full-stack web application for browsing books, managing a shopping cart, and handling user authentication. Built with React on the frontend and Node.js/Express on the backend, with MongoDB as the database.

---

## ✨ Features

- 🔐 **User Authentication** — Register and log in securely with JWT
- 🛒 **Shopping Cart** — Add, remove, and manage books in your cart
- 💾 **Persistent Storage** — Cart data saved with localStorage
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/) (Vite)
- React Router DOM
- LocalStorage for cart persistence

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + Mongoose
- JWT for authentication
- bcrypt for password hashing

---

## 📁 Project Structure

```
full-stack-bookstore/
├── frontend/               # React (Vite) app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # Auth & Cart context
│   │   └── main.jsx
│   ├── .env
│   └── vite.config.js
│
├── backend/                # Express API
│   ├── routes/             # API routes
│   ├── models/             # Mongoose models
│   ├── middleware/         # Auth middleware
│   ├── .env
│   └── server.js
│
└── README.md
```
