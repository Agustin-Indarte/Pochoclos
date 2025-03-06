import React from 'react';
import { FormulariodeRegistro } from '../../components';
import './Registro.css';

function Registro() {
  return (
    <div className='Registro-page'>
        <div className="bg-dark text-white">
            <img src="/logo-pochoclos.png" alt="Logo de la app" className="small-logo" />
            <FormulariodeRegistro/>
        </div>
    </div>
  );
}

export default Registro;











