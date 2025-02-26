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
            <motion.div
                className='card-container'
                whileInView={{ opacity: 1, y: 0 }} // Se activa al entrar en pantalla
                initial={{ opacity: 0, y: 50 }} // Inicia oculto y desplazado hacia abajo
                transition={{ duration: 0.6, ease: "easeOut" }} // Efecto suave
                viewport={{ once: false, amount: 0.2 }} // Activa el efecto en cada scroll, cuando el 20% de la card esté visible
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
            </motion.div>




        </>

    )
}

export default CardPelicula