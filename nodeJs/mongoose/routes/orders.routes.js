import { Router } from "express";
import OrderController from "../controlers/orders.controller.js";

const orderController = new OrderController();
const orderRouter = Router();

orderRouter.get("/", orderController.getAllOrders);
orderRouter.post("/", orderController.addOrder);
orderRouter.get("/:id", orderController.getOrderById);
orderRouter.delete("/:id", orderController.deleteOrder);

export default orderRouter;
