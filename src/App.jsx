// App.jsx
import { useState, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: Date.now(),
      text,
      checked: false,
    };
    setTodos((prev) => [todo, ...prev]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="container">
      <h1>TodoList</h1>
      <TodoInsert onInsert={handleInsert} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
}

export default App;
