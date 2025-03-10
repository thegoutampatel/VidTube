import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import "dotenv/config";

//we use ASYN beacuse it takes time to connect with DB.
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `\n MongoDB Connected ! DB host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB Connection Error..", error);
    process.exit(1);
  }
};

export default connectDB;
