import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../componentes/principal/navbar';

import AboutUs from '..partecotizacion/cotizacion/componentes/AboutUs';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './cotiza.css';
//import de nextui

import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';


export default function Cotiza() {
  
  const [open, setOpen] = React.useState(false);

    return (
        <div className='contenerdor_main'>
          
                  <Navbar />

            <AboutUs />

        </div>
    );
}

Cotiza.propTypes = {
  open: PropTypes.bool
};
