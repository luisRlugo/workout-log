import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import styles from "./NavBar.module.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLink}>
        Home
      </Link>

      <span>Welcome, {user.name}</span>

      <Link to="/workouts/new" className={styles.navbarLink}>
        New Workout
      </Link>

      <Link to="/workouts" className={styles.navbarLink}>
        Workout History
      </Link>

      <Link
        to=""
        onClick={handleLogOut}
        className={`${styles.navbarLink} ${styles.logout}`}
      >
        Log Out
      </Link>
    </nav>
  );
}
