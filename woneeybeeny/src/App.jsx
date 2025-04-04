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
            <img className="img" src="C:\Users\wonee\OneDrive\문서\카카오톡 받은 파일\KakaoTalk_20250330_165816437.jpg" alt="about_image">
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
            <img className="img" src="C:\Users\wonee\OneDrive\문서\카카오톡 받은 파일\KakaoTalk_20250330_172747616.jpg" alt="hobby_image">
            </img>

            <h3>좋아하는 음식 순위</h3>
            <ol>
                <li>떡볶이</li>
                <li>칼국수</li>
                <li>토마토주스</li>
            </ol>
            <img className="img" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjJfMjM4%2FMDAxNjkyNjY0NTY1Nzcz.1b3Y_m6yQTxcsVbuX13Kl8jodxaI2IyRI1bfjvUFyk8g.e3QYC5j2vLBIEcS3qzRD2uq-KUxFg9VIuhWbCykqoOwg.JPEG.egpilatesfour%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25286%2529.jpg&type=sc960_832" alt="food_image">
            </img>
        </section>

        <section id="contact" className="section">
            <h2>연락하기</h2>
            <p>이메일: wonee422005skuniv.ac.kr</p>
            <p>전화번호: 010-8335-1975</p>
        </section>
    </main>

    <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
    </footer>
   </div>

);
}
