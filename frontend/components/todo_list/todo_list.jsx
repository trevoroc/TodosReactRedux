import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo, toggleTodo }) => {
  const todoList = todos.map((todo, idx) => (
    <TodoListItem key={ idx } todo={ todo }
      removeTodo={ removeTodo } toggleTodo={ toggleTodo } />
  ));

  return (
    <section>
      <ul>
        { todoList }
      </ul>

      <TodoForm receiveTodo={ receiveTodo } />
    </section>
  );
};

export default TodoList;
