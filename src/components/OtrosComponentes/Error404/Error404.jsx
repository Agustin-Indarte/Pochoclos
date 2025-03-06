import "./Error404.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


function Error404() {
  const navigate=useNavigate()
  return (
    <div className="error404 d-flex justify-content-center">
      <img className="Fondo404" src="/Cine.jpeg" alt="Error404" />
      <div className="contenido ">
      <h2 className="  text-danger fw-bold tituloErro404">¡Ups,se cayeron los pochoclos!</h2>
        <div className="d-flex gif-container">
        <DotLottieReact className="gif-pochoclos" src="https://lottie.host/aa26d55b-4ab4-440b-b2f1-2d649fac0b65/r2cBlilzpx.lottie" autoplay loop/>  
        </div> 
        <p className=" fw-bold  textoErro404" >la película no se encuentra disponible...</p>
        <p className=" fw-bold textoErro404 text-center">Mientras tanto, seguí disfrutando de otros pochoclos en la página principal.</p>
        <div className="">
          <Button className="btn btn-danger btnErro404" onClick={() => navigate("/home")}>Volver al Inicio</Button>
        </div>
      </div>
    </div>

  );
}

export default Error404;
