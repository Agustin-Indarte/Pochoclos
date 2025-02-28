import React, { useEffect, useState } from 'react'
import { NavBar, Footer, GridPelicula } from '../../components';
import "./Peliculas.css"

const Peliculas = () => {
    const [buscador, setBuscador] = useState("")
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

    const todasLasPeliculas = [/* ...peliculasCRUD, */ ...peliculasAPI]
    const peliculasFiltradas = todasLasPeliculas.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(buscador.toLowerCase()))

    return (
        <>
            <NavBar></NavBar>
            <div className="pagina-peliculas">
                <h2>TODAS NUESTRAS PELÍCULAS EN UN SOLO LUGAR</h2>
                <div className='buscador-container'>
                    <input
                        type="text"
                        placeholder="Buscar película...🔎"
                        value={buscador}
                        onChange={(e) => setBuscador(e.target.value)}
                        className="buscador-peliculas"
                    />
                </div>

                {peliculasFiltradas.length > 0 ? (
                    <GridPelicula peliculasAPI={peliculasFiltradas} peliculasCRUD={[]} />
                ) : (
                    <p className="mensaje-no-encontrado">No se encontraron películas.</p>
                )}

                <GridPelicula peliculasAPI={peliculasFiltradas} peliculasCRUD={[]} />
            </div>
            <Footer></Footer>
        </>

    );
};

export default Peliculas;