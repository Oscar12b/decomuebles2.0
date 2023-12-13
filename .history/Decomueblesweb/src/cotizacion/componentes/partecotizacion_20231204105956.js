import React from "react";
import "./bannercotizacion.css";

export const AboutUs = () => {
  return (
    <div className="contenedor">
      <div className="foto1"> <image className = "imagenes" src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fama.es%2Finicio-es&psig=AOvVaw1O42-XzqXvbUMFOFUWdByz&ust=1701795531744000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiuqcOg9oIDFQAAAAAdAAAAABAE"></image></div>
      <div className="foto2"> <image className = "imagenes" src = "./banner2cotizacion.png"></image></div>

      <div className="fototexto">
        <div className="foto3" />
        <h1 className="Textopro">La mejor calidad que te esperas</h1>
      </div>
    </div>
  );
};

export default AboutUs;