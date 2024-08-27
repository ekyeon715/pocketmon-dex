import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: [],
  countCard: 0,
};

const pokemonSlice = createSlice({
  name: pokemon,
  initialState,
  reducers: {
    addPokemon: () => {},
    removePokemon: () => {},
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
