import styles from './TodoListItem.module.css';

function TodoListItem({ todo, onToggle, onRemove }) {
  return (
    <li className={styles.item}>
      <label>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`${styles.text} ${todo.checked ? styles.checked : ''}`}>
          {todo.text}
        </span>
      </label>
      <button className={styles.delete} onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoListItem;
