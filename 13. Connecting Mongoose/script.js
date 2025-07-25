
/*
    we used:-
    npm init -y
    npm install mongoose dotenv express nodemon

    express: for creating the server
    mongoose: for connecting to the MongoDB database
    dotenv: for managing environment variables
    nodemon: for automatically restarting the server during development
*/

import express from 'express';
import dotenv from 'dotenv';
// dont forgot ".js"
import connectDB from './db/connectDB.js';
dotenv.config(); // Load environment variables from .env file

const app = express();

// write "PORT" in upper case since it is a convention 
// to use upper case for environment variables

// if .env or por is not working then use "|| 8000" to set a default port

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/movies";

// Connect to the database
connectDB(DATABASE_URL) 

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})