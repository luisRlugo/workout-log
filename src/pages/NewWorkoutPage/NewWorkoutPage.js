import { useEffect, useState } from "react";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
// import WorkoutHistoryPage from "../WorkoutHistoryPage/WorkoutHistroyPage";

export default function NewWorkoutPage() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDeleteWorkout = async (id) => {
    try {
      const response = await fetch(`/api/workouts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setWorkouts((prevWorkouts) =>
          prevWorkouts.filter((workout) => workout._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              onDelete={handleDeleteWorkout}
            />
          ))}
      </div>
      {/* <WorkoutHistoryPage workouts={workouts} /> */}
      <WorkoutForm />
    </div>
  );
}
