import React, { useEffect, useState } from 'react'
import { CardPelicula } from '../..';
import "./GridPelicula.css"
import { MoviesPublished } from '../../Administracion/helpers/MoviesPublished';

const GridPelicula = ({ buscador }) => {
    const [peliculasAPI, setPeliculasAPI] = useState([]);
    const [peliculasCRUD, setPeliculasCRUD] = useState([]); // Aquí irán las películas del CRUD
    const apiKey = "e845bcd33e2571e0313cbf204469c4fc";

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const categorias = [28, 10751, 35, 10749]; // 🔹 Categorías elegidas
                let peliculas = [];

                for (const categoria of categorias) {
                    const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&with_genres=${categoria}&page=1`);
                    const datos = await respuesta.json();
                    peliculas = [...peliculas, ...datos.results];
                }

                setPeliculasAPI(peliculas);
            } catch (error) {
                console.error("Error al obtener películas:", error);
            }
        };

        const CRUD = MoviesPublished();
        setPeliculasCRUD(CRUD);

        fetchPeliculas();
    }, []);

    // Combinamos las películas de la API y del CRUD
    const PeliculasCombinadas = [...peliculasCRUD, ...peliculasAPI];

    // Filtramos por el buscador antes de renderizar
    const peliculasFiltradas = PeliculasCombinadas
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

export default GridPelicula;


