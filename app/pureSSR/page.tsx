import SSRPokemonTable from './components/SSRPokemonTable'
import { store } from '../store'
import { setStartupPokemon } from '../store/searchSlice'

export default async function pureSSR() {
  const req = await fetch('http://127.0.0.1:3000/api/search');
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SSRPokemonTable />
    </main>
  )
}
