import React from "react";
import "./bannercotizacion.css";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="div">
        <div className="overlap-group">
          <div className="algunos-de-nuestros">
            Algunos de <br />
            nuestros proyectos
          </div>
          <p className="text-wrapper">calidad y durabilidad en nuestros proyectos</p>
        </div>
        <div className="text-wrapper-2">Quieres hacer una cotizacion?</div>
        <img className="image" alt="Image" src="../cotizacion/imagenes/banner1cotiza.png" />
        <img className="img" alt="Image" src="banner1cotiza.png" />
        <img className="rectangle" alt="Rectangle" src="cotiza_banner1.jpg" />
        <div className="rectangle-2" />
      </div>
    </div>
  );
};

export default AboutUs;