import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./components/Protectedroutes/ProtectedRoutes";
import Profile from "./pages/Profile/Profile";





function App() {
  

  return (
    <Router>
         <Routes>
        { /*RUTAS PUBLICAS */}
        <Route path="/" element = {<Home/>} />
        <Route  path="/register" element = {<Register/>}/>
        <Route path="login" element = {<Login/>} />


         <Route
         path="/profile"
         element= {
          <ProtectedRoutes>
            <Profile/>
          </ProtectedRoutes>

         }
         />

         </Routes>


    </Router>
  )
}

export default App
