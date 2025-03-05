import React from 'react';
import './HeaderAdmin.css';
import FormAgregar from '../FormAgregar/FormAgregar';


function HeaderAdmin({onAddMovie}) {
  return (
    <div className='container contenedorHeader mt-5'>
            <div className='row'>
                <h1 className='col-12'>ADMINISTRACIÓN</h1>
            </div>
            <div className='row mt-5'>
                <h2 className='col-7 '>LISTA DE PELICULAS</h2>
                <div className='col-4 ms-auto'>
                  <FormAgregar onAddMovie={onAddMovie}/> 
                </div>                
            </div>
    </div>
  )
}

export default HeaderAdmin