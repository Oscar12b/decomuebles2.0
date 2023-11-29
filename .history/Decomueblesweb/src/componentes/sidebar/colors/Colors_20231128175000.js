import "./Colors.css";
import Input from "../../components/Input";
import React, { useState, useEffect } from 'react';


function Category({ handleChange }) {
  const [materiales, setMateriales] = useState([]);

  useEffect(() => {
    fetch('https://decomuebles-api.up.railway.app/g/mostrarMateriales')
      .then(response => response.json())
      .then(data => {
        setMateriales(data);
      })
      .catch(error => console.error('Error al obtener los materiales:', error));
  }, []);

  return (
    <div>
      <h2 className="sidebar-title">Categorias</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Cualquiera
        </label>

        {materiales.map((material) => (
          <Input
            key={material.idMaterial}
            handleChange={handleChange}
            value={material.Material}
            title={material.Material}
            name="test"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
