import React, { useState, useCallback } from 'react';

function Goals() {
    const [goal, setGoal] = useState("");
    const [goalList, setGoalList] = useState([]);

    const addGoal = useCallback(() => {
        if (goal.trim() !== "") {
            setGoalList((prev) => [...prev, goal]);
            setGoal("");
        }
    }, [goal]);

    const clearGoals = useCallback (() => {
        setGoalList([]);
    }, []);

    return (
        <div className="goal-input">
            <h2>Set Your Fitness Goals</h2>
            <input
                type="text"
                placeholder="Enter your goal..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
            />
            <button onClick={addGoal}>Add Goal</button>
            <button onClick={clearGoals}>Clear Goals</button>
            
            <ul>
                {goalList.map((g, index) => (
                    <li key={index}>{g}</li>
                ))}
            </ul>
        
        </div>
    );
}

export default Goals;