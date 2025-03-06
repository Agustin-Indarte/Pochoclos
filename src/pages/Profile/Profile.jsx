import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from 'firebase/firestore';
import { db,auth } from '../../firebase'
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
    <div className="seccion-perfil  vh-100  d-flex flex-column justify-content-center align-items-center text-black">


      <img src="/logo-pochoclos.png" alt="Logo" className="img-fluid logo-img" />

      <h2 className="my-3 fw-bold text-white">¿Quién está viendo?</h2>

      <Row className="d-flex flex-xl-wrap-reverse justify-content-center align-items-center my-2">

        <Col xs={4} sm={4} md={3} lg="auto" className="text-center">
          <article className="profile-circle" onClick={() => navigate("/home")}>
            <img
              src="public\Perfil.png"
              className="profile-img mx"
              alt="Mi perfil"
            />
          </article>
          <p className="mt-2 text-center text-light fw-bold">Team2</p>
        </Col>

        {/* Perfiles guardados en Firestore */}
        {profiles.map((profile) => (
          <Col key={profile.id} xs={4} sm={4} md={3} lg="auto" className="text-center">
            <article className="profile-circle" onClick={() => navigate("/home")}>
              <img
                src={profile.photoURL || "src/images/default-profile.png"}
                roundedCircle
                width={100}
                height={100}
                className="profile-img"
                alt={profile.name}
              />
            </article>
            <p className="mt-2 text-center text-light fw-bold">{profile.name}</p>
          </Col>
        ))}

        {/* Perfil de niños */}
        <Col xs={4} sm={4} md={3} lg="auto" className="text-center">
          <article className="profile-circle add-profile" onClick={() => navigate("*")}>

            <img
              src="public\15371680.png"
              className="niños-img"
              alt="Niños"
            />

          </article>
          <p className="mt-2 text-center text-light fw-bold">Niños</p>
        </Col>

        {/* Botón para agregar un nuevo perfil */}
        <Col xs={4} sm={4} md={3} lg="auto" className="text-center">
          <article className="profile-circle add-profile" onClick={() => navigate("*")}>
            <img src="public\1177577.png" alt="Añadir perfil" className="añadir-img" />
          </article>
          <p className="mt-2 text-center text-light fw-bold">Añadir perfil</p>
        </Col>
      </Row>

      {/* Botón de Cerrar Sesión */}
      <Button
        variant="danger"
        className="btn-cerrar-sesion mt-2"
        onClick={async () => {
          await signOut(auth);
          navigate("/");
        }}
      >
        Cerrar Sesión
      </Button>
    </div>
  );
}

export default Profile;