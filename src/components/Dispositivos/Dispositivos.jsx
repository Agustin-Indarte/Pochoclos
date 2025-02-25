import { Container } from 'react-bootstrap';
import './Dispositivos.css'

function Dispositivos() {
  return (
    <>
      <div className="text-container">
        <h1>Disfrutalo cuando y donde quieras</h1>
        <h4>Ya sea en tu celular, tablet, computadora o TV.</h4>
        <img src="public\dispositivos.png" alt="imagen de dispositivos" />
        <img className='pochoclosizq' src="public\pochoclos1.png" alt="pochoclos dispersos del lado izquierdo" />
        <img className='pochoclosder' src="public\pochoclos2.png" alt="pochoclos dispersos del lado derecho" />
      </div>
    </>
  );
}


export default Dispositivos;
