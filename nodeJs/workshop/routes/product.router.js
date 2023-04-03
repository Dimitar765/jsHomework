import { Router } from "express";
import ProductController from "../controlers/product.controler.js";

const productController = new ProductController();
const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProduct);
productRouter.get("/:id", productController.getProductById);
// productRouter.delete("/:id", productController.)
productRouter.post("/search", productController.searchByName);

export default productRouter;
