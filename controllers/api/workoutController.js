const Workout = require("../../models/Workout");

module.exports = {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};

// Retrieve all workouts
async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Create a new workout
async function createWorkout(req, res) {
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update a workout by ID
async function updateWorkout(req, res) {
  try {
    const { id } = req.params;
    const updatedWorkout = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedWorkout) {
      return res.status(400).json({ error: "Workout not found" });
    }
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a workout by ID
async function deleteWorkout(req, res) {
  try {
    const { id } = req.params;
    const deletedWorkout = await Workout.findByIdAndDelete(id);
    if (!deletedWorkout) {
      return res.status(400).json({ error: "Workout not found" });
    }
    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
