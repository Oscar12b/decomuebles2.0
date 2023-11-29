import React, { useState, useEffect } from 'react';
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  const [colores, setColores] = useState([]);

  useEffect(() => {
    fetch('https://decomuebles-api.up.railway.app/g/mostrarcolores')
      .then(response => response.json())
      .then(data => {
        setColores(data);
      })
      .catch(error => console.error('Error al obtener los colores:', error));
  }, []);

  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colores</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          Cualquiera
        </label>

        {colores.map((color) => (
          <Input
            key={color.idColor}
            handleChange={handleChange}
            value={color.Color}
            title={color.Color}
            name="test1"
            color={color.Color.toLowerCase()}
          />
        ))}
      </div>
    </>
  );
};

export default Colors;
