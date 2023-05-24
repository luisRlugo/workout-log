import sendRequest from "./send-request";

const BASE_URL = "/api/workouts";

// Retrieve all workouts
export function getAllWorkouts() {
  return sendRequest(BASE_URL);
}

// Create a new workout
export function createWorkout(workoutData) {
  return sendRequest(BASE_URL, "POST", workoutData);
}

// Update a workout by ID
export function updateWorkout(workoutId, workoutData) {
  return sendRequest(`${BASE_URL}/${workoutId}`, "PUT", workoutData);
}

// Delete a workout by ID
export function deleteWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/${workoutId}`, "DELETE");
}
