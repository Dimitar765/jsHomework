import { useState } from 'react'
import './App.css'
import CharacterPage from './components/CharacterPage/CharacterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <CharacterPage/>
      </div>
    </>
  )
}

export default App
