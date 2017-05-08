import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.toggleTodo(this.props.todo);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    let toggleText = this.props.todo.done ? "Mark Undone" : "Mark Done";
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleToggle}>{ toggleText }</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
