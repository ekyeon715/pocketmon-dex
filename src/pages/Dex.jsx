import React, { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

export const PokemonContext = createContext();

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [countCard, setCountCard] = useState(0);

  const addPokemon = (pokemon) => {
    // 중복 체크
    const isAlreadySelected = selectedPokemon.some(
      (selected) => selected.id === pokemon.id
    );

    if (!isAlreadySelected) {
      // 중복이 아닐 때만 추가
      if (countCard < 6) {
        // 카드 개수 체크
        const selected = {
          img: pokemon.img_url,
          name: pokemon.korean_name,
          id: pokemon.id,
        };
        setSelectedPokemon([...selectedPokemon, selected]);
        setCountCard((prevCount) => prevCount + 1);
      } else {
        alert("카드는 최대 6개만 선택할 수 있습니다");
        return;
      }
    } else {
      alert("이미 같은 카드가 추가되었습니다");
      return;
    }
  };

  const removePokemon = (pokemonToRemove) => {
    const deletedCard = selectedPokemon.filter((pokemon) => {
      return pokemon.id !== pokemonToRemove.id;
    });
    setSelectedPokemon(deletedCard);
    setCountCard((prevCount) => prevCount - 1);
  };
  return (
    <>
      <PokemonContext.Provider
        value={{ selectedPokemon, addPokemon, removePokemon }}
      >
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </>
  );
};

export default Dex;
