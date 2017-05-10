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
    let { todos, createTodo, removeTodo, updateTodo } = this.props;
    const todoList = todos.map(todo => (
      <TodoListItem key={ todo.id } todo={ todo }
        removeTodo={ removeTodo } updateTodo={ updateTodo } />
    ));

    return (
      <section>
        <ul>
          { todoList }
        </ul>

        <TodoForm createTodo={ createTodo } errors={ this.props.errors }
          clearErrors={ this.props.clearErrors } />
      </section>
    );
  }
}

export default TodoList;
