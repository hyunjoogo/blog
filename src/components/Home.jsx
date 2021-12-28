import React from "react";
import styled from "styled-components";

const TitleLink = styled.a`
  font-weight: bold;
  font-size: 20px;
`;

const Home = () => {


  return (
    <>
      <TitleLink href="modalContentChange">
        <h1>#1. Modal 내용을 바꾸어보자</h1>
      </TitleLink>
      <TitleLink href="accordion">
        <h1>#2. Accordion</h1>
      </TitleLink>
      <TitleLink href="link">
        <h1>#3. 리액트 라우터를 이용해서 state 보내기</h1>
      </TitleLink>
    </>
  )
}

export default Home



