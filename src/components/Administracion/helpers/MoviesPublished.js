export function MoviesPublished() {
    // Obtener las películas del localStorage
  const movies = JSON.parse(localStorage.getItem('movies'));
  
  // Verificar si las películas existen y filtrar solo las publicadas
  if (movies && Array.isArray(movies)) {
    return movies.filter(movie => movie.published === true);
  }

  // Si no hay películas o si el valor no es un array, retornar un array vacío
  return [];
}