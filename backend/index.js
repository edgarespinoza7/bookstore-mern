import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

//Routes
app.get("/", (req, res) => {
  res.send("Bookstore API is running!");
});

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
}

main()
  .then(() => console.log("MongoDB connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
