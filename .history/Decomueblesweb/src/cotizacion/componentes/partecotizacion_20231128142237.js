import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

export const AboutUs = () => {
  return (
    <div className="about-us container">
      <div className="row">
        <div className="col-12 col-md-6"> {/* Columna para texto o contenido */}
          <div className="algunos-de-nuestros">
            Algunos de <br /> nuestros proyectos
          </div>
          <p className="text-wrapper">
            Calidad y durabilidad en nuestros proyectos
          </p>
        </div>
        <div className="col-12 col-md-6"> {/* Columna para imágenes */}
          <img className="img-fluid" alt="Imagen" src="banner1cotiza.png" />
          {/* Más imágenes o contenido aquí */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
