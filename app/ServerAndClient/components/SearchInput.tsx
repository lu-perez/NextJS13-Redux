'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setSearch } from '../../store/searchSlice';
import PokemonTable from '../../components/PokemonTable';
import { pokemonApi } from '@/app/store/pokemonApi'
import { Pokemon } from '@/app/types/types'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.search.searchTerm);
  const startupPokemon = useAppSelector(state => state.search.startupPokemon);
  const data = useAppSelector(
    (state) => 
      state.pokemonApi.queries[`search("${searchTerm}")`]?.data as Pokemon[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div>
      <input
      type="text"
      value={searchTerm}
      onChange={e => dispatch(setSearch(e.target.value))}
    />
    <PokemonTable pokemons={searchTerm.length ? data ?? [] : startupPokemon} />
    </div>
  )
}

export default SearchInput