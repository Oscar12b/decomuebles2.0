import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../componentes/principal/navbar';

import AboutUs from '../cotizacion/componentes/partecotizacion';
import CuadroCotiza from '../cotizacion/componentes/cuadrocotiza';
import Footer from '../componentes/principal/Footer';
import './cotiza.css';
//import de nextui


export default function Cotiza() {
  
  const [open, setOpen] = React.useState(false);

    return (
        <div className='contenerdor_main'>
          
            <Navbar/>

            <AboutUs />
          
            <CuadroCotiza/>
        
            <Footer />

        </div>
    );
}

Cotiza.propTypes = {
  open: PropTypes.bool
};
