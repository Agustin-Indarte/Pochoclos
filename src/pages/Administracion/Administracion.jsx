import { useEffect, useReducer, useState } from 'react';
import { GetMoviesToLocalStorage } from '../../components/Administracion/helpers/GetMoviesToLocalStorage';
import { AddMoviesToLocalStorage } from '../../components/Administracion/helpers/AddMoviesToLocalStorage';
import HeaderAdmin from '../../components/Administracion/HeaderAdmin/HeaderAdmin';
import TableMovies from '../../components/Administracion/TableMovies/TableMovies';
import { moviesReducer } from '../../components/Administracion/reducers/MoviesReducer';
import { Footer, NavBar } from '../../components';


function Administracion() {
  const initialMovie = GetMoviesToLocalStorage() || []; 

  const[movies, dispatch] = useReducer(moviesReducer, initialMovie)
  // Este useEffect se ejecuta cada vez que el estado `movies` cambia, guardando el estado actualizado en el localStorage
  useEffect(()=>{
    // Se guarda el estado actualizado de las películas en el localStorage
    AddMoviesToLocalStorage(movies)
  }, [movies])// Dependencia: se ejecuta cuando `movies` cambia

  function onAddMovie(values){
    dispatch({
      type: "added",
      id: values.id,
      name: values.name,
      category: values.category,
      description: values.description,
      imgMovie: values.imgMovie,
      published: values.published,
      favorite: false
    });
    console.log("FIN:", values);
  }

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

  //para editar la pelicula
  function onEditMovie(id, name, description, imgMovie, category){
    console.log('onEditMovie id'+ id + name + description + imgMovie);
    dispatch({
      type: "edit",
      id,
      name,
      description,
      imgMovie,
      category
    });
  }



  return (
    <>
     <NavBar></NavBar>
      <HeaderAdmin onAddMovie={onAddMovie} />
      <TableMovies  
            movies={movies} 
            onDeleteMovie={onDeleteMovie}
            onToggleDone={onToggleDone}
            onTogglePublished={onTogglePublished}
            onEditMovie={onEditMovie}        
      />
      <Footer></Footer>

    </>
  )
}

export default Administracion
