import React from "react";
import "./bannercotizacion.css";

export const AboutUs = () => {
  return (
    <div className="contenedor">
      <div className="foto1"> <image className = "imagenes" src = "/Muebles.png"></image></div>
      <div className="foto2"> <image className = "imagenes" src = "./banner2cotizacion.png"></image></div>

      <div className="fototexto">
        <div className="foto3" />
        <h1 className="Textopro">La mejor calidad que te esperas</h1>
      </div>
    </div>
  );
};

export default AboutUs;