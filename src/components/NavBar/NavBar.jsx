import './Navbar.css'
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Navbar expand="md" className='custom-Navbar fixed-top shadow-lg justify-content-between '>
      <Container >
        <Navbar.Brand>
          <Link to="/" className='navbar-brand'>
          <img src="public\Logo-Pochoclos.png" alt="Logo Pochoclos" className='img-fluid'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start w-100 fw-bold align-items-end mt-3 fs-5" >
            <Nav.Link href="/" className="active text-uppercase ">Inicio</Nav.Link>
            <Nav.Link href="/menu" className=" text-uppercase">Buscar</Nav.Link>
            <Nav.Link href="/about" className=" text-uppercase">Pelis</Nav.Link>
            <Nav.Link href="/contact" className=" text-uppercase">Series</Nav.Link>
            <Nav.Link href="/contact" className=" text-uppercase">Favoritos</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className='Navbar-Perfil d-flex align-items-center'>
            <p className='text-light me-3 mt-4 fs-5 fw-bold'>Team2</p>
            <figure className='bg-body-secondary rounded-5 p-2 mb-0'>
                <img src="public\Perfil.png" alt="Imagen de perfil" />
            </figure>
        </div>
        
      </Container>
    </Navbar>
  )
}

export default NavBar