import React from "react";
import Input from '@mui/joy/Input';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import "./cuadrocotiza.css";

const CuadroCotiza = () => {
  return (
    <div className="contenedor">
      <Stepper
        sx={{
          width: '100%',
          [`& .${stepClasses.root}`]: {
            flexDirection: 'column-reverse',
            '&:after': {
              top: 'unset',
              bottom: 'calc(var(--StepIndicator-size) / 2 - var(--Step-connectorThickness) / 2)',
            },
          },
          [`& .${stepClasses.completed}::after`]: {
            bgcolor: 'primary.500',
          },
          [`& .${stepClasses.disabled} *`]: {
            color: 'neutral.plainDisabledColor',
          },
        }}
      >
        {/* Primer paso */}
        <Step
          completed
          orientation="vertical"
          indicator={<StepLabel icon={<CheckRoundedIcon />} />}
        >
          <Typography variant="h4" fontWeight="bold">
            01
            <Typography variant="subtitle2" fontWeight="normal">
              Preliminary
            </Typography>
          </Typography>
        </Step>

        {/* Segundo paso */}
        <Step
          completed
          orientation="vertical"
          indicator={<StepLabel icon={<CheckRoundedIcon />} />}
        >
          <Typography variant="h4" fontWeight="bold">
            02
            <Typography variant="subtitle2" fontWeight="normal">
              Your details
            </Typography>
          </Typography>
        </Step>

        {/* Tercer paso */}
        <Step
          active
          orientation="vertical"
          indicator={<StepLabel icon={<KeyboardArrowDownRoundedIcon />} />}
        >
          <Typography variant="h4" fontWeight="bold">
            03
            <Typography variant="subtitle2" fontWeight="normal">
              KYC
            </Typography>
          </Typography>
        </Step>

        {/* Cuarto paso */}
        <Step
          disabled
          orientation="vertical"
          indicator={<StepLabel />}
        >
          <Typography variant="h4" fontWeight="bold">
            04
            <Typography variant="subtitle2" fontWeight="normal">
              Finish
            </Typography>
          </Typography>
        </Step>
      </Stepper>

      <div className="cuadro_form">
        <Input
          placeholder="Escribe tu número de teléfono:"
          sx={{
            '&::before': { display: 'none' },
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
        <Input
          placeholder="Escribe tu nombre:"
          sx={{
            '&::before': { display: 'none' },
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
        <Input
          placeholder="Descripción de tu mueble:"
          sx={{
            '&::before': { display: 'none' },
            '&:focus-within': {
              outline: '2px solid var(--Input-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CuadroCotiza;
