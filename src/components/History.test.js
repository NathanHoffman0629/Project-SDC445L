import { render, screen, fireEvent } from "@testing-library/react";
import History from "./History";
import '@testing-library/jest-dom';

test("displays workout history", () => {
    const workoutList = [{ id: 1, text: "Jump rope" }];
    render(<History workoutList={workoutList} clearHistory={() => {}} />);

    expect(screen.getByText("Jump rope")).toBeInTheDocument();
});

test("clears history when button is clicked", () => {
    const clearHistory = jest.fn();
    render(<History workoutList={[{ id: 1, text: "Squats" }]} clearHistory={clearHistory} />);

    const button = screen.getByText("Clear History");
    fireEvent.click(button);

    expect(clearHistory).toHaveBeenCalled();
});