import styles from "./WorkoutHistoryPage.module.css";
import { useState, useEffect } from "react";
import { getAllWorkouts, deleteWorkout } from "../../utilities/workouts-api";
import moment from "moment/moment";

function WorkoutHistoryPage() {
  // State to store the list of workouts
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // fetch all workouts
  const fetchWorkouts = async () => {
    try {
      const workouts = await getAllWorkouts();
      setWorkouts(workouts);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };
  // format date and time string
  const formatDateTime = (dateTimeString) => {
    return moment(dateTimeString).format("MM/DD/YYYY");
  };

  // delete workout function
  const handleDelete = async (workoutId) => {
    try {
      await deleteWorkout(workoutId);
      //check to see if workout was deleted
      console.log("Workout deleted:", workoutId);
      fetchWorkouts(); // Fetch updated workouts after delete
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.formContainer}>
        <h1>Workout History</h1>
        {workouts.length > 0 ? (
          <ul>
            {workouts.map((workout) => (
              <li key={workout._id}>
                <h3>{workout.title}</h3>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <p>Weight (lbs): {workout.weight}</p>
                <p>Created At: {formatDateTime(workout.createdAt)}</p>
                <button onClick={() => handleDelete(workout._id)}>
                  Delete Workout
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No workouts found.</p>
        )}
      </div>
    </div>
  );
}

export default WorkoutHistoryPage;
