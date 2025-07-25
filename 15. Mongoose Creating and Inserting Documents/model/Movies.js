// Write the file name first letter in upper case,
// its a convention

import mongoose from "mongoose";

// Define Schema:-

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  ratings: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },

  genre: {
    type: Array,
  },

  isActive: {
    type: Boolean,
  },

  // this will be a array of documents each having it ID
  // i.e. it is nested document
  comments: [
    {
      value: {
        type: String,
      },
      published: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// Creating Model:-

/* 
    By default mongoose will:-

    - add "s" at the end of the collection name
    - lower the first letter case 
*/

// INSERT:-

// collection name:-
// this will become "films"
const movieModel = mongoose.model("Film", movieSchema);

// document creation function:-
const createDocument = async () => {
  try {
    // creating new document:-
    const film1 = new movieModel({
      name: "Avengers",
      ratings: 5,
      money: 12.5,
      genre: ["Action", "Adventure"],
      isActive: true,
      comments: [
        /* They will be nested documents*/
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });

    const result = await film1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// multiple document creation function:-
const insertManyMovies = async () => {
  try {
    // creating new document:-
    const film1 = new movieModel({
      name: "Moana",
      ratings: 5,
      money: 10000,
      genre: ["Comedy", "Adventure"],
      isActive: true,
      comments: [
        /* They will be nested documents*/
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });
    const film2 = new movieModel({
      name: "The Dark Knight",
      ratings: 3,
      money: 5000,
      genre: ["Action", "Adventure", "Drama"],
      isActive: true,
      comments: [
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });
    const film3 = new movieModel({
      name: "The Lord of the Rings: The Fellowship of the Ring",
      ratings: 4,
      money: 7000,
      genre: ["Action", "Adventure", "Fantasy"],
      isActive: true,
      comments: [
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });
    const film4 = new movieModel({
      name: "Pulp Fiction",
      ratings: 2,
      money: 3000,
      genre: ["Crime", "Drama"],
      isActive: true,
      comments: [
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });
    const film5 = new movieModel({
      name: "The Godfather",
      ratings: 3,
      money: 7500,
      genre: ["Crime", "Thriller"],
      isActive: true,
      comments: [
        {
          value: "It was a Good Movie",
        },
        {
          value: "It was a Bad Movie",
        },
        {
          value: "It was a Awesome Movie",
        },
      ],
    });

    // insertMany() is a mongoose function
    const result = await movieModel.insertMany([
      film1,
      film2,
      film3,
      film4,
      film5,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// SHOW/FIND:-

const allDoc = async () => {
  try {
    const result = await movieModel.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { movieModel, createDocument, insertManyMovies, allDoc };
