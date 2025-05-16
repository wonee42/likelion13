import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditName() {
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim() === "") {
      alert("이름을 입력해주세요!");
      return;
    }

  
    console.log("새 이름:", newName);

    
    navigate("/account");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>이름 변경</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="새 이름을 입력하세요"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          저장
        </button>
      </form>
    </div>
  );
}

export default EditName;


