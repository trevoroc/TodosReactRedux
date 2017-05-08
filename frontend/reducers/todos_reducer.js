import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export function todosReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, action.todos);
    case RECEIVE_TODO:
      const newState = {};
      newState[action.todo.id] = action.todo;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}
