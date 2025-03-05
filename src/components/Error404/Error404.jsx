import "./Error404.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "react-bootstrap";

function Error404() {
  return (
    <div className="error404 d-flex justify-content-center">
      <div className="contenido mt-3">
      <h2 className="mt-4 fs-1 text-danger fw-bold tituloErro404">¡Ups,se cayeron los pochoclos!</h2>
        <div className="d-flex gif-container">
        <DotLottieReact className="gif-pochoclos" src="https://lottie.host/aa26d55b-4ab4-440b-b2f1-2d649fac0b65/r2cBlilzpx.lottie" autoplay loop/>
        <DotLottieReact className="gif-404" src="https://lottie.host/0f7a690d-84e1-4de1-96d7-bb1bf0d64c5d/radjVQ4a36.lottie"autoplay/>
        
        </div> 
        <p className="fs-4 fw-bold mt-4 textoErro404" >la película no se encuentra disponible...</p>
        <p className="fs-4 fw-bold textoErro404">Mientras tanto, seguí disfrutando de otros pochoclos en la página principal.</p>
        <div className="">
          <Button className="btn btn-danger btnErro404" href="/Home">Volver al Inicio</Button>
        </div>
      </div>
    </div>

  );
}

export default Error404;
