import React, { useState } from "react";
import "./bannercotizacion.css";

export const ParteCotizacion = () => {
  const imagenes = [
    "/banner1cotiza.png", // Imagen 1
    "/fotomueble.png",    // Imagen 2
    "/fotomueble2.png",   // Imagen 3
    // ... puedes agregar más imágenes aquí
  ];

  const [indiceActual, setIndiceActual] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  const cambiarImagen = () => {
    setFadingOut(true);
    setTimeout(() => {
      setFadingOut(false);
      setIndiceActual((indiceActual + 1) % imagenes.length);
    }, 500); // Asegúrate de que este tiempo coincida con la duración de la animación CSS
  };

  return (
    <div className="contenedor">
      <div className="foto1" style={{ borderRadius: "2rem", boxShadow : "5px 5px 10px rgba(0, 0, 0, 0.3)" }} onClick={cambiarImagen}>
        <img className={`imagenes ${fadingOut ? 'fading-out' : ''}`} src={imagenes[indiceActual]} alt="Banner" />
      </div>
      <div className="foto2" style={{ borderRadius: "2.8rem", boxShadow : "2px 0.5px 10px rgba(0, 0, 0, 0.3)" }}>
        <img className="imagenes" src="/bsnner2cotizacion.png" alt="Banner 2" />
      </div>
      <div className="fototexto">
        <img style={{ borderRadius: "1rem" }} src="/cotiza_banner1.jpg" alt="Banner 3" />
        <div className="texto_cotizacion">
          <h1>Algunos de nuestros proyectos</h1>
          <p>Calidad y durabilidad en nuestros proyectos.</p>
        </div>
      </div>
    </div>
  );
};

export default ParteCotizacion;
