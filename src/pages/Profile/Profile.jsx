import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faChild } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './profile.css';

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [userPhoto, setUserPhoto] = useState(""); // Foto de usuario autenticado
  const navigate = useNavigate();

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

    // Escuchar cambios en el usuario autenticado
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserPhoto(user.photoURL || "https://via.placeholder.com/100"); // Foto por defecto si no tiene una
      }
    });

  }, []);

  return (
    <Container className="Seccion-Perfiles vh-100 d-flex flex-column justify-content-center align-items-center text-black ">
  <img src="/src/images/logo-pochoclos.png" className="img-fluid mb-0" />
  <h1 className="mb-4 fw-bold text-white">¿Quién está viendo?</h1>

  <Row className="d-flex flex-wrap justify-content-center gap-4 bg-light rounded-2 ">
    {/* Perfil del usuario autenticado */}
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center">
      <div className="profile-circle" onClick={() => navigate ("/home")} >
        <Image
          src= "src/images/6073874.png" 
          roundedCircle
          width={120}
          height={120}
          className="profile-img"
        />
        <p className="mt-2 fw-bold">Mi perfil</p>
      </div>
    </Col>

    {/* Perfiles guardados en Firestore */}
    {profiles.map((profile) => (
      <Col key={profile.id} xs={6} sm={4} md={3} lg="auto" className="text-center">
        <div className="profile-circle" onClick={() => navigate ("/")}>
        <Image
            src={profile.photoURL || "/src/images/default-profile.png"}
            roundedCircle
            width={120}
            height={120}
            className="profile-img"
/>

          <p className="mt-2 fw-bold">{profile.name}</p>
        </div>
      </Col>
    ))}

    {/* Perfil de niños */}
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center">
      <div className="profile-circle add-profile" onClick={() => navigate("/add-profile")}>
        <div className="icon-circle">
        <img src="/src/images/15371680.png" alt="Añadir perfil" className="profile-img" />
        </div>
        <div>
        <p className="mt-2">Niños</p>
        </div>
        
        
      </div>
    </Col>

    {/* Botón para agregar un nuevo perfil */}
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center ">
      <div className="profile-circle add-profile " onClick={() => navigate("/add-profile")}>
        <div className="icon-circle ">
        <img src="/src/images/1177577.png" alt="Añadir perfil" className="profile-img " />
        </div>
        <div>
        <p className="mt-2">Añadir perfil</p>
        </div>
        
        
      </div>
    </Col>
  </Row>

  <Button 
  variant="danger" 
  className="mt-4" 
  onClick={async () => {
    await signOut(auth);
    navigate("/Login");
  }}
>
  Cerrar Sesion
</Button>
</Container>


  );
}

export default Profile;
