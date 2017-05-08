import React from 'react';

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo, idx) => (
    <li key={ idx }>{ todo.title }</li>
  ));

  return (
    <ul>
      { todoList }
    </ul>
  );
};

export default TodoList;
