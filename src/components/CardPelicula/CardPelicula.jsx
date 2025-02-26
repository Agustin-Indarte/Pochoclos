import React from 'react'
import "./CardPelicula.css"
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


const CardPelicula = ({ pelicula }) => {
    const url_img = "https://image.tmdb.org/t/p/original";
    const descripcionCorta =
        pelicula.overview.length > 120
            ? pelicula.overview.substring(0, 200) + "... Ver más"
            : pelicula.overview;

    return (
        <>
            <div
                className='card-container'
            >

                <div className='card-inner'>
                    <div className='Card-frente'>
                        <img src={pelicula.poster_path ? url_img + pelicula.poster_path : "/placeholder.jpg"} alt={pelicula.title} />

                    </div>

                    <div className='Card-reverso'>
                        <h4>{pelicula.title}</h4>
                        <p>{descripcionCorta}</p>
                        <Button>Ver Ahora</Button>
                    </div>
                </div>


            </div>



        </>

    )
}

export default CardPelicula