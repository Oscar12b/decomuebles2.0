import React from "react";
import "./bannercotizacion.css";

export const AboutUs = () => {
  return (
    <div className="contenedor">
      <div className="foto1"> <img className="imagenes" src="/banner1cotiza.png" alt="Banner 1" /></div>
      <div className="foto2"> <img className="imagenes" src="/bsnner2cotizacion.png" alt="Banner 2" /></div>
      <div className="fototexto">
        {/* No es necesario un div vacío para la imagen si no se utiliza */}
        <h1 className="Textopro">La mejor calidad que te esperas</h1>
      </div>
    </div>
  );
};

export default AboutUs;
