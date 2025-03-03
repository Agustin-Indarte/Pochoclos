import { Table, Button } from 'react-bootstrap';
import './Planes.css';
import { color } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function PlanesPochocleros() {
  const navigate=useNavigate()
  return (
    <>
      
      <div id='Detalles' className="tabla">

        <h2>🍿¡ELEGI TU MEJOR COMBO!🍿</h2>
        <div className="tabla-responsive">
          {/* Encabezado */}
          <div className="fila encabezado">
            <div className="columna titulo">PLANES POCHOCLEROS</div>
            <Button onClick={() => navigate("/registro")} className="BtnMensual">MENSUAL</Button>
            <Button onClick={() => navigate("/registro")} className="BtnAnual">ANUAL</Button>
          </div>

          {/* Filas de beneficios */}
          <div className="fila">
            <div className="columna">Acceso ilimitado a todo el catálogo de películas y series</div>
            <div className="columna planes">✓</div>
            <div className="columna planes">✓</div>
          </div>
          <div className="fila">
            <div className="columna">Acceso a estrenos exclusivos antes que nadie</div>
            <div className="columna planes equis ">X</div>
            <div className="columna planes">✓</div>
          </div>
          <div className="fila">
            <div className="columna">Calidad de video hasta 4K UHD / HDR</div>
            <div className="columna planes">✓</div>
            <div className="columna planes">✓</div>
          </div>
          <div className="fila">
            <div className="columna">Disfrutá en distintos dispositivos</div>
            <div className="columna planes">2</div>
            <div className="columna planes">4</div>
          </div>
          <div className="fila">
            <div className="columna">Bonificación especial en tu primer año</div>
            <div className="columna planes equis">X</div>
            <div className="columna planes">✓</div>
          </div>
          <div className="fila precio">
            <div className="columna">Precio</div>
            <div className="columna planes">$5.000</div>
            <div className="columna planes">$45.000</div>
          </div>
        </div>
      </div>
    </>

  );
}

export default PlanesPochocleros;
