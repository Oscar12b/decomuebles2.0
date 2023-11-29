import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import inicio from './inicio';
import cotiza from './cotizacion/cotiza';
import tienda from './tienda';
import carrito from './carrito';
import login from './login';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={inicio}/>
      <Route path='/cotiza' Component={cotiza}/>
      <Route path='/tienda' Component={tienda}/>
      <Route path='/carrito' Component={carrito}/>
      <Route path='/login' Component={login}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
