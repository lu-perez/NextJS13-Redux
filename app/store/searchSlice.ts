import { createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchTerm: string;
  startupPokemon: Pokemon[];
}

const initialState: SearchState = {
  searchTerm: '',
  startupPokemon: []
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchTerm = action. payload;
    },
    setStartupPokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.startupPokemon = action.payload;
    }
  }
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
