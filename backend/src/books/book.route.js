import express from "express";
import { createBook, getAllBooks, getBookById, updateBook } from "./book.controller.js"; // Import the createBook function


const router = express.Router();

// Create a new book
router.post("/create-book", createBook);

// Get all books
router.get("/", getAllBooks);

// Get a single book by ID
router.get("/:id", getBookById);

// Update a book by ID
router.put("/edit/:id", updateBook);



export default router;