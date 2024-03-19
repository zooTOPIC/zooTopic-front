import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 80px;
`;

const StyledTopic = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #D00D17;
`;

function Header(props) {
  return (
    <>
      <div className="bg-white w-full flex items-center justify-center">
        <div className="col-lg-12 p-2 text-center flex items-center">
          <StyledImage src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/zoo.png" alt="zoo" className="h-24 inline-block" />
          <StyledTopic className="inline-block align-middle">Topic</StyledTopic>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} />
          </Link>
        </div>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ marginRight: "10px" }}><Link to="/about">뉴스</Link></li>
            <li><Link to="/contact">서비스 소개</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;




// function Header(props) {
//   return (
//     <div>
//       {/* 추가된 부분 */}
//       <div className="col-lg-12 p-2 bg-white text-center">
//         <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/zoo.png" alt="zoo" className="h-24" />
//         <span className="text-7xl font-bold text-red-600">Topic</span>
//       </div>

//       {/* 기존 네비게이션 바 */}
//       <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white px-2">
//         <div className="container-fluid">
//           <Link to="/">
//             <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarScroll"
//             aria-controls="navbarScroll"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarScroll">
//             <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
//               <li className="nav-item">
//                 <a className="nav-link" aria-current="page" href="#album">뉴스</a>
//               </li>
//               {/* <li className="nav-item">
//                 <a className="nav-link" aria-current="page" href="#weather">날씨</a>
//               </li> */}
//               <li className="nav-item">
//                 <a className="nav-link" href="#notice">서비스 안내</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* 추가된 부분 */}
//       <div className="container-fluid p-0">
//         <div className="col-lg-12 py-4 text-center">
//           <h2 className="font-semibold">
//             세상의 소식을 놓치지 않고 싶지만, 바쁜 스케줄 때문에 신문을 읽을 시간이 없어요!
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
