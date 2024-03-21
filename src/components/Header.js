import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledImage = styled.img`
  height: 90px;
`;

const StyledTopic = styled.span`
  font-size: 60px;
  font-weight: bold;
  color: #D00D17
`;

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoggedIn === 'true');
  }, []); // 빈 배열을 넘겨주면 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  
  // "/developers" 페이지인지 확인하는 함수
  const isDevelopersPage = () => {
    return window.location.pathname === "/developers";
  };

  // 네비게이션 클릭 시 스크롤 이동
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    console.log(element.offsetTop)
    const offset = 141; // 헤더의 높이
    const position = element.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  };

  return (
    <div style={{ background: "white", position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <div className="w-full flex items-center justify-center">
      <Link to="/">
        <div className="col-lg-12 p-2 text-center flex items-center">
          <StyledImage src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/zoo.png" alt="zoo" className="h-24 inline-block" />
          <StyledTopic className="inline-block align-middle">TOPIC</StyledTopic>
        </div>
      </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "35px" }}>
        <div>
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px", marginLeft: "5px" }} />
          </Link>
        </div>

        {/* 조건부 렌더링 */}
        {isDevelopersPage() ? (
          <nav style={{marginRight: "5px"}}>
            <ul style={{ display: "flex", listStyleType: "none" }}>
              {/* JSON 데이터를 이용하여 동적으로 네비게이션 링크 생성 */}
              {props.developersData.map(developer => (
                <li key={developer.id} style={{ marginRight: "12px" }}>
                  <button onClick={() => handleScroll(developer.id)}>{developer.name}</button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav style={{marginRight: "5px"}}>
              <ul style={{ display: "flex", listStyleType: "none" }}>
                {/* 조건부 렌더링 */}
                {isLoggedIn ? (
                  // 로그인 상태일 때
                  <li style={{ marginRight: "12px", fontWeight:"bold" }}><button  onClick={() => { handleLogout(); window.location.reload(); }}>로그아웃</button></li>
                ) : (
                  // 로그아웃 상태일 때
                  <Link to='/login'>
                    <li style={{ marginRight: "12px", fontWeight:"bold" }}><button>로그인</button></li>
                  </Link>
                )}
                <li style={{ marginRight: "12px" }}><button onClick={() => handleScroll('newsList')}>뉴스</button></li>
                <li><button onClick={() => handleScroll('accordion')}>서비스 소개</button></li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );

}

export default Header;

