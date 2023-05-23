import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./WorkoutForm.module.css";

const WorkoutForm = () => {
  // const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [WorkoutData, setWorkoutData] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, weight, reps, sets };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // setWorkoutData(json);
      setTitle("");
      setWeight("");
      setSets("");
      setReps("");
      setError(null);
    }
    // navigate("/workouts");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3>Add a New Workout</h3>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Exercise Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Weight(lbs):</label>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Sets: </label>
        <input
          type="number"
          onChange={(e) => setSets(e.target.value)}
          value={sets}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Reps: </label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={styles.input}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>
          Add Workout
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
