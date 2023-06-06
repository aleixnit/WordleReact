import { useState } from 'react'
import './App.css'
import Key from './Key'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>YamaniWordle</h1>
    <div className='container'>
      <Key>q</Key>
      <Key>w</Key>
      <Key>e</Key>
      <Key>r</Key>
      <Key>enviar</Key>

    </div>
  </>
  )
}

export default App
