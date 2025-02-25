import React, { useState, useCallback } from 'react';

function WorkoutLog({ addWorkout }) {
    const [workout, setWorkout] = useState("");

    const handleLogWorkout = useCallback(() => {
        if (workout.trim() !== "") {
            addWorkout(workout);
            setWorkout("");
        }
    }, [workout, addWorkout]);

    return (
        <div>
            <h2>Log Your Workout</h2>
            <input
                type="text"
                placeholder="Enter workout details..."
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
            />
            <button onClick={handleLogWorkout}>Log Workout</button>
        </div>
    );
} 

export default WorkoutLog;