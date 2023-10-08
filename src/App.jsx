import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import Text from './components/Text'
import NavBar from './components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  let color1 = 'red'
  let color2 = 'blue'
  let textsize1 = '3em'
  let textsize2 = '5em'

  const [text, setText] = useState('Todavia no se apretó el boton')
  const [count, setCount] = useState(0)
  /*comentarioooo*/
  return (
    <>
    <div className="App">
        <NavBar />
      </div>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button col={color1} textsize={textsize1} callback={() =>setText('se apretó el boton 1')}>Boton 1</Button>
      <Button col={color2} textsize={textsize2} callback={() =>setText('se apretó el boton 2')}>Boton 2</Button>
      <Text t={text} />
    </>
  )
}

export default App
