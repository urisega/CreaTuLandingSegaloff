import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import Text from './components/Text'
import NavBar from './components/NavBar'
import Container from './components/Container'
import {useRef} from 'react'
import {useEffect} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  let color1 = 'red'
  let color2 = 'blue'
  let textsize1 = '3em'
  let textsize2 = '5em'

  const [text, setText] = useState('Todavia no se apretó el boton')
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const divRef = useRef(null)
	const handleClick = () =>{
		divRef.current.innerHTML = "Nuevo contenido"
	}
  const renderCount = useRef(0)
  renderCount.current++

  const obtenerProductos = () => {

    return new Promise((resolve, reject) => {
  
      const productos = [
        {
          id: '1',
          name: 'Producto 1',
          description: 'Descripción del Producto 1',
          price: 10.99,
          stock: 100,
        },
        {
          id: '2',
          name: 'Producto 2',
          description: 'Descripción del Producto 2',
          price: 19.99,
          stock: 50,
        },
        {
          id: '3',
          name: 'Producto 3',
          description: 'Descripción del Producto 3',
          price: 7.99,
          stock: 75,
        },
      ];
  
      setTimeout(() => {
        resolve(productos);
      }, 3000)
    });
  }
useEffect(() => {
    // fetchData().then(datos => {
    //   console.log(datos);
    //   setData(datos)
    // })


    // llamarPromise().then(datos => {
    //   console.log(datos)
    // })

    obtenerProductos().then( datos => {
      console.log(datos)
      setData(datos);
    } )
}, [])


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
      <Container />

			<div ref ={divRef}>Contenido Original </div>
			<button onClick={handleClick}>Cambiar contenido</button>
      <div>
        <p>Contador</p>
        <button onClick={() => setCount((count) => count + 1)}>Incrementar</button>
        <p>Este componente se ha renderizado {renderCount.current} veces</p>
      </div>

    </>
    
  )
}

export default App
