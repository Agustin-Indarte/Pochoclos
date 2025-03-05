import React from 'react'
import "./CardPelicula.css"
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'



const CardPelicula = ({ pelicula }) => {
    const navigate=useNavigate()
    const titulo = pelicula.title || pelicula.name || "Título desconocido";
    const descripcion = pelicula.overview || pelicula.description || "Descripción no disponible";
    const url_img = "https://image.tmdb.org/t/p/original";
    const descripcionCorta =
        descripcion.length > 120
            ? descripcion.substring(0, 200) + "... Ver más"
            : descripcion;

            if (!pelicula) {
                return <p>Error: Datos de la película no disponibles</p>;
            }
    
            

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
                        <img src={pelicula.poster_path ? url_img + pelicula.poster_path : pelicula.imgMovie} alt={pelicula.title} />
                    </div>

                    <div className='Card-reverso'>
                        <h4>{titulo}</h4>
                        <p>{descripcionCorta}</p>
                        <Button onClick={() => navigate("*")}>Ver Ahora</Button>
                    </div>

                </div>
            </motion.div>




        </>

    )
}

export default CardPelicula