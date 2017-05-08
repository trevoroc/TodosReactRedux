import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

// TODO: delete
import { receiveTodos, receiveTodo } from './actions/todo_actions';

const store = configureStore();

// TODO: delete
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
