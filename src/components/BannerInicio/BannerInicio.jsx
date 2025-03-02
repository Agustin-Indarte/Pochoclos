import React, {useState,useEffect} from 'react'
import "./BannerInicio.css"
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const BannerInicio=()=> {
  
  const navigate=useNavigate()

  /* Definimos el estado del video */
  const [videoSrc, setVideoSrc] = useState("/VideoPochoclos.mp4");
  /* Funcion que identifica el tamaño de la pantalla y establece un video o el otro */
  useEffect(() => {
    const updateVideo = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("./VideoPochoclosVertical.mp4");
      } else {
        setVideoSrc("./VideoPochoclos.mp4");
      }
    };
    updateVideo(); // Llamar al cargar la página
    window.addEventListener("resize", updateVideo);
    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  return (
    <>
      <Container fluid className='BannerInicio'>
      <video className="video-fondo" src={videoSrc} autoPlay loop muted playsInline></video>
        <div className='Detalles-BannerInicio'>
          <img className='img-fluid logo-BannerInicio' src="public\Logo-Pochoclos.png" alt="Logo Pochoclos" />
          <div className='textos-BannerInicio'>
            <h1>¡La mejor forma de ver tus películas y series!</h1>
            <p>Dulces como las escenas románticas,crujientes como las películas de acción o saladas como el mejor humor de las series. Con pochoclos, hay para todos los gustos, asi que prepará los tuyos, ponete cómodo y disfrutá lo mejor del cine en casa.</p>
          </div>
        </div>
        <div className='Botones-BannerInicio'>
          <div>
          <Button className='btn btn-suscribirse-inicio' onClick={() => navigate("/registro")}>
            Suscribirse
          </Button>
          <Button className='btn btn-sesion-inicio'onClick={() => navigate("/login")}>
            Iniciar Sesión
          </Button>
          </div>
          <a href="#Detalles" className='Ver-detalles'>Ver detalles</a>
          

        </div>
      </Container>
    </>
  )
}

export default BannerInicio