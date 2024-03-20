import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const StyledWrapper = styled.div`
  background-color: #FFFFFF;
  padding: 2rem;
  border-radius: 0.5rem;
  height: 500px;
  max-width: 350px;
  min-width: 250px;
  width: 100%;
  
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #D00D17;

  &:hover {
    color: #B5070E;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: #D00D17;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #B5070E;
  }
`;

// function Login(props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 인증 상태 추가
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // 여기에서 입력된 이메일과 비밀번호를 사용하여 로그인 요청을 처리하고, 인증 상태를 관리합니다.
//     // 예를 들어, 서버로 요청을 보내고 응답을 받아서 로그인이 성공했는지 확인할 수 있습니다.
//     // 로그인이 성공하면 인증 정보를 저장하고, 이후 적절한 페이지로 이동합니다.
//     // 여기에서는 간단한 예시로 로그인 성공 시 홈페이지로 이동하는 것으로 대체합니다.
//     if (email === 'test@test.com' && password === 'password') {
//       // 인증이 성공했다고 가정합니다.
//       localStorage.setItem('isLoggedIn', 'true');
//       setIsLoggedIn(true); // 인증 상태 업데이트
//       navigate('/');
//     } else {
//       alert('로그인에 실패했습니다. 이메일 주소와 비밀번호를 확인해주세요.');
//     }
//   };

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://172.16.194.52:8080/member/login", {
        userEmail: email,
        userPwd: password
      });
      if (response.status === 200) {
        // 로그인 성공
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        // 로그인 실패
        alert('로그인에 실패했습니다. 이메일 주소와 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      // 네트워크 오류 등의 경우 처리
      console.error('로그인 요청 중 오류 발생:', error);
      alert('아이디/비밀번호를 확인해주세요.');
    }
  };


  return (
    <div className="flex justify-center items-center h-screen mx-2">
      <StyledWrapper>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-center mt-9">
          <div className="flex flex-col" style={{width: '200px'}}>
            <form className="my-7" action="http://172.16.194.52:8080/member/login" method="post" onSubmit={handleLogin}>
              <div className="my-5">
                <input 
                  type="email" 
                  name="userEmail"
                  placeholder="이메일"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-1" 
                  id="email" 
                  aria-describedby="emailHelp" 
                  required
                />
              </div>
              <div className="mb-5">
                <input 
                  type="password" 
                  name="userPwd"
                  placeholder="비밀번호" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-1" 
                  id="password" 
                  required
                />
              </div>
              <StyledButton type="submit">로그인</StyledButton>
            </form>
            <p className="mt-3 text-sm">
              회원이 아니신가요? 
              <StyledLink to="/signup"> 회원가입</StyledLink>
            </p>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
}

export default Login;
