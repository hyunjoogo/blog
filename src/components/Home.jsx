import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const TitleLink = styled.a`
    font-weight: bold;
    font-size: 20px;
  `;

const Home = () => {



  return (
    <>
      <TitleLink href="modalContentChange">#1. Modal 내용을 바꾸어보자</TitleLink>
    </>
  )
}

export default Home



