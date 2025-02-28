import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home,Inicio,Login,Registro,Profile} from "./pages"
import RutaProtegida from "./components/RutaProtegida/RutaProtegida";


function App() {
  return (
    
     /*  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Registro />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RutaProtegida>
              <Profile />
            </RutaProtegida>

          }
        />
      </Routes> */
    <Inicio></Inicio>
  )
}

export default App;

