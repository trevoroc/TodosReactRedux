import React from 'react';
import { uniqueId } from '../../util/util.jsx';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialState() {
    return {
      title: "",
      body: "",
      id: uniqueId(),
      done: false
    };
  }

  handleChangeTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleChangeBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState(this.initialState());
  }

  render() {
    return (
      <form>
        <label>Title</label>
        <input type="text" onChange={ this.handleChangeTitle }
          value={ this.state.title }></input>
        <label>Body</label>
        <input type="text" onChange={ this.handleChangeBody }
          value={ this.state.body }></input>
        <button onClick={ this.handleSubmit }>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
