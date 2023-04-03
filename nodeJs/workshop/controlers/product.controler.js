import ProductModel from "../models/product.model.js";

const productModel = new ProductModel();

class ProductController {
  async getAllProducts(req, res) {
    const products = await productModel.getAllProduct();
    res.send(products);
  }

  async getProductById(req, res) {
    const productId = req.params.id;
    const product = await productModel.getById(productId);
    res.send(product);
  }
  async addProduct(req, res) {
    const { name, description, price, reviews } = req.body;
    const productData = {
      name: name,
      description: description,
      price: price,
      reviews: reviews,
    };
    await productModel.addProduct(productData);
    res.send("product added");
  }
  async deleteProduct(req, res) {
    const productId = req.params.id;
    await productModel.deleteProduct(productId);
    res.send("product deleted");
  }
  async searchByName(req, res) {
    const { name } = req.body;
    const product = await productModel.searchForProducts(name);
    res.send(product);
  }
}

export default ProductController;
