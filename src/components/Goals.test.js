import { render, screen, fireEvent } from "@testing-library/react";
import Goals from "./Goals";
import '@testing-library/jest-dom';

test("add a goal and displays it", () => {
    render(<Goals />);

    const input = screen.getByPlaceholderText("Enter your goal...");
    const button = screen.getByText("Add Goal");

    fireEvent.change(input, { target: { value: "Drink more water" } });
    fireEvent.click(button);

    expect(screen.getByText("Drink more water")).toBeInTheDocument();
});

test("clears all goals when button is clicked", () => {
    render(<Goals />);

    const input = screen.getByPlaceholderText("Enter your goal...");
    const button = screen.getByText("Add Goal");

    fireEvent.change(input, { target: { value: "Run every day"} });
    fireEvent.click(button);

    const clearButton = screen.getByText("Clear Goals");
    fireEvent.click(clearButton);

    expect(screen.queryByText("Run every day")).not.toBeInTheDocument();
});