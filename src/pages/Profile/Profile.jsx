import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faChild } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './profile.css';

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  // Obtener perfiles desde Firebase
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "profiles"));
        const profilesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProfiles(profilesData);
      } catch (error) {
        console.error("Error al obtener perfiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  // Manejar selección de perfil
  const handleProfileSelect = (profile) => {
    console.log("Perfil seleccionado:", profile);
    navigate("/home");
  };

  // Manejar agregar perfil
  const handleAddProfile = () => {
    navigate("/add-profile"); // Cambiado a la ruta correcta
  };

  // Cerrar sesión
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada con éxito");
      navigate("/login");
    } catch (error) {
      console.log("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <Container id="container-profile" className="vh-100 d-flex flex-column justify-content-center align-items-center text-black container-fluid">
      
      <img src="/src/images/logo-pochoclos.png" className="img-fluid mb-0 " />
      <h1 className="mb-4 fw-bold text-white ">¿Quién está viendo?</h1>

      <Row className="justify-content-center mb-5">
        {profiles.map((profile) => (
          <Col key={profile.id} xs={6} md={3} className="text-center">
            <div className="profile-circle" onClick={() => handleProfileSelect(profile)}>
              <Image
                src={profile.photoURL || "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                roundedCircle
                width={100}
                height={100}
              />
              <p className="mt-2 fw-bold">{profile.name}</p>
            </div>
          </Col>
        ))}

        {/* Perfil de niños */}
        <Col xs={6} md={3} className="text-center">
          <div className="profile-circle add-profile" onClick={handleAddProfile}>
            <FontAwesomeIcon icon={faChild} size="3x" />
            <p className="mt-2">Niños</p>
          </div>
        </Col>

        {/* Botón para agregar un nuevo perfil */}
        <Col xs={6} md={3} className="text-center">
          <div className="profile-circle add-profile" onClick={handleAddProfile}>
            <FontAwesomeIcon icon={faPlusCircle} size="3x" />
            <p className="mt-2">Añadir perfil</p>
          </div>
        </Col>
      </Row>

      <Button variant="danger" className="mt-1" onClick={logout}>
        Cerrar sesión
      </Button>
    </Container>
  );
}

export default Profile;
