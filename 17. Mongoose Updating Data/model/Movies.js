import mongoose from "mongoose";

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

const movieModel = mongoose.model("Film", movieSchema);

// UPDATE:-

// updateOne(filter, update, options):-
const updatebyID = async (id) => {
  try {
    const result = await movieModel.updateOne(
      /* Pulp Fiction */
      { _id: id },
      { name: "Fight Club" } 
    );
    console.log("Update by ID:-")
    console.log(result);
    console.log()
    /*
      OUTPUT:-
      {
        acknowledged: true,
        modifiedCount: 1,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1
      }
    */
  } catch (error) {
    console.log(error);
  }
};

// updateMany(filter, update, options):-
const updateManyDoc = async () => {
  try {
    const result = await movieModel.updateMany(
      /* The Dark Knight */
      /* The Godfather */
      { ratings: 3},
      { ratings: 1 } 
    );
    console.log("Update many:-")
    console.log(result);
    console.log()
    /*
      OUTPUT:-
      {
        acknowledged: true,
        modifiedCount: 1,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1
      }
    */
  } catch (error) {
    console.log(error);
  }
};

export { movieModel, updatebyID, updateManyDoc };
