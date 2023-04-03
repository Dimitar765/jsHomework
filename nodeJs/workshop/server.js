import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import router from "./consts/router.const.js";
import productRouter from "./routes/product.router.js";
import cardRouter from "./routes/cart.router.js";

const app = express();

app.use(express.json());

app.use(router);
app.use("/products", productRouter);
app.use("/cart", cardRouter);

app.listen(3000, async () => {
  console.log("Server is up and running");
  await mongo_connection();
});
