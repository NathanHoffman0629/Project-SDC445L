import React from 'react';
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const WorkoutProgressChart = ({ workoutData }) => {
    const data = {
        labels:workoutData.map((_, index) => `Workout ${index + 1}`),
        datasets: [
            {
                label: "Workout Progress",
                data: workoutData.map((workout) => workout.value),
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div style={{ height: "300px", width: "100%" }}>
            <h3>Workout Progress</h3>
            <Line data={data} options={options} />
        </div>
    );
};

WorkoutProgressChart.propTypes = {
    workoutData: PropTypes.array,
};

export default WorkoutProgressChart;