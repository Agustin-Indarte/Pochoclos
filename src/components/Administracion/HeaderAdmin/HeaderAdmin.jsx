import React from 'react';
import './HeaderAdmin.css';
import FormAgregar from '../FormAgregar/FormAgregar';


function HeaderAdmin({onAddMovie}) {
  return (
    <div className='container contenedorHeader d-flex flex-column'>
            <div className='row'>
                <h1 className='col-12'>ADMINISTRACIÓN</h1>
            </div>
            <div className='row align-items-end'>
                <h2 className='col-7'>LISTA DE PELICULAS</h2>
                <div className='col-5 text-end'>
                  <FormAgregar onAddMovie={onAddMovie}/> 
                </div>                
            </div>
    </div>
  )
}

export default HeaderAdmin