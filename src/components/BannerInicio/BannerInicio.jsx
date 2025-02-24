import React from 'react'
import "./BannerInicio.css"
import { Container, Button } from 'react-bootstrap'

function BannerInicio() {
  return (
    <>
      <Container fluid className='BannerInicio'>
      <video className="video-fondo" src="/VideoPochoclos.mp4" autoPlay loop muted playsInline></video>
        <div className='Detalles-BannerInicio'>
          <img className='img-fluid logo-BannerInicio' src="public\Logo-Pochoclos.png" alt="Logo Pochoclos" />
          <div className='textos-BannerInicio'>
            <h1>¡La mejor forma de ver tus películas y series!</h1>
            <p>Dulces como las escenas románticas,crujientes como las películas de acción o saladas como el mejor humor de las series. Con pochoclos, hay para todos los gustos, asi que prepará los tuyos, ponete cómodo y disfrutá lo mejor del cine en casa.</p>
          </div>
        </div>
        <div className='Botones-BannerInicio'>
          <div>
          <Button className='btn btn-suscribirse-inicio'>
            Suscribirse
          </Button>
          <Button className='btn btn-sesion-inicio'>
            Iniciar Sesión
          </Button>
          </div>
          <a href="" className='Ver-detalles'>Ver detalles</a>
          

        </div>
      </Container>
    </>
  )
}

export default BannerInicio