import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #B5070E;
  }
`;

function Signup(props) {
  return (
    <div className="flex justify-center items-center h-screen mx-2">
      <StyledWrapper>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} />
          </Link>
        </div>
        <div className="flex justify-center mt-9">
          <div className="flex flex-col" style={{width: '200px'}}>
            <form className="my-7" action="http://172.16.194.52:8080/member/save" method="post">
              <div className="mb-5 ">
                <input type="text" placeholder="이름" className="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-1" id="name" name="userName" />
              </div>
              <div className="mb-5">
                <input type="email" placeholder="이메일" className="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-1" id="email" aria-describedby="emailHelp" name="userEmail" />
              </div>
              <div className="mb-5">
                <input type="password" placeholder="비밀번호" className="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-1" id="password" name="userPwd" />
              </div>
              <StyledButton type="submit">회원가입</StyledButton>
            </form>
            <p className="mt-3 text-sm">
              회원이신가요? 
              <StyledLink to="/login"> 로그인</StyledLink>
            </p>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
}

export default Signup;
