import Book from "./book.model.js"; // Import the Book model


// Create a new book  
export const createBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(201).json({ message: "Book created successfully", newBook });
  } catch (error) {
    console.log("Error creating Book", error);
    res.status(500).json({ message: "Failed to create book", error });
  }
}

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.log("Error fetching books", error);
    res.status(500).json({ message: "Failed to fetch books", error });
  }
}

// Get a single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching book", error);
    res.status(500).json({ message: "Failed to fetch book", error });
  }
}

// Update a book by ID
export const updateBook = async (req, res) => {
  try {

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", updatedBook }); 
    
  } catch (error) {
    console.log("Error updating the book", error);
    res.status(500).json({ message: "Failed to update the book", error });
  }
}