import express from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

import auth from "../middleware/auth.js";

import {
  body,
  validationResult
} from "express-validator";

const router = express.Router();


// Validation Middleware
const validateUser = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("age")
    .isInt({ min: 1 })
    .withMessage(
      "Age must be greater than 0"
    ),

  (req, res, next) => {
    const errors =
      validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    next();
  }
];


// Routes

router.post(
  "/",
  auth,
  validateUser,
  createUser
);

router.get(
  "/",
  auth,
  getUsers
);

router.get(
  "/:id",
  auth,
  getUserById
);

router.put(
  "/:id",
  auth,
  validateUser,
  updateUser
);

router.delete(
  "/:id",
  auth,
  deleteUser
);

export default router;