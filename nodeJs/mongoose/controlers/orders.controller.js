import OrderModel from "../models/orders.models.js";
const orderModel = new OrderModel();

class OrderController {
  async getAllOrders(req, res) {
    const orders = await orderModel.getAllOrders();
    res.send(orders);
  }

  async getOrderById(req, res) {
    const orderId = req.params.id;
    const order = await orderModel.getOrderById(orderId);
    res.send(order);
  }

  async addOrder(req, res) {
    const { productIds } = req.body;
    const { costumer_id } = req.body;
    console.log(req.body);
    const orderData = {
      order_date: new Date().toLocaleDateString(),
      items: productIds,
      costumer_id: costumer_id,
    };
    await orderModel.addOrder(orderData);
    res.send(orderData);
  }
  async deleteOrder(req, res) {
    const orderId = req.params.orderId;
    await orderModel.deleteOrder(orderId);
    res.send("order deleted");
  }
}

export default OrderController;
