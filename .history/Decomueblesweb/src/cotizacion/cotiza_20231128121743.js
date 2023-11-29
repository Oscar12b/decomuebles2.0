import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../componentes/principal/navbar';

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

            <div className='contenedor_banner'>
                <div className='banner_cotiza'>
                    <h1 className='titulo_cotiza'>Cotiza tu mueble</h1>
                </div>
            </div>

            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>

        </div>
    );
}

Cotiza.propTypes = {
  open: PropTypes.bool
};
