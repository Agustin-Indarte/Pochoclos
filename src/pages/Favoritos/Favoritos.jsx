import React, { useState } from 'react';
import { NavBar, Footer, GridPeliculaFavoritos } from '../../components';
import "../Peliculas/Peliculas.css";

const Peliculas = () => {
    const [buscador, setBuscador] = useState("");

    return (
        <>
            <NavBar />
            <div className="pagina-peliculas">
                <h2>TUS PELÍCULAS FAVORTIAS</h2>
                <div className='buscador-container'>
                    <input
                        type="text"
                        placeholder="Buscar película...🔎"
                        value={buscador}
                        onChange={(e) => setBuscador(e.target.value)}
                        className="buscador-peliculas"
                    />
                </div>

                {/* Pasamos el buscador como prop a GridPelicula */}
                <GridPeliculaFavoritos buscador={buscador} />
            </div>
            <Footer />
        </>
    );
};

export default Peliculas;
