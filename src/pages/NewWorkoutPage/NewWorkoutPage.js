import styles from "./NewWorkoutPage.module.css";
import { useState } from "react";
import { createWorkout } from "../../utilities/workouts-api";
import { useNavigate } from "react-router-dom";

function NewWorkoutPage() {
  // State to store the workout data
  const [workoutData, setWorkoutData] = useState({
    title: "",
    reps: 0,
    sets: 0,
    weight: 0,
  });
  // React Router hook for navigation so I can go to another page
  const navigate = useNavigate();

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the workout using the API function
      const createdWorkout = await createWorkout(workoutData);
      // check to see if handle successful
      console.log("Workout created:", createdWorkout);
      // to redirec to workout history page
      navigate("/workouts");
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error creating workout:", error);
    }
  };

  return (
    <div className={styles.root}>
      <div class={styles.formContainer}>
        <h1>Create New Workout</h1>
        <form onSubmit={handleSubmit}>
          <div class={styles.inputContainer}>
            <label class={styles.label}>
              Title:
              <input
                class={styles.input}
                type="text"
                name="title"
                value={workoutData.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class={styles.inputContainer}>
            <label class={styles.label}>
              Reps:
              <input
                class={styles.input}
                type="number"
                name="reps"
                value={workoutData.reps}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class={styles.inputContainer}>
            <label class={styles.label}>
              Sets:
              <input
                class={styles.input}
                type="number"
                name="sets"
                value={workoutData.sets}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class={styles.inputContainer}>
            <label class={styles.label}>
              Weight (lbs):
              <input
                class={styles.input}
                type="number"
                name="weight"
                value={workoutData.weight}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class={styles.buttonContainer}>
            <button class={styles.button} type="submit">
              Create Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewWorkoutPage;
