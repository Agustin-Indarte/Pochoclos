import './Categorias.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// const peliculas = [
//   { id: 1, titulo: "Inception", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 2, titulo: "Interstellar", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 3, titulo: "Dune", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 4, titulo: "The Matrix", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 5, titulo: "Inception", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 6, titulo: "Interstellar", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 7, titulo: "Dune", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
//   { id: 8, titulo: "The Matrix", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhhLmuRYWMnB-0d5980M8nryiLenEGO3rLQ&s" },
// ];

const CarruselPeliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const apiKey = 'e845bcd33e2571e0313cbf204469c4fc'; // Reemplaza con tu API Key real
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
                setPeliculas(datos.results.slice(0, 10)); // Limita a 10 películas
            } catch (error) {
                console.error('Error al obtener películas:', error);
                // Manejo de errores: Mostrar un mensaje al usuario o una imagen de error
                // Por ejemplo:
                // alert("Error al cargar las películas. Por favor, inténtalo de nuevo más tarde.");
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
        320: { slidesPerView: 1 },  // En pantallas pequeñas, 1 imagen
        768: { slidesPerView: 2 },  // En tablets, 2 imágenes
        1024: { slidesPerView: 3 }, // En pantallas medianas, 3 imágenes
        1280: { slidesPerView: 4 }, // En pantallas grandes, 4 imágenes
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {peliculas.map((pelicula) => (
        <SwiperSlide key={pelicula.id}>
          <img src={`${url_img + pelicula.poster_path}`} alt={pelicula.title} className='img-peliculas' />
          <h3 style={{ textAlign: "center" }}>{pelicula.title}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselPeliculas;