import * as APIUtil from '../util/todo_api_util';
import * as ErrorActions from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    todo
  };
}

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  APIUtil.createTodo(todo)
    .then(savedTodo => dispatch(receiveTodo(savedTodo)),
          err => dispatch(ErrorActions.receiveErrors(err.responseJSON)))
);

export const updateTodo = todo => dispatch => (
  APIUtil.updateTodo(todo)
    .then(savedTodo => dispatch(receiveTodo(savedTodo)),
          err => dispatch(ErrorActions.receiveErrors(err.responseJSON)))
);

export const deleteTodo = todo => dispatch => (
  APIUtil.deleteTodo(todo)
    .then(savedTodo => dispatch(removeTodo(savedTodo)),
          err => dispatch(ErrorActions.receiveErrors(err.responseJSON)))
);
