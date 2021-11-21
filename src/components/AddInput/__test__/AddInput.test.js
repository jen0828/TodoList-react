import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

it('should render input element', () => {
  render(
      <AddInput 
          todos={[]}
          setTodos={mockedSetTodo}
      />
  );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

it('should be able to type into input', () => {
  render(
      <AddInput 
          todos={[]}
          setTodos={mockedSetTodo}
      />
  );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.click(inputElement)
  fireEvent.change(inputElement, { target: { value: "Practise React" } })
  expect(inputElement.value).toBe("Practise React");
});