import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter  ,Routes, Route } from "react-router-dom";
import {Home,Inicio,Login,Registro,Profile,Peliculas,Administracion, PagError, Favoritos} from "./pages"
import { RutaProtegida } from "./components";


function App() {
  return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} /> 
        
        <Route path="/profile" element={<RutaProtegida><Profile/></RutaProtegida>} />
        <Route path="/home" element={<RutaProtegida><Home/></RutaProtegida>} />
        <Route path="/peliculas" element={<RutaProtegida><Peliculas/></RutaProtegida>} />
        <Route path="/administracion" element={<RutaProtegida><Administracion/></RutaProtegida>} />
        <Route path="/favoritos" element={<RutaProtegida><Favoritos/></RutaProtegida>} />
        <Route path="*" element={<PagError></PagError>}></Route>
        </Routes>
        </BrowserRouter>
        
  );
}

export default App;

