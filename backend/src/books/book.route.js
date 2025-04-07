import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from "./book.controller.js"; // Import the createBook function

import veryAdminToken from "../middleware/verifyAdminToken.js"; // Import the veryAdminToken middleware   


const router = express.Router();

// Create a new book
router.post("/create-book", veryAdminToken, createBook);

// Get all books
router.get("/", getAllBooks);

// Get a single book by ID
router.get("/:id", getBookById);

// Update a book by ID
router.put("/edit/:id", veryAdminToken, updateBook);

// Delete a book by ID

router.delete("/delete/:id", veryAdminToken, deleteBook);

export default router;