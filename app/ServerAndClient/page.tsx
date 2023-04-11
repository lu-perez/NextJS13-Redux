import Preloader from './components/Preloader';
import Providers from './components/Provider'
import SearchInput from './components/SearchInput';
import { store } from '../store'
import { setStartupPokemon } from '../store/searchSlice'

export default async function ServerAndClient() {
  const req = await fetch('http://127.0.0.1:3000/api/search');
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </>
  )
}