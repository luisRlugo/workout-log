// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import NewWorkoutPage from "./pages/NewWorkoutPage/NewWorkoutPage";
import AuthPage from "./pages/AuthPage/AuthPage.js";
import WorkoutHistoryPage from "./pages/WorkoutHistoryPage/WorkoutHistroyPage";
import Home from "./pages/Home/Home";
// components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts/new" element={<NewWorkoutPage />} />
            <Route path="/workouts" element={<WorkoutHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
