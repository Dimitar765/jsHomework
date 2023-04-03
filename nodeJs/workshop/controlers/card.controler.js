import CardModel from "../models/cart.model.js";

const cardmodel = new CardModel();

class CardControler {
  async getAllCards(req, res) {
    const cards = await cardmodel.getAllCards();
    res.send(cards);
  }
  async getCardByID(req, res) {
    const id = req.params.id;
    const card = await cardmodel.getCardById(id);
    res.send(card);
  }
  async createCard(req, res) {
    const { productId } = req.body;
    const cardData = {
      productId: productId,
    };
    await cardmodel.createCard(cardData);
    res.send("cart created");
    return cardData;
  }
  async checkOut(req, res) {
    const id = req.params.id;
    await cardmodel.checkOut(id);
    res.send("client checks out");
  }
}

export default CardControler;
