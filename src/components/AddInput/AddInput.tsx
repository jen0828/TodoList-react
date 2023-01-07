import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import { TodoType } from '../../TodoType';

export interface Props{
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<(TodoType | { id: string; task: string; completed: boolean; })[]
>>;
}


function AddInput({
    setTodos, todos
}: Props) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button 
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput