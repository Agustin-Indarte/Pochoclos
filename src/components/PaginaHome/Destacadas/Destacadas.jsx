import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Carousel, Button, CarouselCaption } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "./Destacadas.css"
import { ModalTrailer } from '../..';

const Destacadas = () => {
    const handleOpenModal = (movieId) => {
        setSelectedMovieId(movieId);
        setModalOpen(true);
      };
      const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
    //Definimos con useState los estados para guardar las Peliculas,Generos y Carga
    const [peliculas, setPeliculas] = useState([])
    const [generos, setGeneros] = useState([])
    const [cargando, setCargando] = useState(true)
    const [esMovil, setEsMovil] = useState(window.innerWidth < 576) // Estado para manejar el tamaño de pantalla

    //Establecemos con useEffect y axios las peticiones a la API
    useEffect(() => {
        //Funcion que hace la solicitud a la API, es asyn ya que trae los datos desde un alojamiento externo y puede demorar
        const pedirDatos = async () => {
            try {
                const API_KEY = "e845bcd33e2571e0313cbf204469c4fc" //Llave de acceso a la API

                //Pedimos las peliculas más populares brindando el link de la api donde tiene que realizar la busqueda y nuestra clave de acceso
                const peliculasRespuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
                )

                //Seleccionamos el rango de peliculas que queremos mostrar
                const peliculasSeleccionadas = peliculasRespuesta.data.results.slice(0, 11)

                // Personalizacion de imagen de fondo para cada pelicula a traves de su ID 
                const ajustesFondos = {
                    822119: "https://image.tmdb.org/t/p/original/jt2HI4GBjkOK6E8T8qRjYIqUJMc.jpg",
                    950396: "https://image.tmdb.org/t/p/original/xI8fGpn41WJgfazS4Qoppx6ZUN1.jpg",
                    1160956: "https://image.tmdb.org/t/p/original/i0hPyO3yCzro41AzRafZgFSumC2.jpg",
                    1126166: "https://image.tmdb.org/t/p/original/rOMLLMGgDgGG6XeT3P8sUdUb8nl.jpg",
                    1294203: "https://image.tmdb.org/t/p/original/fNHZ0MNgHtBQBVvLnEUCJUDk8bz.jpg",
                    539972: "https://image.tmdb.org/t/p/original/x5vvsZBwNbpxdDK67w6BHTo4BbR.jpg",
                };

                //Definimos las peliculas procesadas, pidiendo la informacion a la api a traves de map y agregando el fondo personalizado, en caso de no tener uno asignado, guarda el predeterminado de TMDB
                const peliculasProcesadas = peliculasSeleccionadas.map((pelicula) => ({
                    ...pelicula,
                    backdrop: ajustesFondos[pelicula.id] || `https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`,
                    poster: `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`
                }))
                console.log("Películas procesadas:", peliculasProcesadas); //Consultamos con la consola las peliculas procesadas

             

                //Pedimos la lista de géneros desde la Api
                const generosRespuesta = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`
                )
                //Guardamos los generos en el estado y lo consultamos a traves de la consola
                setGeneros(generosRespuesta.data.genres)
                console.log("Géneros obtenidos:", generosRespuesta.data.genres);

                //Guardamos la informacion obtenida en los estados
                setPeliculas(peliculasProcesadas)
                setGeneros(generosRespuesta.data.genres)
                setCargando(false) //Indicamos que la carga termino

                   // Detectar cambios en el tamaño de la pantalla
                const manejarResize = () => {
                    setEsMovil(window.innerWidth < 576)
                }

                window.addEventListener("resize", manejarResize)
                return () => window.removeEventListener("resize", manejarResize)


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        pedirDatos() //Llamamos a la funcion
    }, [])

    //Establecemos una funcion que busque por cada id de generos el nombre que le corresponde
    const generosPeliculas = (genreIds) => {
        return genreIds.map((id) => {
            const genero = generos.find((g) => g.id === id)
            return genero ? genero.name : null
        })
            .filter(Boolean)
            .slice(0, 2)
            .join(" | ")
    }

    //En caso de que la informacion este cargando muestra un spinner
    if (cargando) {
        return <div>Cargando...</div>;
    }

    //Creamos y renderizamos el contenedor de las peliculas destacadas con un carousel que recorrera las peliculas populares seleccionadas y muestre la informacion obtenida (fondo,titulo,descripcion,raiting y categoria) ademas de un boton para ver el trailer
    return (
        <>
        
        <Carousel className='CarouselDestacadas'>
            {peliculas.map((pelicula) => (
                <Carousel.Item className='itemCarouselDestacadas' key={pelicula.id}>
                    <img className='peliculaFondo'
                        src={esMovil ? pelicula.poster : pelicula.backdrop} // 🟢 Cambia la imagen según el tamaño de pantalla
                        alt={pelicula.title}
                    />
                    <CarouselCaption className='DetallesPeliculas'>
                        <h2>{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>

                        {/* Contenedor de los detalles y el botón */}
                        <div className="contenedor-detalles">
                            <div className="info-detalles">
                                <span className="rating">⭐{pelicula.vote_average.toFixed(1)}</span>
                                <span className="categoria">{generosPeliculas(pelicula.genre_ids)}</span>
                            </div>

                            {/* Botón que ocupará el mismo ancho que los detalles */}
                            <Button className='btn btn-verTrailer' onClick={() => handleOpenModal(pelicula.id)}>
                                <FontAwesomeIcon icon={faPlay} /> Ver Trailer
                            </Button>
                        </div>
                    </CarouselCaption>
                </Carousel.Item>
            ))}
        </Carousel>
        <ModalTrailer isOpen={modalOpen} onClose={() => setModalOpen(false)} movieId={selectedMovieId} />
        
        
        </>
        
    )
}
export default Destacadas
