import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },
  descriptions: {
    type: String,
  },
  price: {
    type: Number,
  },
  reviews: [],
});

export default productSchema;
