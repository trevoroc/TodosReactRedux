import { connect } from 'react-redux';
import StepListItem from './step_list_item.jsx';
import { receiveStep, removeStep, toggleStep }
  from '../../actions/step_actions.js';

const mapStateToProps = (state, ownProps) => ({
  step: ownProps.step
});

const mapDispatchToProps = (dispatch) => ({
  removeStep: step => dispatch(removeStep(step)),
  toggleStep: step => dispatch(toggleStep(step))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(StepListItem);
