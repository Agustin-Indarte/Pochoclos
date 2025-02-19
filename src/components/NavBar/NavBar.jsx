import './Navbar.css'
import { Container, Dropdown, DropdownToggle, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"; // Ícono de lupa de FontAwesome

function NavBar() {
  return (
    <Navbar expand="md" className='custom-Navbar fixed-top shadow-lg justify-content-between '>
      <Container fluid>
        {/* Logo y marca */}
        <Navbar.Brand>
          <Link to="/" className='navbar-brand'>
          <img src="public\Logo-Pochoclos.png" alt="Logo Pochoclos" className='img img-fluid ms-2'/>
          </Link>
        </Navbar.Brand>
        
        <Nav className="d-block d-md-none">
          <Nav.Link href="/" className="text-uppercase">
            <FaSearch size={20} /> {/* Ícono de lupa */}
          </Nav.Link>
        </Nav>
        
        <Nav className="d-none d-md-flex me-auto justify-content-start w-100 fw-bold align-items-end mt-3 fs-5">
          <Nav.Link href="/" className="active text-uppercase">Inicio</Nav.Link>
          <Nav.Link href="/menu" className="text-uppercase">Buscar</Nav.Link>
          <Nav.Link href="/about" className="text-uppercase">Pelis</Nav.Link>
          <Nav.Link href="/contact" className="text-uppercase">Series</Nav.Link>
          <Nav.Link href="/contact" className="text-uppercase">Favoritos</Nav.Link>
        </Nav>
        
        {/* Perfil y menú desplegable */}
        <div className='Navbar-Perfil d-flex align-items-center justify-content-end my-1'>
            <p className='text-light me-3 mt-4 fs-5 fw-bold d-none d-md-block'>Team2</p>

            {/* Dropdown */}
            <Dropdown>
                {/* Ocultar el dropdown */}
                <Dropdown.Toggle variant="transparent"
                id="dropdown-perfil"
                className="p-0 border-0 bg-transparent"
                style={{ visibility: 'hidden', position: 'absolute' }} />

                {/* Usar la figura para abrir el menu */}
                <figure className='bg-body-secondary rounded-5 p-2 mb-0 me-2' 
                onClick={(e) =>{
                    e.preventDefault();
                    document.getElementById('dropdown-perfil').click();
                }} style={{ cursor: 'pointer' }} >
                <img src="public\Perfil.png" alt="Imagen de perfil" fluid />
            </figure>

            {/* Menu desplegable */}
            <Dropdown.Menu className='dropdown-menu-end'>
                <Dropdown.Item href='#/action1'>Perfil</Dropdown.Item>
                <Dropdown.Item href='#/action1'>Ajustes</Dropdown.Item>
                <Dropdown.Item href='#/action1'>Suscripción</Dropdown.Item>
                <Dropdown.Item href='#/action1'>Contactanos</Dropdown.Item>
                <Dropdown.Item href='#/action1'>Cerrar Sesión</Dropdown.Item>
                <Dropdown.Item href='#/action1'>Administración</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            
        </div>
        
      </Container>
    </Navbar>
  )
}

export default NavBar