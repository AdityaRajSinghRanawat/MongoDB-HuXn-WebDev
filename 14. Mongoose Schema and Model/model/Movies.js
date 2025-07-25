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

// collection name:-
// this will become "films"
const movieModel = mongoose.model("Film", movieSchema);

export default movieModel;
