export function GetMoviesToLocalStorage() {
    const movies = JSON.parse(localStorage.getItem('movies'))
    return movies
}