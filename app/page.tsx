import Providers from './components/Provider'
import SearchInput from './components/SearchInput';

export default function Home() {
  return (
    <main>
      <div>Home</div>
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  )
}