import React from "react";
import Input from '@mui/joy/Input';
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  return (
    <div className="contenedor">

      <div className="cuadro_form">

      <Input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Escribe tu numero de telefono:" slotProps={{ input: { component: NumericFormatAdapter,},}}/>
      <Input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Escribe tu nombre:" slotProps={{ input: { component: NumericFormatAdapter,},}}/>
      <Input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Descripcion de tu mueble:" slotProps={{ input: { component: NumericFormatAdapter,},}}/>  

      </div>

    </div>
  );
};

export default CuadroCotiza;
