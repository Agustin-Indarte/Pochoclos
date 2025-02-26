import React, { useEffect, useState } from 'react'
import { NavBar,Footer,GridPelicula } from '../../components';

const Peliculas = () => {
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

        fetchPeliculas();
    }, []);

    return (
        <div className="pagina-peliculas">
            <h2>Todas las películas</h2>
            <GridPelicula peliculasAPI={peliculasAPI} peliculasCRUD={peliculasCRUD} />
        </div>
    );
};

export default Peliculas;