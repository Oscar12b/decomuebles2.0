import React, { useState } from "react";
import "./bannercotizacion.css";

export const ParteCotizacion = () => {
  const imagenes = [
    "/banner1cotiza.png", // Imagen 1
    "/fotomueble.png",      // Imagen 2
    "/fotomueble2.png",      // Imagen 3
  ];

  const [indiceActual, setIndiceActual] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  const cambiarImagen = () => {
    setFadingOut(true);
    setTimeout(() => {
      setFadingOut(false);
      setIndiceActual((indiceActual + 1) % imagenes.length);
    }, 500); // Este tiempo debe coincidir con la duración de la animación
  };

  return (
    <div className="contenedor">
      <div className="foto1" style={{ borderRadius: "2rem", boxShadow : "5px 5px 10px rgba(0, 0, 0, 0.3)" }} onClick={cambiarImagen}>
        <img className={`imagenes ${fadingOut ? 'fading-out' : ''}`} src={imagenes[indiceActual]} alt="Banner" />
      </div>
      {/* Resto del componente */}
    </div>
  );
};

export default ParteCotizacion;
