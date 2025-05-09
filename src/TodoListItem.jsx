function TodoListItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoListItem;
