import 'bootstrap/dist/css/bootstrap.min.css';
import {Registro} from "./pages";
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Home from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <Router>
      <Registro></Registro>
      <Routes>
        
        {/* RUTAS PUBLICAS */}
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Home />} />

        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

