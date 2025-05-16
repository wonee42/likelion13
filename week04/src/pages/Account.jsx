import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  const handleEditName = () => {
    navigate("/edit-name");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>내 계정</h2>

      <div style={{ marginTop: "10px" }}>
        <p>이름: 유혜원</p>
        {/* 나중에 실제 이름 상태 넣을 수 있음 */}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleEditName}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          이름 변경
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
