import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
