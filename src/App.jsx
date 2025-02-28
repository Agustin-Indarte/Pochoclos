import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home,Inicio,Login,Registro,Profile} from "./pages"


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/home" element={<Home/>} />
      </Routes>
    
  );
}

export default App;

