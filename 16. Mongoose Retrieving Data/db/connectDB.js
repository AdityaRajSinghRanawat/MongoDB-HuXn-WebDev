import mongoose from "mongoose";

const connectDB = async (database_url) => {
  try {
    await mongoose.connect(database_url);
    console.log("Database connected successfully");
    console.log(database_url);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
