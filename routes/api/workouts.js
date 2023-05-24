const express = require("express");
const router = express.Router();
const workoutsCtrl = require("../../controllers/api/workoutController");

// GET /api/workouts
router.get("/", workoutsCtrl.getWorkouts);
// POST /api/workouts
router.post("/", workoutsCtrl.createWorkout);
// PUT /api/workouts/:id
router.put("/:id", workoutsCtrl.updateWorkout);
// DELETE /api/workouts/:id
router.delete("/:id", workoutsCtrl.deleteWorkout);

module.exports = router;
