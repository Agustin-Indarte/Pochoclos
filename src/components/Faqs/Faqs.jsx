import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faqs.css';

function PreguntasFrecuentes() {
  return (
    <div className="acordion">
      <h2>Preguntas Frecuentes</h2>
      <Accordion className='preguntas-frecuentes' defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué incluye Pochoclos?</Accordion.Header>
          <Accordion.Body>
            <p>Beneficios de la suscripción:</p>
            <ul>
              <li>Estrenos de películas, series originales y clásicos.</li>
              <li>Hasta 4 pantallas a la vez.</li>
              <li>Descarga de títulos, creación de perfiles y control parental.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cómo puedo pagar?</Accordion.Header>
          <Accordion.Body>
            <p>Aceptamos distintos medios de pago:</p>
            <ul>
              <li>Tarjeta de credito</li>
              <li>Tarjeta de debito</li>
              <li>Mercado Pago</li>
              <li>A traves de terceros (App Store de Apple, Mercado Libre y proovedores 
                locales de TV, telefonía e internet)</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Dónde puedo ver?</Accordion.Header>
          <Accordion.Body>
            <p>Podrás utilizar Pochoclos en tu dispositivo móvil, navegador web, consola de videojuegos, decodificador y Smart TV.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Dónde puedo ver?</Accordion.Header>
          <Accordion.Body>
            <p>Podrás utilizar Pochoclos en tu dispositivo móvil, navegador web, consola de videojuegos, decodificador y Smart TV.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Dónde puedo ver?</Accordion.Header>
          <Accordion.Body>
            <p>Podrás utilizar Pochoclos en tu dispositivo móvil, navegador web, consola de videojuegos, decodificador y Smart TV.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PreguntasFrecuentes;