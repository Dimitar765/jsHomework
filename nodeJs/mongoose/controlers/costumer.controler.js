import CostumersModel from "../models/costumer.model.js";

const costumerModel = new CostumersModel();

class CostumerControler {
  async getCostumers(req, res) {
    const costumers = await costumerModel.getAllCostumers();
    res.send(costumers);
  }

  async getCostumerById(req, res) {
    const costumerId = req.params.id;
    const costumer = await costumerModel.getCostumerById(costumerId);
    res.send(costumer);
    return costumer;
  }

  async addCostumer(req, res) {
    const costumerData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
    };
    await costumerModel.addCostumer(costumerData);
    res.send("new costumer added");
  }
  async updateCostumer(req, res) {
    const costumerId = req.params.id;
    const costumerData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
    };

    await costumerModel.updateCostumer(costumerId, costumerData);
    res.send("update succesfull");
  }
  async deleteCostumer(req, res) {
    const costumerId = req.params.id;
    await costumerModel.deleteCostumer(costumerId);
    res.send("costumer deleted from db");
  }
}

export default CostumerControler;
