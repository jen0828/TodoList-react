import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe("Todo", () => {
  it('should render same text passed into title prop', async () => {
    render(<Todo />);
    addTask(["Practise React"])
    const divElement = screen.getByText(/Practise React/i)
    expect(divElement).toBeInTheDocument()
  });

  it('should show three tasks', async () => {
    render(<Todo />);
    addTask(["Practise React", "Go for a stroll", "Read a book"])
    const divElements = screen.getAllByTestId("task-container")
    expect(divElements.length).toBe(3)
  });
});