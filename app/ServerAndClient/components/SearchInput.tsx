'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setSearch } from '../../store/searchSlice';
import PokemonTable from '../../components/PokemonTable';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.search.searchTerm);
  const startupPokemon = useAppSelector(state => state.search.startupPokemon);
  
  return (
    <div>
      <input
      type="text"
      value={searchTerm}
      onChange={e => dispatch(setSearch(e.target.value))}
    />
    <PokemonTable pokemons={startupPokemon} />
    </div>
  )
}

export default SearchInput