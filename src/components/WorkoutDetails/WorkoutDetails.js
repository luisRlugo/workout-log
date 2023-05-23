import React from "react";
import styles from "./WorkoutDetails.module.css";

const WorkoutDetails = ({ workout, onDelete }) => {
  const handleDelete = () => {
    onDelete(workout._id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h4>{workout.title}</h4>
        <p className={styles.inputContainer}>
          <strong className={styles.label}>Weight (lbs):</strong>
          {workout.weight}
        </p>
        <p className={styles.inputContainer}>
          <strong className={styles.label}>Reps:</strong>
          {workout.reps}
        </p>
        <p className={styles.inputContainer}>
          <strong className={styles.label}>Sets :</strong>
          {workout.sets}
        </p>
        <p>{workout.createdAt}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
