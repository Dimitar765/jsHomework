import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const mongo_connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "e-commerce",
    });
    console.log("connected to db");
  } catch (error) {
    throw new Error("connection failed");
  }
};
