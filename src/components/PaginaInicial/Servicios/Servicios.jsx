import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Servicios.css';

function SeccionPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const API_KEY = 'eb27394fbc0774dc40d01f47dbf04343'; 
  const url_img = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES&page=1`
        );
        setPeliculas(response.data.results);
      } catch (error) {
        console.error('Error al obtener peliculas:', error);
      }
    };
    fetchMovies();
  }, [API_KEY]);

  return (
    <div className="seccion-Estrenos">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>El mejor cine familiero en casa.</h2>
            <p>
              Desde risas hasta sustos, desde amores inolvidables hasta batallas épicas.
              En Pochoclos hay un universo de películas y series para disfrutar en familia.
              Acción, comedia, terror, drama, fantasía y mucho más, porque acá el menú es amplio
              y siempre hay algo para cada antojo cinematográfico.
            </p>
            <p style={{color: 'var(--colorBeige)'}}>¿Qué se te antoja hoy?</p>
          </Col>
          <Col md={6}>
            <Image className='img-familia'
              src="/Familia.jpg" 
              alt="Familia viendo películas"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
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
                className="mySwiper-estrenos"
            >
                {peliculas.map((pelicula) => (
                    <SwiperSlide key={pelicula.id}>
                        <div className="contenedor-Cards-Estrenos">
                        <img src={`${url_img + pelicula.poster_path}`} alt={pelicula.title} className='img-peliculas' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionPeliculas;
