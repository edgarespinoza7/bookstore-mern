import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./src/books/book.route.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

//Routes
app.use("/api/books", bookRoutes);


async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  app.get("/", (req, res) => {
    res.send("Bookstore API is running!");
  });
}

main()
  .then(() => console.log("MongoDB connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
