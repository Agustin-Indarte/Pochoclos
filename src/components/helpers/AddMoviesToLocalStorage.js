export const addMoviesToLocalStorage = (movie) => {  
    const movies = JSON.parse(localStorage.getItem('movies')) || [];  
    movies.push(movie);  
    localStorage.setItem('movies', JSON.stringify(movies));  
};  