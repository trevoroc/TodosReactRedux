import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodos, createTodo, deleteTodo, updateTodo, fetchTodos }
  from '../../actions/todo_actions.js';
import { clearErrors } from '../../actions/error_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
