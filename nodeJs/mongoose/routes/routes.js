import { Router } from "express";
import ProductControler from "../controlers/products.controler.js";

const productsRouter = Router();
const productControler = new ProductControler();

productsRouter.get("/", async (req, res) => {
  const products = await productControler.getAllProducts();
  res.send(products);
});
//get by id

productsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productControler.getById(id);
  res.send(product);
});
productsRouter.post("/", async (req, res) => {
  const { name, description, price } = req.body;
  const productData = {
    name: name,
    description: description,
    price: price,
  };
  await productControler.addProduct(productData);
  res.send("new product created");
});

productsRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const productData = {
    name: name,
    description: description,
    price: price,
  };

  try {
    await productControler.updateProduct(id, productData);
    res.send("product updated");
  } catch (error) {
    res.send("something went wrong");
  }
});

productsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await productControler.deleteProduct(id);
  res.send("product deleted");
});

export default productsRouter;
