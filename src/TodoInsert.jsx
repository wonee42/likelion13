import { useState } from 'react';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInsert;
