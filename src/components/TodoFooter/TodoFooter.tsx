import React from 'react';
import './TodoFooter.css';

function TodoFooter({
  numberOfIncompleteTasks,
}: {
  numberOfIncompleteTasks: number | string;
}) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
    </div>
  );
}

export default TodoFooter;
