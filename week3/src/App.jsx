import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "커뮤니케이션 과제", checked: false },
    { id: 2, text: "아이디어톤 회의 준비", checked: true },
  ]);

  const handleInsert = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>TodoList</Title>
      <TodoInsert onInsert={handleInsert} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </Container>
  );
}


export default App;
