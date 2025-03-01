export const getMoviesFromLocalStorage = () => {  
    return JSON.parse(localStorage.getItem('movies')) || [];  
};  