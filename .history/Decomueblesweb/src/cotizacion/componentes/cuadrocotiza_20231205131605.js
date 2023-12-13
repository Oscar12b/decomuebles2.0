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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="contenedor">
      <Stepper activeStep={activeStep} orientation="vertical">
        {/* Tus Steps aquí */}
      </Stepper>

      <div>
        {activeStep === 0 && (
          <div className="cuadro_form">
            {/* Tus Inputs aquí */}
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
          disabled={activeStep === totalSteps - 1}
          onClick={handleNext}
        >
          {activeStep === totalSteps - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};

export default CuadroCotiza;
