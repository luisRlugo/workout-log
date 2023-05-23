const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../../controllers/api/workoutController");

const router = express.Router();
// I.N.D.U.C.E.S

// Index route Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete route
router.delete("/:id", deleteWorkout);
// router.route("/:id").get(getWorkoutById).delete(deleteWorkout);

// Update route
router.patch("/:id", updateWorkout);

module.exports = router;
