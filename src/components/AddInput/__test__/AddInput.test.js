import { render, screen } from '@testing-library/react';
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