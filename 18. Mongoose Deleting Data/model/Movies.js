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

/*
  // multiple document creation function:-
  const insertManyMovies = async () => {
    try {
      // creating new document:-
      const film1 = new movieModel({
        name: "Your Name",
        ratings: 5,
        money: 17000,
        genre: ["Thriller", "Adventure"],
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
      const film2 = new movieModel({
        name: "Weathering with You",
        ratings: 3,
        money: 25000,
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
        name: "Belle",
        ratings: 3,
        money: 17000,
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
        name: "Suzume",
        ratings: 5,
        money: 15000,
        genre: ["Adventure", "Drama", "Fantasy"],
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

      const result = await movieModel.insertMany([film1, film2, film3, film4]);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
*/

// DELETE:-

const deleteByID = async () => {
  try {
    const result = await movieModel.findByIdAndDelete(
      "6883deea2a3a00a4447a5b5b"
    );
    console.log("Delete by ID:-");
    console.log(result);
    console.log("-------------------------------------------------");

    // OUTPUT:-
    /*
      null
    */
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDoc = async () => {
  try {
    const result = await movieModel.deleteOne(
      {name: "Suzume"}
    );
    console.log("Delete by ID:-");
    console.log(result);
    console.log("-------------------------------------------------");

    // OUTPUT:-
    /*
      { acknowledged: true, deletedCount: 1 }
    */
  } catch (error) {
    console.log(error);
  }
};

const deleteManyDoc = async () => {
  try {
    const result = await movieModel.deleteMany(
      {ratings: 3}
    );
    console.log("Delete by ID:-");
    console.log(result);
    console.log("-------------------------------------------------");

    // OUTPUT:-
    /*
      { acknowledged: true, deletedCount: 2 }
    */
  } catch (error) {
    console.log(error);
  }
};

export { movieModel, deleteByID, deleteOneDoc, deleteManyDoc };
