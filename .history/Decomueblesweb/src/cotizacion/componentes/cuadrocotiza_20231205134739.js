import React, { useState } from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'; // Asegúrate de que esta línea está añadida
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; // Y esta también, si vas a usarla
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [telefono, setTelefono] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const totalSteps = 4;

  const handleNext = () => {
    if(validarpaso){setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, totalSteps - 1));}
    else{
      alert('Por favor, llene todos los campos');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const validarpaso = () => {

    if(activeStep === 0){
      if(telefono === '' || nombre === '' || descripcion === ''){
        return false;
      }
      else{
        return true;
      }
    }
    if(activeStep === 1){

    }

    return true;
  }

  

  return (
    <div className="contenedor_pasos">

      <div className="cont_stepper">
      <Stepper activeStep={activeStep}>
        {['Paso 1', 'Paso 2', 'Paso 3', 'Terminado'].map((label, index) => (
          <Step key={label}>
            <StepLabel
              icon={activeStep > index ? <CheckRoundedIcon /> : index + 1}
              sx={{
                '& .MuiStepLabel-label': {
                  color: activeStep >= index ? 'primary.main' : 'inherit',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
    </div> 

        {activeStep === 0 && (
          <div className="cuadro_form">
            <Input placeholder="Escribe tu número de teléfono:" value = {telefono} onChange={(e=> setTelefono(e.target.value))}/>
            <Input placeholder="Escribe tu nombre:" value = {nombre} onChange={(e => setNombre(e.target.value))}/>
            <Input placeholder="Descripción de tu mueble:" value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
          </div>
        )}

        {activeStep === 1 && <div className="cont_paso2">Contenido del Paso 2</div>}
        {activeStep === 2 && <div className="cont_paso3">Contenido del Paso 3</div>}
        {activeStep === 3 && <div className="cont_paso4">Contenido del Paso 4</div>}
      </div>

      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Atrás
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
        >
          {activeStep === totalSteps - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};

export default CuadroCotiza;
