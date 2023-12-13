import React from "react";
import "./bannercotizacion.css";

export const ParteCotizacion = () => {
  return (
    <div className="contenedor">
      <div className="foto1" style={{ width: "40%", borderRadius: "2rem", boxShadow : "10px 10px 20px 0px rgba(0, 0, 0, 0.5)" }}>
        <img className="imagenes" src="/banner1cotiza.png" alt="Banner 1" />
      </div>
      <div className="foto2" style={{ width: "35%", borderRadius: "2.8rem", boxShadow : "1px 1px 15px 0px rgba(0, 0, 0, 0.5)" }}>
        <img className="imagenes" src="/bsnner2cotizacion.png" alt="Banner 2" />
      </div>
      <div className="fototexto" style={{ width: "25%" }}>
        <img className="imagentext" src="/cotiza_banner1.jpg" alt="Banner 3" />
        <h1 className="Textopro">La mejor calidad que te esperas</h1>
      </div>
    </div>
  );
};

export default ParteCotizacion;
