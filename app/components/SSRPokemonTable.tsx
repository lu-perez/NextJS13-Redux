import React from 'react';
import { store } from '../store'
import PokemonTable from './PokemonTable'

const SSRPokemonTable = () => {
  return (
    <PokemonTable pokemons={store.getState().search.startupPokemon} />
  )
}

export default SSRPokemonTable;