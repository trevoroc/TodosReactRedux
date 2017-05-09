import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggle(e) {
    this.props.toggleStep(this.props.step);
    this.forceUpdate();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  render() {
    return (
      <li>
        <input onChange={this.handleToggle}
               type="checkbox"
               checked={this.props.step.done}></input>
        <span>
          {this.props.step.title}
        </span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default StepListItem;
