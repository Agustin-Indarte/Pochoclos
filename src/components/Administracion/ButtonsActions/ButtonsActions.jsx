import React from 'react'
import './ButtonsActions.css'
function ButtonsActions({onDeleteMovie, onToggleDone,movieId, movieFavorite}) {
  return (
    <div className='roleGroup'>
        <button className='btnDelete' onClick={() => {onDeleteMovie(movieId); window.location.reload();}}>🗑️</button>
        <button className='btnEdit'>🖊️</button>
        <button className='btnDone' onClick={() => {onToggleDone(movieId);}}>
        {
          movieFavorite ? "⭐" : "✖️"
        }
        </button>
    </div>
  )
}

export default ButtonsActions