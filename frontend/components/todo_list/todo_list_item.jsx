import React from 'react';
import TodoDetailViewContainer
  from '../todo_details/todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detail: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.todo);
  }

  handleDetail(e) {
    this.setState({ detail: !this.state.detail });
  }

  render() {
    let toggleText = this.props.todo.done
                      ? "Mark Undone" : "Mark Done";
    let details = this.state.detail
            ? <TodoDetailViewContainer todo={ this.props.todo }/>
            : "";
    return (
      <li>
        <input onChange={this.handleToggle}
               type="checkbox"
               checked={this.props.todo.done}></input>
        <span onClick={this.handleDetail}>
          {this.props.todo.title}
        </span>
        { details }
      </li>
    );
  }
}

export default TodoListItem;
