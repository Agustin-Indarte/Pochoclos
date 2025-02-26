import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth} from '../../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

// Esquema de validación con Yup
const schema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
});

function LoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Función para manejar el envío del formulario
  const handleLogin = async (data) => {
    setError("");
    try {
      // 🔹 Usamos signInWithEmailAndPassword en lugar de createUserWithEmailAndPassword
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/profile");
    } catch (error) {
      setError("Error al iniciar sesión: " + error.message);
    }
  };
  

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/profile");
    } catch (error) {
      setError("Error al iniciar sesión con Google: " + error.message);
    }
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center mt-0">
      <div id="container-login" className="form-container col-md-6 p-4 rounded">
        <div className="text-center text-danger mb-4">
          <img src="/src/images/logo-pochoclos.png" alt="20x" srcset="" className="mt-0" />
          <h1 className="fw-bold mt-0 ">Inicia sesión en Películas Pochoclos</h1>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>

        <Form id="form-login" onSubmit={handleSubmit(handleLogin)} className="text-center mt-0">
          <Form.Group className="">
            <Form.Label className="text-white fw-bold">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo"
              {...register("email")}
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              {...register("password")}
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </Form.Group>

          <div className="d-flex flex-column align-items-center">
            <Button type="submit" variant="primary" className="col-md-6 mb-3 btn btn-primary" onClick={handleSubmit}>
              Iniciar Sesión
            </Button>
            <Button variant="danger" className="col-md-6" onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} size="lg" /> Inicia sesión con Google
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default LoginForm;
