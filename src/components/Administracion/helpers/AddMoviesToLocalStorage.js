export function AddMoviesToLocalStorage(movies) {
    localStorage.setItem('movies', JSON.stringify(movies))
}