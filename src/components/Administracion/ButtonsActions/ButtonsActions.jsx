import React from 'react';
import './ButtonsActions.css';
import FormModificar from '../FormModificar/FormModificar';


function ButtonsActions({onDeleteMovie, onToggleDone,movieId, movieFavorite,onEditMovie,idEdit}) {
  return (
    <div className='roleGroup'>
          {console.log('ButtonsActions: ' + idEdit)}
        <button className='btnDelete' onClick={() => {onDeleteMovie(movieId);}}>🗑️</button>
        <FormModificar onEditMovie={onEditMovie} idEdit={idEdit}/>
        <button className='btnDone' onClick={() => {onToggleDone(movieId);}}>
        {
          movieFavorite ? "⭐" : "✖️"
        }
        </button>
        
    </div>
  )
}

export default ButtonsActions