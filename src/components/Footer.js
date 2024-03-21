import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = styled.a`
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  background-color: #F1AB00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 2.5rem;
  width: 2.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

function Footer(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 스크롤 이벤트를 통해 스크롤 위치를 감지하고 스크롤 버튼을 표시하거나 숨김
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollToTopButton = document.getElementById("scrollToTopButton");

      if (scrollY > 100) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 모달을 열고 닫는 함수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 페이지 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="w-full">
      {/* 하단 문의 버튼 */}
      <div className="fixed bottom-12 right-0 p-3 z-10">
        <button type="button" onClick={toggleModal}>
          <img
            src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/symbol_kakao.png"
            alt="카카오톡 문의 버튼"
            className="rounded-full h-10 w-10 shadow-md"
          />
        </button>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{zIndex: 1001}}>
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded-md shadow-md">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={toggleModal}
            >
              닫기
            </button>
            <h2 className="text-center text-lg font-semibold mb-4">카카오톡으로 문의하기</h2>
            <div className="text-center my-4">
              <a
                href="https://pf.kakao.com/_ZxlSaG"
                className="text-red-600 font-semibold"
              >
                카카오톡 채널 바로가기
              </a>
            </div>
            <div className="text-center p-3">
              <img
                src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/qrcode.png"
                alt="카카오톡 QR 코드"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* 스크롤 버튼 */}
      <a
        href=""
        id="scrollToTopButton"
        className="fixed bottom-5 right-3 bg-gray-500 px-4 py-2 text-white rounded-full shadow-md transition duration-300 ease-in-out hidden"
        style={{
          backgroundColor: "#F1AB00", 
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          height: "2.5rem",
          width: "2.5rem",
        }}
        onClick={scrollToTop}
      ><div 
      style={{ color: "#D00D17", fontWeight:"bold", fontSize:"0.9rem", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>TOP</div>
      </a>

      {/* 푸터 */}
      <div className="bg-white py-5 ">
        <footer className="container flex justify-center text-center flex-col">
          <div style={{ lineHeight: "2.5" }}>
            (주)주토픽 / 책임자 : zooTOPIC / 담당자 메일주소 : zoo@topic.com
            <br />
            서울특별시 도봉구 창동 1-28 씨드큐브 7층
            <br />
            근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
          </div>
          <hr className="p-1" />
          <div className="text-body-secondary">&copy; 2024 Company, ZOOTOPIC</div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
