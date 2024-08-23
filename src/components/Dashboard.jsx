import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SelectedCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const SelectedCard = styled.div`
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

const EmptyCard = styled.div`
  width: 118px;
  height: 248px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
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

const MAX_CARDS = 6;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  const emptySlots = MAX_CARDS - selectedPokemon.length;

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      <SelectedCardList>
        {selectedPokemon.map((pokemon) => (
          <SelectedCard key={pokemon.id}>
            <img src={pokemon.img} alt="none" />
            <p>{pokemon.name}</p>
            <p>No.{pokemon.id}</p>
            <Button onClick={() => onRemovePokemon(pokemon)}>삭제</Button>
          </SelectedCard>
        ))}

        {Array.from({ length: emptySlots }).map((_, index) => (
          <EmptyCard key={`empty-${index}`}>
            <img src="questionmark.png" alt="" />
          </EmptyCard>
        ))}
      </SelectedCardList>
    </DashboardContainer>
  );
};

export default Dashboard;
