import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth } from '../../Firebase'; // Asegúrate de que la ruta de Firebase sea correcta
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
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Alinea al inicio superior
        minHeight: '100vh', // Ocupa toda la altura de la ventana
        paddingTop: '20px' // Ajusta el margen superior
      }}
    >
      <Card style={{ backgroundColor: "#CFCFCF", width: '300px', height: '450px' }} className="p-4 rounded">
        <div className="text-center text-danger mb-4">
          <h1 className="fw-bold mt-0" style={{ fontSize: '18px' }}>¡Bienvenido a tu cine en casa!</h1>
          <h2 style={{ fontSize: '16px', color: '#151931', marginTop: '14px' }}>Por favor, iniciá sesión para disfruta de tus series y películas favoritas.</h2>
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
            <Button type="submit" style={{ backgroundColor: '#D90429', borderColor: '#D90429' }} className="col-md-6 mb-3">
              Iniciar Sesión
            </Button>
            <Button style={{ backgroundColor: '#D90429', borderColor: '#D90429', width: '100%' }} onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} size="lg" /> Inicia sesión con Google
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginForm;

