import React from 'react'
import { CardPelicula } from '../../components';
import "./GridPelicula.css"

const GridPelicula = ({ peliculasAPI, peliculasCRUD }) => {
    // 🔹 Combinamos películas del CRUD con las de la API
    const todasLasPeliculas = [/* ...peliculasCRUD, */ ...peliculasAPI];

    // 🔹 Eliminamos duplicados (si hay películas con el mismo ID)
    const peliculasUnicas = [...new Map(todasLasPeliculas.map(p => [p.id, p])).values()];

    return (
        <div className="grilla-peliculas">
            {peliculasUnicas.map((pelicula, index) => (
                <CardPelicula key={`pelicula-${pelicula.id || index}`} pelicula={pelicula} />
            ))}
        </div>
    );
};

export default GridPelicula;