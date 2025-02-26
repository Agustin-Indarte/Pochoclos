import React from 'react'

const CardPelicula = ({ pelicula }) => {
    const url_img = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <img src={pelicula.poster_path ? url_img + pelicula.poster_path : "/placeholder.jpg"} alt={pelicula.title} />
            <h4>{pelicula.title}</h4>
        </div>
    )
}

export default CardPelicula