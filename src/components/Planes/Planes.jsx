import './Planes.css';
import { Table } from 'react-bootstrap';


function PlanesPochocleros() {
  return (
    <div className="tabla">
      <h2>🍿¡ELEGI TU MEJOR COMBO!🍿</h2>
      <Table responsive className='planes-pochocleros'>
        <thead>
          <tr>
          <th>
           <span style={{ color: 'var(--colorRojo)' }}>PLANES</span> POCHOCLEROS
          </th>
            <th>MENSUAL</th>
            <th>ANUAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acceso ilimitado a todo el catálogo de películas y series</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Acceso a estrenos exclusivos antes que nadie</td>
            <td>X</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Calidad de video hasta 4K UHD / HDR</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Disfrutá en distintos dispositivos</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Bonificación especial en tu primer año</td>
            <td>X</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>$5.000</td>
            <td>$45.000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PlanesPochocleros;