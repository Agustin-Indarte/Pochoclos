import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./CarruselPeliculas.css"

const CarruselPeliculas = ({ categoriaId, titulo }) => {
    const [peliculas, setPeliculas] = useState([]);
    const apiKey = 'e845bcd33e2571e0313cbf204469c4fc';
    const url_img = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&with_genres=${categoriaId}&page=1`);
                const datos = await respuesta.json();
                setPeliculas(datos.results);
            } catch (error) {
                console.error('Error al obtener películas:', error);
            }
        };

        obtenerPeliculas();
    }, [categoriaId]);

    return (
        <div className="contenedor-categorias">
            <h2 className="titulo-categoria">{titulo}</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 }, 
                    768: { slidesPerView: 2 },  
                    1024: { slidesPerView: 3 }, 
                    1280: { slidesPerView: 4 }, 
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper-Categorias"
            >
                {peliculas.map((pelicula) => (
                    <SwiperSlide key={pelicula.id}>
                        <div className="contenedor-Cards">
                        <img src={`${url_img + pelicula.backdrop_path}`} alt={pelicula.title} className='img-peliculas' />
                        </div>
                        <h3 className='titulo-peli text-light'>{pelicula.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarruselPeliculas;

