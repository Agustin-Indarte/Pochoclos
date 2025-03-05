import React, { useState } from 'react';
import { NavBar, Footer, GridPelicula } from '../../components';
import "./Peliculas.css";

const Peliculas = () => {
    const [buscador, setBuscador] = useState("");

    return (
        <>
            <NavBar />
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

                {/* Pasamos el buscador como prop a GridPelicula */}
                <GridPelicula buscador={buscador} />
            </div>
            <Footer />
        </>
    );
};

export default Peliculas;
