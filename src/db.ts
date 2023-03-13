
import "dotenv/config";
import mongoose from "mongoose";

export  const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!');
  }
};
