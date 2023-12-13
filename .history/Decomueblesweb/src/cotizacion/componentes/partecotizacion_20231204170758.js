import React from "react";
import "./bannercotizacion.css";

export const ParteCotizacion = () => {
  return (
    <div className="contenedor">
      <div className="foto1" style={{ borderRadius: "2rem", boxShadow : "5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
        <img className="imagenes" src="/banner1cotiza.png" alt="Banner 1" />
      </div>
      <div className="foto2" style={{ borderRadius: "2.8rem", boxShadow : "2px 0.5px 10px rgba(0, 0, 0, 0.3)" }}>
        <img className="imagenes" src="/bsnner2cotizacion.png" alt="Banner 2" />
      </div>
      <div className="fototexto">

        <img style = {{borderRadius : "1 rem"}} src="/cotiza_banner1.jpg" alt="Banner 3" />

        <div className="texto_cotizacion">
        <h1 >Algunos de nuestros proyectos</h1>
        <p >calidad y durabilidad en nuestros proyectos.</p>
        </div>


      </div>
    </div>
  );
};

export default ParteCotizacion;
