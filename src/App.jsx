import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import Registro from "./pages/Registro/Registro"
import  RutaProtegida  from "./components/RutaProtegida/RutaProtegida";
import Profile from "./pages/Profile/Profile";





function App() {
  

  return (
    <Router>
         <Routes>
        { /*RUTAS PUBLICAS */}
        <Route path="/" element = {<Home/>} />
        <Route  path="/registro" element = {<Registro/>}/>
        <Route path="login" element = {<Login/>} />


         <Route
         path="/profile"
         element= {
          <RutaProtegida>
            <Profile/>
          </RutaProtegida>

         }
         />

         </Routes>


    </Router>
  )
}

export default App;

