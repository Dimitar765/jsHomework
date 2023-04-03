import mongoose from "mongoose";
import orderSchema from "../mongo_shemas/product_shemas/orders.js";

class OrderModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Order", orderSchema);
  }
  async getAllOrders() {
    const orders = await this.mongo_model
      .find()
      .populate(["items", "costumer_id"]);
    return orders;
  }
  async getOrderById(orderId) {
    const order = await this.mongo_model
      .findById(orderId)
      .populate(["items", "costumer_id"]);
    return order;
  }

  async addOrder(orderData) {
    const order = await this.mongo_model(orderData);
    await order.save();
  }
  async deleteOrder(orderId) {
    await this.mongo_model.findByIdAndDelete(orderId);
  }
}

export default OrderModel;
