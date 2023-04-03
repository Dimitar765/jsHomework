import { Router } from "express";
import CardControler from "../controlers/card.controler.js";

const cardControler = new CardControler();
const cardRouter = Router();

cardRouter.get("/", cardControler.getAllCards);
cardRouter.post("/", cardControler.createCard);
cardRouter.get("/:id", cardControler.getCardByID);
cardRouter.delete("/:id", cardControler.checkOut);

export default cardRouter;
