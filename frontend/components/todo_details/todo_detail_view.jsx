import React from 'react';
// import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <article>
        <p>{ this.props.todo.body }</p>
        <button onClick={this.handleDelete}>Delete</button>
        // <StepListContainer todo={this.props.todo} />
      </article>
    );
  }
}

export default TodoDetailView;
