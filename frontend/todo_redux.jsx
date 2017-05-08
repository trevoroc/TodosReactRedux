import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1>, root);
});
