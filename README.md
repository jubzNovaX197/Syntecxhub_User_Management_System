# 🔐 Syntecxhub User Management System

A RESTful User Management API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project was developed during the **Syntecxhub Web Development Internship** to practice backend development, CRUD operations, database integration, and API testing.

## 🚀 Live Demo

🌐 https://syntecxhub-user-management-system-orvg.onrender.com

## 📂 GitHub Repository

📌 https://github.com/jubzNovaX197/Syntecxhub_User_Management_System

---

## 📖 About the Project

Syntecxhub User Management System is a backend application that allows users to be created, viewed, updated, and deleted through REST API endpoints.

The project demonstrates CRUD operations, MongoDB database integration, Express routing, Mongoose schema modeling, and Basic Authentication.

All API endpoints were tested using Postman.

---

## ✨ Features

* ➕ Create User
* 📖 Get All Users
* 🔍 Get Single User
* ✏️ Update User
* 🗑️ Delete User
* 🔐 Basic Authentication
* 🗄️ MongoDB Database Integration
* ⚠️ Error Handling
* 🧪 Postman API Testing
* ☁️ Render Deployment

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Postman
* Git
* GitHub

### Deployment

* Render

---

## 📁 Project Structure

```text
Syntecxhub_User_Management_System/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /api/users     |
| GET    | /api/users     |
| GET    | /api/users/:id |
| PUT    | /api/users/:id |
| DELETE | /api/users/:id |

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/jubzNovaX197/Syntecxhub_User_Management_System.git
```

### 2. Move into Project Folder

```bash
cd Syntecxhub_User_Management_System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASIC_AUTH_USERNAME=admin
BASIC_AUTH_PASSWORD=yourpassword
```

### 5. Run Server

```bash
npm start
```

Open:

```text
http://localhost:5000
```

---

## 🧪 Testing with Postman

1. Open Postman
2. Select API Method
3. Enter API URL
4. Configure Basic Authentication
5. Send Request
6. Verify Response

---

## 🔮 Future Improvements

* JWT Authentication
* Password Hashing with bcrypt
* Input Validation
* Pagination
* Swagger Documentation
* Automated Testing
* Role-Based Access Control

---

## 👨‍💻 Developer

**Jublee Dash**

* GitHub: https://github.com/jubzNovaX197/

B.Tech CSE – Government College of Engineering Kalahandi

Web Development Intern @ Syntecxhub

---

## 🙏 Acknowledgements

Developed as part of the **Syntecxhub Web Development Internship Program**.

Special thanks to Syntecxhub for providing practical project-based learning opportunities.
