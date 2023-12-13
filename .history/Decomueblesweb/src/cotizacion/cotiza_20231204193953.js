import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../componentes/principal/navbar';

import AboutUs from '../cotizacion/componentes/partecotizacion';
//import CuadroCotiza from '../cotizacion/componentes/cuadrocotiza';
import Footer from '../componentes/principal/Footer';
import './cotiza.css';
//import de nextui


export default function Cotiza() {
  
    return (
        <div className='contenerdor_main'>
          
            <Navbar/>

            <AboutUs />
                    
            <Footer />

        </div>
    );
}

Cotiza.propTypes = {
  open: PropTypes.bool
};
