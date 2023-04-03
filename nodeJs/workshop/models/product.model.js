import mongoose from "mongoose";
import productSchema from "../schemas/product.schema.js";

class ProductModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Product", productSchema, "Products");
  }
  async getAllProduct() {
    const products = await this.mongo_model.find();
    return products;
  }
  async getById(productId) {
    const product = await this.mongo_model.findById(productId);
    return product;
  }

  async addProduct(productData) {
    const product = new this.mongo_model(productData);
    const response = await product.save();
  }

  async deleteProduct(productId) {
    await this.mongo_model.findByIdAndDelete(productId);
  }
  async searchForProducts(req, res) {
    const { name } = req.body;
    const product = await this.mongo_model.find({ name: { $regex: name } });
    return product;
  }
}

export default ProductModel;
