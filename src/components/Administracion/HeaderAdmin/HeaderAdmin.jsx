import React from 'react'
import './HeaderAdmin.css';

function HeaderAdmin() {
  return (
    <div className='container contenedorHeader m-5 align-items-center justify-content-center'>
            <div className='row'>
                <h1 className='col-12'>ADMINISTRACIÓN</h1>
            </div>
            <div className='row mt-5'>
                <h2 className='col-8 '>LISTA DE PELICULAS</h2>
                <button className='col-4 btnNewMovie'>NUEVA PELICULA</button>
            </div>
    </div>
  )
}

export default HeaderAdmin