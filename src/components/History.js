import React, { memo } from 'react';
import PropTypes from 'prop-types';
import WorkoutProgressChart from './WorkoutProgressChart';

const WorkoutItem = memo(({ text }) => (
    <p className="workout-entry"><strong>{text}</strong></p>
));

function History({ workoutList, clearHistory}) {
    return (
        <div className="history-container">
            <h2>Workout History</h2>

            {workoutList.length === 0 ? (
                <p>No workouts logged yet.</p>
            ) : (
                <div className="workout-list">
                    {workoutList.map((w) => (
                        <WorkoutItem key={w.id} text={w.text} />
                    ))}
                </div>
            )}
            
            <button onClick={clearHistory}>Clear History</button>
        </div>
    );
}

History.propTypes = {
    workoutList: PropTypes.array.isRequired,
    clearHistory: PropTypes.func.isRequired,
};

export default memo(History);
