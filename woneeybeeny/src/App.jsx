import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드
  return (
    <div> 
    <header className="header">
        <h1>My Profile</h1>
        <p>Welcome!</p>
    </header>

    <nav className="nav">
        <ul>
            <li><a href="#about">자기소개</a></li>
            <li><a href="#features">관심사</a></li>
            <li><a href="#contact">연락</a></li>
            <li><a href="https://skulikelion.com" target="_blank">멋사 사이트 바로가기</a></li>
        </ul>
    </nav>

    <main className="main">
        <section id="about" className="section">
            <h2>안녕하세요!</h2>
            <p>만나서 반갑습니다. 저는 미래융합학부에 재학중인 25학번 유혜원입니다.</p>
            <p>함께 즐거운 동아리 생활 보내봐요~!</p>
            <img className="img" src="img/첫인사.jpg" alt="about_image">
            </img>
        </section>

        <section id="features" className="section">
            <h2>관심사</h2>
            
            <h3>취미</h3>
            <ul>
                <li>영화 보기</li>
                <li>음악 감상</li>
                <li>피아노 치기</li>
                <li>코딩^^</li>
            </ul>
            <img className="img" src="img/첫인사.jpg" alt="about_image">

            </img>

            <h3>좋아하는 음식 순위</h3>
            <ol>
                <li>떡볶이</li>
                <li>칼국수</li>
                <li>토마토주스</li>
            </ol>
            <img className="img" src="img/음식.jpg" alt="food_image">
            </img>
        </section>

        <section id="contact" className="section">
            <h2>연락하기</h2>
            <p>이메일: wonee422005@skuniv.ac.kr</p>
            <p>전화번호: 010-8335-1975</p>
        </section>
    </main>

    <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
    </footer>
   </div>

);
}
