import Button from "../components/Button";
import "./Recommended.css";

import React, { useState, useEffect } from 'react';

const Recommended = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://decomuebles-api.up.railway.app/g/mostrarcategoria')
      .then(response => response.json())
      .then(data => setCategories(data), console.log("data "))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      <div>
        <h2 className="recommended-title">Recomendados</h2>
        <div className="recommended-flex">
          {}
          <Button onClickHandler={handleClick} value="" title="All Products" />
          {}
          {categories.map(category => (
            <Button
              key={category.id}
              onClickHandler={handleClick}
              value={category.name} 
              title={category.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;
