import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { steps, todoId, receiveStep } = this.props;
    let stepContainers = steps.map(step => (
      <StepListItemContainer key={ step.id }
        receiveStep={ receiveStep } step={ step } />
    ));

    return (
      <ul>
        { stepContainers }
        <StepForm />
      </ul>
    );
  }
}
