import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"

describe("Todo", () => {
  it('should render same text passed into title prop', async () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Practise React" } })
    fireEvent.click(buttonElement)
    const divElement = screen.getByText(/Practise React/i)
    expect(divElement).toBeInTheDocument()
  });
});