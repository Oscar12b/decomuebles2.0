import React from "react";
import "./cuadrocotiza.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="div" />
        <div className="rectangle-2" />
        <div className="text-wrapper">Escribe tu nombre:</div>
        <div className="text-wrapper-2">Descripcion de tu mueble</div>
      </div>
    </div>
  );
};

export default Frame;