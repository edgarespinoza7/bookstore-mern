import express from "express";
import { createOrder } from "./order.controller.js"; // Import the createOrder function

const router = express.Router(); 

// Create order endpoint
router.post("/", createOrder);

export default router;