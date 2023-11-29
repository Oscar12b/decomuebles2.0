import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from '@mui/joy/Modal';


const listItems = ['Elemento 1', 'Elemento 2', 'Elemento 3'];


const Navbar = () => {
  return (
    <header>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <Link to="/" className="logo btn">
        <span>Decomuebles</span>
      </Link>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/cotiza">Cotiza</Link>
      </nav>
      <div className="icons">
        <Link to="/login" className="icon-link">
          <FontAwesomeIcon icon={faUser} className="fas-fa-user" />
        </Link>
        <Link className="icon-link">
          <FontAwesomeIcon icon={faShoppingCart} className="fas-fa-shopping-cart" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
