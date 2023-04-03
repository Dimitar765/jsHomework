import { Router } from "express";
import CostumerControler from "../controlers/costumer.controler.js";

const costumerControler = new CostumerControler();
const costumerRouter = Router();

costumerRouter.get("/", costumerControler.getCostumers);
costumerRouter.get("/:id", costumerControler.getCostumerById);
costumerRouter.post("/", costumerControler.addCostumer);
costumerRouter.delete("/:id", costumerControler.deleteCostumer);
costumerRouter.patch("/:id", costumerControler.updateCostumer);

export default costumerRouter;
