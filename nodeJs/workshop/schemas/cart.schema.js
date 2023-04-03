import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

export default cardSchema;
