import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import WorkoutLog from "./WorkoutLog";

test("logs a workout successfully", () => {
    const addWorkout = jest.fn();
    render(<WorkoutLog addWorkout={addWorkout} />);

    const input = screen.getByPlaceholderText("Enter workout details...");
    const button = screen.getByText("Log Workout");

    fireEvent.change(input, { target: {value: "Yoga session" } });
    fireEvent.click(button);

    expect(addWorkout).toHaveBeenCalledWith("Yoga session");
});