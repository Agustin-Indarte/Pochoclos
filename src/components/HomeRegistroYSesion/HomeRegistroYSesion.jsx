import {Container, Button } from 'react-bootstrap'
import { Link  } from 'react-router-dom'


function HomeRegistroYSesion() {
  return (
    <div>
        <Container className="mt-5 text-center d-flex align-items-center justify-content-center">
    <h1></h1>
    <p className='text-white'>Por favor, inicia sesión o regístrate para continuar.</p>
    <div>
      <Link to="/register">
        <Button variant="success" className="m-2">
          Registrarse
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="danger" className="m-2">
          Iniciar Sesión
        </Button>
      </Link>
    </div>
  </Container>
      
    </div>
  )
}

export default HomeRegistroYSesion
