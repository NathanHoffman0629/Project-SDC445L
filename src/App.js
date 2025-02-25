import React, { useState, useCallback } from 'react';
import "./App.css";
import WorkoutLog from "./components/WorkoutLog";
import History from "./components/History";
import Goals from "./components/Goals";
import { v4 as uuidv4 } from 'uuid';
import WorkoutProgressChart from "./components/WorkoutProgressChart";

function App() {
  const [workoutList, setWorkoutList] = useState([]);

  const addWorkout = useCallback((workout) => {
    setWorkoutList((prev) => [...prev, { id: uuidv4(), value: workout }]);
  }, []);

  const clearHistory = useCallback(() => {
    setWorkoutList([]);
  }, []);

  return (
    <div className="App">
      <h1>FitMate - Fitness Tracker</h1>
      <WorkoutLog addWorkout={addWorkout} />
      <h2>Workout History</h2>
      {workoutList.length > 0 ? (
        <>
          <WorkoutProgressChart workoutData={workoutList} />
          <History workoutList={workoutList} clearHistory={clearHistory} />
        </>
      ) : (
        <p>No workouts logged yet.</p>
      )}
      <Goals />
    </div>
  );
}

export default App;