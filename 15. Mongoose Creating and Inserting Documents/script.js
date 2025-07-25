import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectDB.js";

// import model(used schema)
import { createDocument, insertManyMovies } from "./model/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const database_url =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/my_films";

// MongoDB interaction

// connect mongoose to MongoDB
connectDB(database_url);

/* 
    I will comment them out because 
    if these function will run then they will
    create dublicates
*/
// insert one:-
// createDocument();

// insert many:-
// insertManyMovies();

app.get("/", (req, res) => {
  res.send("Welcome to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
