import TodoListItem from './TodoListItem';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;


