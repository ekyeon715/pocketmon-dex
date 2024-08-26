import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../pages/Dex";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { addPokemon } = useContext(PokemonContext);
  return (
    <Card
      onClick={() => {
        navigate(`/PokemonDetail?id=${pokemon.id}`);
      }}
    >
      <img src={pokemon.img_url} alt={""} />
      <p>{pokemon.korean_name}</p>
      <p>No.{pokemon.id}</p>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          addPokemon(pokemon);
        }}
      >
        추가
      </Button>
    </Card>
  );
}

export default PokemonCard;

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease 0s, box-shadow 0.2s ease 0s;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  transition: background-color 0.2s ease; /* 배경색 변경 애니메이션 */

  &:hover {
    background-color: rgb(200, 0, 0); /* 호버 시 배경색 */
  }
`;
