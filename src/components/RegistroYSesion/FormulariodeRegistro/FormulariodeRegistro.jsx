import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Container, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../../firebase';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .max(29, 'Máximo 30 caracteres')
    .required('Requerido'),

  username: Yup.string()
    .max(9, 'Máximo 10 caracteres')
    .required('Requerido'),

  password: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .max(15, 'Máximo 16 caracteres')
    .required('Requerido'),

  creditCard: Yup.string()
    .matches(/^\d{14,15}$/, 'Debe tener entre 14 y 15 dígitos y solo números')
    .required('Requerido'),

  securityCode: Yup.string()
    .matches(/^\d{3,4}$/, 'Debe tener entre 3 y 4 dígitos y solo números')
    .required('Requerido'),
});


const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, formikHelpers) => {
    const { setSubmitting, resetForm } = formikHelpers;

    try {

      const templateParams = {
        plan: values.plan,
        email: values.email,
        username: values.username
      };

      const serviceId = 'service_bfl0fcv';
      const templateId = 'template_2fjnzta';
      const userId = 'TmbimF1gBOKCCqIGU';
      console.log("Datos que se enviarán a EmailJS:", templateParams)
      await emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => {
          console.log("Email enviado correctamente:", response);
        })
        .catch(error => {
          console.error("Error enviando email:", error);
        });


      await createUserWithEmailAndPassword(auth, values.email, values.password);

      Swal.fire({
        icon: 'success',
        title: '¡Suscripción exitosa!',
        text: 'Te has suscrito correctamente. Revisa tu correo electrónico.',
      });

      resetForm();
      navigate('/login');

    } catch (error) {
      console.error("Error al suscribirse:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al suscribirte. Inténtalo nuevamente.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/login');
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al iniciar sesión con Google. Inténtalo nuevamente.',
      });
    }

  }

  return (
    <Container className="rounded" style={{ backgroundColor: '#CFCFCF', width: '100%', maxWidth: '350px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#D90429', fontWeight: 'bold', marginTop: "15px" }}>¡Elige tu plan pochoclero!</h1>
      <Formik
        initialValues={{
          plan: '',
          email: '',
          username: '',
          password: '',
          creditCard: '',
          securityCode: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Row className="justify-content-center mb-3">
              <Col md={12} className="text-center">
                <label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', marginRight: '1rem' }}>
                  <Field type="radio" name="plan" value="mensual" style={{ accentColor: '#AC011F', transform: 'scale(1.5)', marginRight: '0.5rem' }} />
                  Mensual
                </label>
                <label style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
                  <Field type="radio" name="plan" value="anual" style={{ accentColor: '#AC011F', transform: 'scale(1.5)', marginRight: '0.5rem' }} />
                  Anual
                </label>
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="email" type="email" placeholder="Email" maxLength={30} className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} />
                {touched.email && errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="username" placeholder="Usuario" maxLength={10} className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`} />
                {touched.username && errors.username ? <div className="invalid-feedback">{errors.username}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12}>
                <Field name="password" type="password" placeholder="Contraseña" maxLength={16} className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} />
                {touched.password && errors.password ? <div className="invalid-feedback">{errors.password}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col xs={12} sm={6}>
                <Field name="creditCard" placeholder="Tarjeta de Crédito" maxLength={16} className={`form-control ${touched.creditCard && errors.creditCard ? 'is-invalid' : ''}`} />
                {touched.creditCard && errors.creditCard ? <div className="invalid-feedback">{errors.creditCard}</div> : null}
              </Col>
              <Col xs={12} sm={6}>
                <Field type="password" name="securityCode" placeholder="Código de Seguridad" maxLength={4} className={`form-control ${touched.securityCode && errors.securityCode ? 'is-invalid' : ''}`} />
                {touched.securityCode && errors.securityCode ? <div className="invalid-feedback">{errors.securityCode}</div> : null}
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col md={12} className="text-center">
                <Button type="submit" variant="danger" className="w-100" style={{ border: '4px solid white' }}>
                  Suscribirse
                </Button>

                <Button variant="danger" className="w-100 mt-2" onClick={handleGoogleLogin} style={{ border: '4px solid white' }}>Suscribirse con Google</Button>
                <div style={{ marginTop: '1rem', textAlign: 'center', color: '#D90429' }}>
                  <p>
                    ¿Ya tienes una cuenta?  &nbsp;
                    <Link to="/login" style={{ color: '#AC011F', fontWeight: 'bold' }}>
                      Iniciá sesión
                    </Link>
                  </p>
                  <p className='mb-0'>
                    ¿No querés registrarte todavía? <br /> &nbsp;
                    <Link to="/home" style={{ color: '#AC011F', fontWeight: 'bold' }}>
                      Volver al inicio
                    </Link>
                  </p>
                </div>
              </Col>

            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;



