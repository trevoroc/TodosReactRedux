import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodos, receiveTodo, removeTodo, toggleTodo }
  from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
