import express from "express";
import { mongo_connection } from "./mongo.connection.js";
import router from "./const/router.connect.js";
import productsRouter from "./routes/routes.js";
import orderRouter from "./routes/orders.routes.js";
import costumerRouter from "./routes/costumer.route.js";

const app = express();

app.use(express.json());
app.use(router);
app.use("/products", productsRouter);
app.use("/orders", orderRouter);
app.use("/costumers", costumerRouter);

app.listen(3000, async () => {
  console.log("up and running");
  await mongo_connection();
});
