import React, { useState, useEffect } from "react";
import "./ModalTrailer.css";

const ModalTrailer = ({ isOpen, onClose, movieId }) => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "e845bcd33e2571e0313cbf204469c4fc"; // Agrega tu API Key

  useEffect(() => {
    if (!isOpen || !movieId) return; // No cargar si el modal está cerrado o no hay movieId

    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
        );
        const data = await response.json();

        const trailerVideo = data.results.find((vid) => vid.type === "Trailer");

        setTrailer(trailerVideo ? trailerVideo.key : null);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el trailer:", error);
      }
    };

    fetchTrailer();
  }, [isOpen, movieId]);

  // ✅ Cierra el modal y detiene el tráiler
  const handleClose = () => {
    setTrailer(null); // 🔥 Elimina el iframe al cerrar
    onClose();
  };

  return (
    <div className={`modal-trailer ${isOpen ? "show" : ""}`} style={{ display: isOpen ? "block" : "none" }}>
      <div className="trailer">
        <button className="close-button" onClick={handleClose}>❌</button>
        {loading ? (
          <p className="text-white">Cargando trailer...</p>
        ) : trailer ? (
          <iframe className="video-Trailer"
            key={trailer} // 🔹 Esto forza la recarga del iframe cuando cambia el trailer
            src={`https://www.youtube.com/embed/${trailer}`}
            title="Trailer"
            width="800" 
            height="450"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-white">No hay trailer disponible.</p>
        )}
      </div>
    </div>
  );
};

export default ModalTrailer;