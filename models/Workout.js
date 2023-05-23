const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
