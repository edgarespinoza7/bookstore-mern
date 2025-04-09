import mongoose from "mongoose";
import express from "express";
import Order from "../orders/order.model.js";
import Book from "../books/book.model.js";


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$totalPrice" }
        }
      },
    ]);

    const trendingBooksCount = await Book.aggregate([
      { $match: { trending: true } },
      { $count: 'trendingBooksCount' }
    ]);

    const trendingBooks = trendingBooksCount.length > 0 ? trendingBooksCount[0].trendingBooksCount : 0;

    const totalBooks = await Book.countDocuments();

    const monthlySales = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          totalSales: { $sum: "$totalPrice" },
          totalOrders: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);


    res.status(200).json({
      totalSales: totalSales[0]?.totalSales || 0,
      trendingBooks,
      totalBooks,
      monthlySales,
      totalOrders,
    });

  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;