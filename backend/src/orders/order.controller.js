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

