import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 12px 24px;
`;

const NavButton = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin: 0 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 16px;
  background-color: #f7f7f7;
`;

function RootLayout() {
  return (
    <Layout>
      <NavBar>
        <div>
          <NavButton to="/">홈</NavButton>
          <NavButton to="/account">내 계정</NavButton>
          <NavButton to="/edit-name">이름변경</NavButton> {/* ✅ 추가된 버튼 */}
        </div>
      </NavBar>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default RootLayout;
