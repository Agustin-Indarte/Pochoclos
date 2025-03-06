import React, { useEffect, useState } from 'react'
import { CardPelicula } from '../..';
import "../../SeccionPeliculas/GridPelicula/GridPelicula.css"
import { MoviesFavorite } from '../../Administracion/helpers/MoviesFavorite';

const GridPeliculaFavoritos = ({ buscador }) => {

    const PeliculasFavoritas = MoviesFavorite();

   

    // Filtramos por el buscador antes de renderizar
    const peliculasFiltradas = PeliculasFavoritas
        .filter((pelicula, index, self) =>
            pelicula &&
            self.findIndex(p => p.id === pelicula.id) === index // Filtra duplicados por ID
        )
        .filter((pelicula) => {
            const titulo = pelicula.title || pelicula.name || "";
            return titulo.toLowerCase().includes(buscador.toLowerCase());
        });

    return (
        <div className="grilla-peliculas">
            {peliculasFiltradas.length > 0 ? (
                peliculasFiltradas.map((pelicula, index) => (
                    <CardPelicula
                        key={`pelicula-${pelicula.id || `custom-${index}`}`}
                        pelicula={pelicula}
                    />
                ))
            ) : (
                <p className="mensaje-no-encontrado">No se encontraron películas.</p>
            )}
        </div>
    );
};

export default GridPeliculaFavoritos;


