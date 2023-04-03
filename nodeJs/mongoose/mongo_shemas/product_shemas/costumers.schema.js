import mongoose from "mongoose";
const { Schema } = mongoose;

const costumerShema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  adress: {
    type: String,
  },
});

export default costumerShema;
