import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./src/books/book.route.js";
import cors from "cors";
import orderRoutes from "./src/orders/order.route.js";
import userRoutes from "./src/users/user.route.js";
import adminRoutes from "./src/stats/admin.stats.js";

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
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);


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
