export const allTodos = (state) => {
  let todoKeys = Object.keys(state.todos);
  return todoKeys.map((key) => state.todos[key]);
};

export const stepsByTodoId = (state, todoId) => {
  let stepKeys = Object.keys(state.steps);
  let todoStepKeys = stepKeys.filter((key) => (
    state.steps[key].todo_id === todoId
  ));
  return todoStepKeys.map((stepKey) => state.steps[stepKey]);
};
