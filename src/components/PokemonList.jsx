import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";

const PokemonList = () => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
