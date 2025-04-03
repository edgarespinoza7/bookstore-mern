import express from "express";
import { createOrder, getOrdersByEmail } from "./order.controller.js"; // Import the createOrder function


const router = express.Router(); 

// Create order endpoint
router.post("/", createOrder);

// Get orders by user email
router.get("/email/:email", getOrdersByEmail);

export default router;