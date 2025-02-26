import "Bootstrap/dist/css/bootstrap.min.css"
import { Home, Inicio, Peliculas } from "./pages";
import {Routes,Route  } from "react-router-dom"; /* Importo Routes para abrazar las rutas y Route para realizar el enrutamiento de cada una */

function App() {
  return (
    <>
      <Peliculas></Peliculas>
    </>
  )
}

export default App
