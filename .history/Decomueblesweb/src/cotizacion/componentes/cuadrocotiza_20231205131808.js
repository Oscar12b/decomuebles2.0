import React, { useState } from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, totalSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div className="contenedor">
      <Stepper activeStep={activeStep} orientation="vertical">
        {/* Paso 1 */}
        <Step>
          <StepLabel icon={<CheckRoundedIcon />}>Preliminary</StepLabel>
        </Step>

        {/* Paso 2 */}
        <Step>
          <StepLabel icon={<CheckRoundedIcon />}>Your details</StepLabel>
        </Step>

        {/* Paso 3 */}
        <Step>
          <StepLabel icon={<KeyboardArrowDownRoundedIcon />}>KYC</StepLabel>
        </Step>

        {/* Paso 4 */}
        <Step>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>

      <div>
        {activeStep === 0 && (
          <div className="cuadro_form">
            <Input placeholder="Escribe tu número de teléfono:" />
            <Input placeholder="Escribe tu nombre:" />
            <Input placeholder="Descripción de tu mueble:" />
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
