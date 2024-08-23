import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: #FFD733;
  }
`;

const Logo = styled.img`
  width: 1200px;
  margin: 0 auto;
  display: block;
  margin-top: 100px;
`;

const Button = styled.button`
  width: 500px;
  height: 60px;
  font-size: 30px;
  background-color: red;
  color: white;
  border: none;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -100px;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <GlobalStyle />
      <Logo src="/pokemon.png" />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </div>
  );
}

export default Home;
