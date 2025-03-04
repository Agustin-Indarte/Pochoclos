import './Navbar.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";




function NavBar() {
  const auth = getAuth(); // Asegúrate de que esto está definido
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navbar expand="md" className='custom-Navbar fixed-top shadow-lg justify-content-between '>
      <Container fluid>
        {/* Logo y marca */}
        <Navbar.Brand>
          <Link className="navbar-brand">
            <img src="public\logo-pochoclos.png" alt="Logo Pochoclos" className="img  ms-2" />
          </Link>
        </Navbar.Brand>

        {/* Ícono de búsqueda en dispositivos pequeños */}
        <Nav className="d-block d-md-none justify-content-center me-4">
          <Nav.Link href="/" className="text-uppercase">
            <FaSearch size={20} />
          </Nav.Link>
        </Nav>

        {/* Menú de navegación */}
        <Nav className="d-none d-md-flex me-auto justify-content-start w-100 fw-bold align-items-end mt-3 fs-5">
          <Nav.Link href="/home" className="active text-uppercase">Inicio</Nav.Link>
          <Nav.Link href="/peliculas" className="text-uppercase">Buscar</Nav.Link>
          <Nav.Link href="/favoritos" className="text-uppercase">Favoritos</Nav.Link>
        </Nav>

        {/* Menú de perfil */}
        <div
          className="Navbar-Perfil d-flex align-items-center justify-content-end mt-2"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <p className="text-light me-3 mt-4 fs-4 fw-bold d-none d-md-block">Team2</p>
          <figure className="bg-body-secondary rounded-5 p-2 mb-0 me-2" style={{ cursor: 'pointer' }}>
            <img src="/Perfil.png" alt="Imagen de perfil" />
          </figure>
          {showMenu && (
            <div className="dropdown-menu-custom">
              <div className='perfil-desplegable d-flex align-items-center justify-content-end my-1'>
                <p className="text-light me-3 mt-4 fs-4 fw-bold d-none d-md-block">Team2</p>
                <figure className="bg-body-secondary rounded-5 p-2 mb-0 me-2" style={{ cursor: 'pointer' }}>
                  <img src="/Perfil.png" alt="Imagen de perfil" />
                </figure>
              </div>
              <Link className="dropdown-item" to="/profile">Perfil</Link>
              <Link className="dropdown-item" to="/ajustes">Ajustes</Link>
              <Link className="dropdown-item" to="/registro">Suscripción</Link>
              <Link className="dropdown-item" to="/contacto">Contáctanos</Link>
              <Link className="dropdown-item" to="/admin">Administración</Link>
              <Link
                className="dropdown-item"
                onClick={async () => {
                  try {
                    await signOut(auth);
                    navigate("/");
                  } catch (error) {
                    console.error("Error al cerrar sesión:", error);
                  }
                }}
              >
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;