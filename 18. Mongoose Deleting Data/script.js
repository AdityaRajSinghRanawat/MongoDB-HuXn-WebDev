import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectDB.js";

// import functions
import { deleteByID, deleteManyDoc, deleteOneDoc } from "./model/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const database_url =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/my_films";

connectDB(database_url);

deleteByID();
deleteOneDoc();
deleteManyDoc();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
