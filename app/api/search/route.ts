import { NextResponse } from 'next/server';

import pokemons from '../../data/pokemon.json';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const pokemonData = pokemons.filter(p =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? '')
  );
  return NextResponse.json(pokemonData.slice(0, 10));
}
