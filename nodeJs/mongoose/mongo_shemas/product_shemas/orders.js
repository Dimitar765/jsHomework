import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  order_date: {
    type: String,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  costumer_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Costumer",
    },
  ],
});

export default orderSchema;
