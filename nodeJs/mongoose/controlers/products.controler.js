import ProductModel from "../models/products.models.js";

const productModel = new ProductModel();

class ProductControler {
  async getAllProducts() {
    const products = await productModel.getAllProducts();
    return products;
  }
  async addProduct(productData) {
    await productModel.addProduct(productData);
  }
  async getById(productId) {
    const product = await productModel.getById(productId);
    return product;
  }
  async updateProduct(productId, productData) {
    await productModel.updateProduct(productId, productData);
  }
  async deleteProduct(productId) {
    await productModel.deleteProduct(productId);
  }
}

export default ProductControler;
