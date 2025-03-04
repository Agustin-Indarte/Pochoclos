import "./Error404.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "react-bootstrap";

function Error404() {
  return (
    <div className="error404">
      <div className="pantalla-blanca">
        <div className="contenido">
        <h1 className="texto">¡Ups! Ocurrió un problema</h1>
        <h2 className="texto">Estamos trabajando en ello</h2>
        <DotLottieReact className="gif" src="https://lottie.host/aa26d55b-4ab4-440b-b2f1-2d649fac0b65/r2cBlilzpx.lottie" loop autoplay />
        </div>
      </div>
        <div className="btn">
        <Button href="/" className="boton-inicio">Volver al Inicio</Button>
        </div>
    </div>

  );
}

export default Error404;
