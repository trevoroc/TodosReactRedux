import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, TOGGLE_STEP }
  from '../actions/step_actions.js';

const initialState = {
  1: {
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1
    },
  2: {
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1
  }
};

export function stepsReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case RECEIVE_STEPS:
      return Object.assign({}, action.steps);
    case RECEIVE_STEP:
      newState = {};
      newState[action.step.id] = action.step;
      return Object.assign({}, state, newState);
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    case TOGGLE_STEP:
        newState = Object.assign({}, state);
        newState[action.step.id].done = !newState[action.step.id].done;
        return newState;
    default:
      return state;
  }
}
