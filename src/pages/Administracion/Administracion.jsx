import React, { useEffect, useReducer } from 'react'
import './Administracion.css';
import HeaderAdmin from '../../components/Administracion/HeaderAdmin/HeaderAdmin';
import TableMovies from '../../components/Administracion/TableMovies/TableMovies';
import { GetMoviesToLocalStorage } from '../../components/Administracion/helpers/GetMoviesToLocalStorage';
import { AddMoviesToLocalStorage } from '../../components/Administracion/helpers/AddMoviesToLocalStorage';
import { moviesReducer } from '../../components/reducers/MoviesReducer';


function Administracion() {

  const initialMovie = GetMoviesToLocalStorage() || []; // Se obtiene la lista de películas desde el localStorage o se inicializa como un arreglo vacío si no existe
  // Se usa useReducer para gestionar el estado de las películas. `moviesReducer` maneja las actualizaciones y el estado inicial es `initialMovie
  
  /* if (initialMovie !== "") {
      
  } */

  const[movies, dispatch] = useReducer(moviesReducer, initialMovie)
  // Este useEffect se ejecuta cada vez que el estado `movies` cambia, guardando el estado actualizado en el localStorage
  useEffect(()=>{
    // Se guarda el estado actualizado de las películas en el localStorage
    AddMoviesToLocalStorage(movies)
  }, [movies])// Dependencia: se ejecuta cuando `movies` cambia

  function onDeleteMovie(id){
    dispatch({
      type: "delete",
      id,
    });
  }
  //funcion para favorito
  function onToggleDone(id){
    dispatch({
      type: "toggleDone",
      id
    });
  }
  //funcion para publicado
  function onTogglePublished(id){
    dispatch({
      type: "togglePublished",
      id
    });
  }


  return (
        <>
            <HeaderAdmin/>
            <TableMovies 
            movies={movies} 
            onDeleteMovie={onDeleteMovie}
            onToggleDone={onToggleDone}
            onTogglePublished={onTogglePublished} 
          />
        </>
        
  )
}

export default Administracion
