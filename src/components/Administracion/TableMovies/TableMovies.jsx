import React, { useState } from 'react';
import './TableMovies.css';
import ButtonsActions from '../ButtonsActions/ButtonsActions';

function TableMovies({movies,onDeleteMovie,onToggleDone, onTogglePublished,onEditMovie}) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [idEdit, setIdEdit] = useState(null); // para manejar el estado del idEdit

 
    // Función para manejar el clic en una fila
    const handleRowClick = (fila) => {
        setSelectedMovie(fila); // Guarda los datos de la película seleccionada
        setIdEdit(fila.id); // Actualiza el idEdit con el id de la película seleccionada
    };

    

  return (
    <div className='container'>
         <table className='tableMovies'>
            <thead>
            <tr>
                <th>CODIGO</th>
                <th>IMAGEN</th>
                <th>NOMBRE</th>
                <th>CATEGORIA</th>
                <th>DESCRIPCION</th>
                <th>PUBLICADO</th>
                <th>ACCIONES</th>
            </tr>
            </thead>

            <tbody>
                { movies.map((movie) =>(             
                         
                    <tr key={movie.id} onClick={() => handleRowClick(movie)}>
                        <td>{movie.id}</td>
                        <td>
                        <img className='imgMovie' src={movie.imgMovie} alt={movie.name} width="100" />
                        </td>
                        <td className='titleMovie'>{movie.name}</td>
                        <td>{movie.category}</td>
                        <td>{movie.description}</td>
                        <td>
                            {console.log(movie.published)}
                        <input className='checkboxTable' type="checkbox" defaultChecked={movie.published} onClick={() => {onTogglePublished(movie.id);}} />
                        </td>
                        <td>
                        <ButtonsActions  // El componente ContainerButtons se usa para mostrar los botones de acción (editar, eliminar, etc.)
                        onDeleteMovie={onDeleteMovie}  // Pasa la función onDeleteTask para eliminar la tarea
                        onToggleDone={onToggleDone}  // Pasa la función onToggleDone para cambiar el estado de destacado
                        movieId={movie.id}  // Pasa el ID de la tarea al componente ContainerButtons
                        movieFavorite={movie.favorite}  // Pasa el estado 'done' para indicar si la tarea está completada
                        onEditMovie={onEditMovie}
                        idEdit ={idEdit}
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