import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let { todos, receiveTodo, removeTodo, toggleTodo } = this.props;
    const todoList = todos.map(todo => (
      <TodoListItem key={ todo.id } todo={ todo }
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
  }
}

export default TodoList;
