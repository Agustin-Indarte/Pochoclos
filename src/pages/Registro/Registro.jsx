import React from 'react';
import { FormulariodeRegistro } from '../../components';
import './Registro.css';



function Registro() {
  return (
    <div className='Registro-page'>
        <div className="bg-dark text-white vh-100 d-flex flex-column align-items-center justify-content-center">
            <img src="public\logo-pochoclos.png" alt="Logo de la app" className="small-logo my-3" />
        </div>

        <FormulariodeRegistro/>
    </div>
);
}

export default Registro
