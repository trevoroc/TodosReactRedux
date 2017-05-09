import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

// TODO: Delete
import { fetchTodos } from './util/todo_api_util.js';
import * as TodoActions from './actions/todo_actions';
window.fetchTodos = fetchTodos;
window.TodoActions = TodoActions;

const store = configureStore();

// TODO: Delete
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, content);
});
