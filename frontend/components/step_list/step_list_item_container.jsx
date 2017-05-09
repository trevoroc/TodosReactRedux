import { connect } from 'react-redux';
import StepListItem from './step_list_item.jsx';
import { receiveStep, removeStep }
  from '../../actions/step_actions.js';

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

export default connect(
  null, mapDispatchToProps
)(StepListItem);
