import mongoose from "mongoose";
import productSchema from "../mongo_shemas/product_shemas/product.schema.js";

class ProductModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Product", productSchema, "Products");
  }
  async getAllProducts() {
    const products = await this.mongo_model.find();
    return products;
  }
  async getById(productId) {
    const product = await this.mongo_model.findById(productId);
    return product;
  }

  async updateProduct(productId, productData) {
    const product = await this.mongo_model.findById(productId);
    if (!product) {
      throw new Error(`product with ${productId} not found`);
    }
    await this.mongo_model.updateOne(
      { _id: productId },
      {
        name: productData.name || product.name,
        description: productData.description || product.description,
        price: productData.price || product.price,
      }
    );
  }

  async addProduct(productData) {
    const product = new this.mongo_model(productData);
    const response = await product.save();
    console.log(response);
  }
  async deleteProduct(productId) {
    await this.mongo_model.findByIdAndDelete(productId);
  }
}
export default ProductModel;
