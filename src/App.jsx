import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { url } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact </button>
      {fact && <p>{fact}</p>}
      {url && <img className='img-random-cat' src={url} alt='random cats' />}
    </main>
  )
}
