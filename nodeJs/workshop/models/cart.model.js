import mongoose from "mongoose";
import cardSchema from "../schemas/cart.schema.js";

class CardModel {
  mongo_model;
  constructor() {
    this.mongo_model = mongoose.model("Cart", cardSchema);
  }
  async getAllCards() {
    const cards = await this.mongo_model.find().populate("productId");
    return cards;
  }
  async getCardById(cardId) {
    const card = await this.mongo_model.findById(cardId).populate("productId");
    return card;
  }
  async createCard(cardData) {
    const card = await this.mongo_model(cardData);
    await card.save();
  }

  async checkOut(cardId) {
    await this.mongo_model.findByIdAndDelete(cardId);
  }
}

export default CardModel;
