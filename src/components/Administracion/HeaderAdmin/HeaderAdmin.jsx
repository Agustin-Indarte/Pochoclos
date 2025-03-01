import React from 'react'
import './HeaderAdmin.css';
import ModalPage from '../../../pages/Modalagregarpelicula/modal';

function HeaderAdmin() {
  return (
    <div className='container contenedorHeader mt-5'>
            <div className='row'>
                <h1 className='col-12'>ADMINISTRACIÓN</h1>
            </div>
            <div className='row mt-5'>
                <h2 className='col-7 '>LISTA DE PELICULAS</h2>
                {/* <button className='col-4 btnNewMovie ms-auto'>NUEVA PELICULA</button> */}
                <ModalPage/>
            </div>
    </div>
  )
}

export default HeaderAdmin