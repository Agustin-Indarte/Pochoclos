import './Categorias.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CarruselPeliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const apiKey = 'e845bcd33e2571e0313cbf204469c4fc'; 
    const url_api = 'https://api.themoviedb.org/3'
    const img_path = 'https://image.tmdb.org/t/p/original'
    const url_img = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                const respuesta = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`
                );
                if (!respuesta.ok) {
                    throw new Error(`HTTP error! status: ${respuesta.status}`);
                }
                const datos = await respuesta.json();
                console.log(datos)
                setPeliculas(datos.results.slice(0, 20));
            } catch (error) {
                console.error('Error al obtener películas:', error);
            }
        };

        obtenerPeliculas();
    }, [apiKey]); // Incluye apiKey en las dependencias

    return (
      
<Swiper
      slidesPerView={3}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 },  
        1024: { slidesPerView: 3 }, 
        1280: { slidesPerView: 4 }, 
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {peliculas.map((pelicula) => (
        <SwiperSlide key={pelicula.id}>
          <img src={`${url_img + pelicula.poster_path}`} alt={pelicula.title} className='img-peliculas' />
          <h3 className='titulo-peli'>{pelicula.title}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselPeliculas;