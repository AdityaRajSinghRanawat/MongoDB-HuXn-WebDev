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

// SHOW/FIND:-

const allDoc = async () => {
  try {
    const result = await movieModel.find();
    console.log("Show All Docs:-");
    console.log(result);
    console.log(
      "------------------------------------------------------------------"
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const specificDocField = async () => {
  try {
    const result = await movieModel.find();

    // Iterating Over:-
    console.log("Show Specific Docs Field:-");
    result.forEach((movie) => {
      console.log(movie.name);
    });

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const singleDoc = async () => {
  try {
    const result = await movieModel.findById("68839b864bb4499167894313");
    console.log("Show Doc by ID:-");
    console.log(result);
    console.log(
      "------------------------------------------------------------------"
    );

    // We can find the specific info about it too:-
    console.log(`Name = ${result.name}`);
    console.log(`Ratings = ${result.ratings}`);
    console.log(`Money = ${result.money}`);
    console.log(
      "------------------------------------------------------------------"
    );

    // another way to do that:-
    const result2 = await movieModel.findById(
      "68839b864bb4499167894313",
      "name"
    );
    console.log(result2);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const docWithField = async () => {
  try {
    const result = await movieModel.find({ name: "The Dark Knight" });

    console.log("Show Single/Muliple Doc by Field:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const limitDoc = async () => {
  try {
    const result = await movieModel.find().limit(3);

    console.log("Show limit doc:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const skipDoc = async () => {
  try {
    const result = await movieModel.find().skip(2);

    console.log("Show skip doc:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const countDoc = async () => {
  try {
    const result = await movieModel.find().countDocuments();

    console.log("Show count of doc:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const sortDoc = async () => {
  try {
    const result = await movieModel.find().sort({ name: 1 });

    console.log("Show sort doc (ascending):-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );

    const result2 = await movieModel.find().sort({ name: -1 });

    console.log("Show sort doc (descending):-");
    console.log(result2);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const comparisionOperatorInDoc = async () => {
  try {
    const result = await movieModel.find({ ratings: { $gt: 3 } });

    console.log("Show comparision operator in doc:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );

    // ne = not equal
    const result2 = await movieModel.find({ ratings: { $ne: 5 } });

    console.log("Show ($ne) comparison operator in doc:-");
    console.log(result2);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const logicalOperatorInDoc = async () => {
  try {
    const result = await movieModel.find({
      $and: [{ ratings: 5 }, { money: 12.5 }],
    });

    console.log("($and) operator in doc:-");
    console.log(result);

    console.log(
      "------------------------------------------------------------------"
    );

    const result2 = await movieModel.find({
      $or: [{ ratings: 5 }, { money: 12.5 }],
    });

    console.log("($or) operator in doc:-");
    console.log(result2);

    console.log(
      "------------------------------------------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  movieModel,
  allDoc,
  specificDocField,
  singleDoc,
  docWithField,
  limitDoc,
  skipDoc,
  countDoc,
  sortDoc,
  comparisionOperatorInDoc,
  logicalOperatorInDoc,
};
