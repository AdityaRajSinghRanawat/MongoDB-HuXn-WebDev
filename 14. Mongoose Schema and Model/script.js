/*
    Schema?

    Mongoose schema is a blueprint that defines the structure of 
    a document in a MongoDB database collection. It defines the 
    fields, their data types, and any additional options 
    such as default values, validation rules, and indexes.
*/

/*
    Creating Schema:-

    import mongoose from "mongoose";

    const schema = new mongoose.Schema ({
        key: type,                  // Shorthand
        keyTwo: { type: String },   // Recommended
    });
*/

/*
    Types:-

    const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
        { value: { type: String }, publish: { type: Date, default: Date.now } },
    ],
    });

*/

import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectDB.js";

// import model(used schema)
import movieModel from "./model/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const database_url =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/my_films";

connectDB(database_url);

app.get("/", (req, res) => {
  res.send("Welcome to MongoDB");
});


/*
    Model?

    A model is a constructor function that represents a 
    collection in MongoDB and defines the schema for 
    each document.
*/

/*
    Schema & Model:-

    const mongoose = require("mongoose");

    // Define a schema for a "user" collection
    const userSchema = new mongoose.Schema({
        name: String,
        email: { type: String, unique: true },
        age: Number,
    });

    // Create a model for the "user" collection using the schema
    const User = mongoose.model("User", userSchema);

    export default User;
*/

/*
    Inserting Document To Database:-

    // Define a schema for a "user" collection
    const userSchema new mongoose.Schema({ name: String });

    // Create a model for the "user" collection using the schema
    const User = mongoose.model("User", userschema);

    // Create a new instance of the User model with the data 
    // you want to store in the document
    const newUser = new User({ name: "John Doe" });

    // Save the new user document to the database using the save() method
    newUser.save((err) => (err? console.log(err): console.log("User Saved")));
*/




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});