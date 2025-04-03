import Order from "./order.model.js"

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body)
    await newOrder.save()
    res.status(200).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
}

export const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Extract email from request parameters
    const orders = await Order.find({ email }).sort({ createdAt: -1 }); // Find orders by email
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this email" });
    } else {
      res.status(200).json({ message: "Orders fetched successfully", orders });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });

  }
}