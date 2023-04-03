import mongoose from "mongoose";
import costumerShema from "../mongo_shemas/product_shemas/costumers.schema.js";

class CostumersModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Costumer", costumerShema);
  }

  async getAllCostumers() {
    const costumers = await this.mongo_model.find();

    return costumers;
  }
  async getCostumerById(costumerId) {
    const costumer = await this.mongo_model.findById(costumerId);
    return costumer;
  }
  async addCostumer(costumerData) {
    const costumer = await this.mongo_model(costumerData);
    await costumer.save();
  }

  async updateCostumer(costumerId, costumerData) {
    const costumer = await this.mongo_model.findById(costumerId);
    if (!costumer) {
      throw new Error("consumer not found");
    }
    await this.mongo_model.updateOne(
      // { _id: costumerId },
      {
        name: costumerData.name,
        email: costumerData.email,
        phone: costumerData.phone,
        adress: costumerData.adress,
      }
    );
  }

  async deleteCostumer(costumerId) {
    await this.mongo_model.findByIdAndDelete(costumerId);
  }
}

export default CostumersModel;
