import { checkToken } from "../../utilities/users-service";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";

export default function WorkoutHistoryPage({ workouts }) {
  // const handleCheckToken = async () => {
  //   const expDate = await checkToken();
  //   alert(expDate);
  // };

  return (
    <div>
      <h1>Workout History Page</h1>
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
}
