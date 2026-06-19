import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();


// Middleware
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "User Management API Running"
  });
});


// API Routes
app.use(
  "/api/users",
  userRoutes
);


// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});


// Server
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});