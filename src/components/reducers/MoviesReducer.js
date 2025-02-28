// Definimos una función reducer para manejar el estado de las películas.
// Recibe el estado actual (movies) y una acción (action).
export const moviesReducer = (movies, action) => {
    switch(action.type){  // Evaluamos el tipo de acción que se está ejecutando.  
        case "delete" : {
        // Filtra las películas para eliminar la que coincida con el id recibido en la acción.
          return movies.filter((movie) => movie.id !== action.id)
        }
        case "toggleDone" : {
            // Alterna el estado de "destacado" de una película (si está destacada, le saca el destacado y viceversa).
            const toggleMovies = movies.map((movie) => {
                return movie.id === action.id ? {...movie, favorite:!movie.favorite} : movie
            });
            return toggleMovies;
        }

        case "togglePublished" : {
            // Alterna el estado de "destacado" de una película (si está destacada, le saca el destacado y viceversa).
            const toggleMovies = movies.map((movie) => {
                return movie.id === action.id ? {...movie, published:!movie.published} : movie
            });
            return toggleMovies;
        }
        
    }
}
