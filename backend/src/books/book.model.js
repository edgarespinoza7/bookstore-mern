import mongoose from "mongoose";

// Define the schema for the Book model
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      required: true,
      default: false,
    },
    coverImage: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
