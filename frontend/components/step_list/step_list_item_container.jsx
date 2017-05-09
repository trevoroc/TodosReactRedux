import { connect } from 'react-redux';
import StepListItem from './step_list_item.jsx';
import { receiveStep, removeStep, toggleStep }
  from '../../actions/step_actions.js';

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step)),
  toggleStep: step => dispatch(toggleStep(step)),
  step: ownProps.step
});

export default connect(
  null, mapDispatchToProps
)(StepListItem);
