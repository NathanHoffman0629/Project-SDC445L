import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test("logs a workoout and dsiplays it in history", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter workout details...");
  const button = screen.getByText("Log Workout");

  fireEvent.change(input, { target: { value: "Run 5 miles" } });
  fireEvent.click(button);
  
  expect(screen.queryByText("Run 5 miles")).not.toBeNull();
});

test("clears workout history when clear button is clicked", () => {
  render(<App />);

  const logInput = screen.getByPlaceholderText("Enter workout details...");
  const logButton = screen.getByText("Log Workout");

  fireEvent.change(logInput, {target: { value: "Push-ups"} });
  fireEvent.click(logButton);

  const clearButton = screen.getByText("Clear History");
  fireEvent.click(clearButton);

  expect(screen.queryByText("Push-ups")).not.toBeInTheDocument();
});

test("check if input field exists", () => {
  render(<App />);

  screen.debug();

  expect(screen.getByPlaceholderText("Enter workout details...")).toBeInTheDocument();
});