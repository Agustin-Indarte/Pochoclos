import React from 'react'
import './TableMovies.css'
import ButtonsActions from '../ButtonsActions/ButtonsActions';

function TableMovies({movies,onDeleteMovie,onToggleDone, onTogglePublished}) {
  return (
    <div className='container align-items-center justify-content-center'>
         <table className='tableMovies'>
            <thead>
            <tr>
                <th>Num</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Publicado</th>
                <th>Acciones</th>
            </tr>
            </thead>

            <tbody>
                { movies.map((movie, index) =>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                        <img src={movie.imgMovie} alt={movie.name} width="100" />
                        </td>
                        <td>{movie.name}</td>
                        <td>{movie.category}</td>
                        <td>{movie.description}</td>
                        <td>
                        <input className='checkboxTable' type="checkbox" defaultChecked={movie.published} onClick={() => {onTogglePublished(movie.id);}} />
                        </td>
                        <td>
                        <ButtonsActions  // El componente ContainerButtons se usa para mostrar los botones de acción (editar, eliminar, etc.)
                        onDeleteMovie={onDeleteMovie}  // Pasa la función onDeleteTask para eliminar la tarea
                        onToggleDone={onToggleDone}  // Pasa la función onToggleDone para cambiar el estado de destacado
                        movieId={movie.id}  // Pasa el ID de la tarea al componente ContainerButtons
                        movieFavorite={movie.favorite}  // Pasa el estado 'done' para indicar si la tarea está completada
                        />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
   
  )
}

export default TableMovies