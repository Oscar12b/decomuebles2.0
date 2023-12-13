import React, { useState } from "react";
import Input from '@mui/joy/Input';
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  // Estados para cada campo de input
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcionMueble, setDescripcionMueble] = useState('');

  return (
    <div className="contenedor">
      <div className="cuadro_form">
        <Input 
          placeholder="Escribe tu número de teléfono:"
          value={numeroTelefono}
          onChange={(e) => setNumeroTelefono(e.target.value)}
          sx={{
            '&::before': {display: 'none'},
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
        <Input 
          placeholder="Escribe tu nombre:"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          sx={{
            '&::before': {display: 'none'},
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
        <Input 
          placeholder="Descripción del mueble:"
          value={descripcionMueble}
          onChange={(e) => setDescripcionMueble(e.target.value)}
          sx={{
            '&::before': {display: 'none'},
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CuadroCotiza;
