import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TOGGLE_TODO }
  from '../actions/todo_actions.js';

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
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, action.todos);
    case RECEIVE_TODO:
      newState = {};
      newState[action.todo.id] = action.todo;
      return Object.assign({}, state, newState);
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    case TOGGLE_TODO:
        newState = Object.assign({}, state);
        let todoKeys = Object.keys(newState);
        let thisTodoKey = todoKeys.filter(key => (
          newState[key].id === action.todo.id
        ))[0];
        let thisTodo = newState[thisTodoKey];
        thisTodo.done = !thisTodo.done;
        return newState;
    default:
      return state;
  }
}
