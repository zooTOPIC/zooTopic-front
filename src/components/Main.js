import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

function Main(props){
    return (
        <MainContainer>
            <div>메인입니다</div>
        </MainContainer>
    );
}

export default Main;