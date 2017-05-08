import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo, idx) => (
    <TodoListItem key={ idx } todo={ todo } />
  ));

  return (
    <ul>
      { todoList }
    </ul>
  );
};

export default TodoList;
