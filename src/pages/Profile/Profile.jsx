import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './profile.css';

function Profile() {
  const [profiles, setProfiles] = useState([]);
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
  }, []);

  return (
<Container className="vh-100 d-flex flex-column justify-content-center align-items-center text-black">
  
  

  <h1 className="mb-4 fw-bold text-white">¿Quién está viendo?</h1>

  <Row className="d-flex flex-wrap justify-content-center align-items-center gap-4 bg-light rounded-2 p-4">
    
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center">
      <div className="profile-circle" onClick={() => navigate("/")}>
        <Image
          src="src/images/6073874.png"
          roundedCircle
          width={100}
          height={100}
          className="profile-img"
          alt="Mi perfil"
        />
      </div>
      <p className="mt-2 text-center">Mi perfil</p>
    </Col>

    {/* Perfiles guardados en Firestore */}
    {profiles.map((profile) => (
      <Col key={profile.id} xs={6} sm={4} md={3} lg="auto" className="text-center">
        <div className="profile-circle" onClick={() => navigate("/")}>
          <Image
            src={profile.photoURL || "src/images/default-profile.png"}
            roundedCircle
            width={100}
            height={100}
            className="profile-img"
            alt={profile.name}
          />
        </div>
        <p className="mt-2 text-center">{profile.name}</p>
      </Col>
    ))}

    {/* Perfil de niños */}
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center">
      <div className="profile-circle add-profile" onClick={() => navigate("/add-profile")}>
        <div className="icon-circle">
          <img src="src/images/15371680.png" alt="Niños" className="profile-img" />
        </div>
      </div>
      <p className="mt-2 text-center">Niños</p>
    </Col>

    {/* Botón para agregar un nuevo perfil */}
    <Col xs={6} sm={4} md={3} lg="auto" className="text-center">
      <div className="profile-circle add-profile" onClick={() => navigate("/add-profile")}>
        <div className="icon-circle">
          <img src="src/images/1177577.png" alt="Añadir perfil" className="profile-img" />
        </div>
      </div>
      <p className="mt-2 text-center">Añadir perfil</p>
    </Col>
  </Row>

  {/* Botón de Cerrar Sesión */}
  <Button
    variant="danger"
    className="mt-4"
    onClick={async () => {
      await signOut(auth);
      navigate("/Login");
    }}
  >
    Cerrar Sesión
  </Button>
</Container>
 );
}

export default Profile;