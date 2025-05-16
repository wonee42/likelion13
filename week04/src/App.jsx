import styled from "styled-components";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Info>Welcome to wonee site</Info>
      <Cards>
        <Card imageUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMzFfMTg2%2FMDAxNzQzMzQ5MTExNjUy.g_c9iZ3QRswCvP5xqxUnfuLFZgUEcAljef5BMbsdkmwg.3AEXlUtlDG8wmI-bBeMK--pL0QCvwqYQdzv3cwK7ajQg.JPEG%2F%25C5%25B0%25B3%25EB%25C7%25C7%25BF%25C0_4%25BF%25F9_8%25C0%25CF.jpeg&type=sc960_832">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
           안녕하세요 미래융합학부1 유혜원입니다^_^
           만나서 반가워요~!
          </span>
        </Card>
        <Card imageUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTJfNDgg%2FMDAxNzM0MDEwMjgyNDMz.WH33qwYI3b2t0nxoGCwz6MySNeQojci1-cocDJK-aeYg.ugwNpBYh4nfBCgYpNqGjr13ok83u6UDrFJh3DKyAnzEg.JPEG%2F20241206_193941.jpg&type=sc960_832">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            떡볶이 이야기
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Cards = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default App;

