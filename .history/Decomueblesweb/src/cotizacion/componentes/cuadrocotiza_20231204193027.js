import React from "react";
import Input from '@mui/joy/Input';
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  return (
    <div className="contenedor">

      <div className="cuadro_form">

      <Input placeholder="Escribe tu numero de telefono:" sx={{'&::before': {display: 'none',},'&:focus-within': {outline: '2px solid var(--Input-focusedHighlight)',outlineOffset: '2px',},}}/>
      <Input placeholder="Escribe tu nombre:" sx={{'&::before': {display: 'none',},'&:focus-within': {outline: '2px solid var(--Input-focusedHighlight)',outlineOffset: '2px',},}}/>
      <Input placeholder="Descripcion del mueble:" sx={{'&::before': {display: 'none',},'&:focus-within': {outline: '2px solid var(--Input-focusedHighlight)',outlineOffset: '2px',},}}/>

      </div>

    </div>
  );
};

export default CuadroCotiza;
