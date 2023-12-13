import React from "react";
import Input from '@mui/joy/Input';

import Stepper from '@mui/material/Stepper';
import Step, { stepClasses } from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; // Add StepLabel import
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
              bottom:
                'calc(var(--StepIndicator-size) / 2 - var(--Step-connectorThickness) / 2)',
            },
          },
          [`& .${stepClasses.completed}::after`]: {
            bgcolor: 'primary.500',
          },
          [`& .${stepClasses.active} .${stepIndicatorClasses.root}`]: {
            borderColor: 'primary.500',
          },
          [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]: {
            color: 'primary.500',
            backgroundColor: 'transparent',
            backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
            backgroundSize: '7px 7px',
            backgroundPosition: 'center left',
          },
          [`& .${stepClasses.disabled} *`]: {
            color: 'neutral.plainDisabledColor',
          },
        }}
      >
        <Step
          completed
          orientation="vertical"
          indicator={
            <StepLabel icon={<CheckRoundedIcon />} /> // Replace StepIndicator with StepLabel
          }
        >
          <Typography
            variant="h4" // Replace level with variant
            fontWeight="bold" // Replace fontWeight with variant
            endAdornment={
              <Typography variant="subtitle2" fontWeight="normal"> // Replace fontSize with variant
                Preliminary
              </Typography>
            }
          >
            01
          </Typography>
        </Step>
        <Step
          completed
          orientation="vertical"
          indicator={
            <StepLabel icon={<CheckRoundedIcon />} /> // Replace StepIndicator with StepLabel
          }
        >
          <Typography
            variant="h4" // Replace level with variant
            fontWeight="bold" // Replace fontWeight with variant
            endAdornment={
              <Typography variant="subtitle2" fontWeight="normal"> // Replace fontSize with variant
                Your details
              </Typography>
            }
          >
            02
          </Typography>
        </Step>
        <Step
          active
          orientation="vertical"
          indicator={
            <StepLabel icon={<KeyboardArrowDownRoundedIcon />} /> // Replace StepIndicator with StepLabel
          }
        >
          <Typography
            variant="h4" // Replace level with variant
            fontWeight="bold" // Replace fontWeight with variant
            endAdornment={
              <Typography variant="subtitle2" fontWeight="normal"> // Replace fontSize with variant
                KYC
              </Typography>
            }
          >
            03
          </Typography>
        </Step>
        <Step
          disabled
          orientation="vertical"
          indicator={<StepLabel />} // Replace StepIndicator with StepLabel
        >
          <Typography
            variant="h4" // Replace level with variant
            fontWeight="bold" // Replace fontWeight with variant
            endAdornment={
              <Typography variant="subtitle2" fontWeight="normal"> // Replace fontSize with variant
                KYC
              </Typography>
            }
          >
            04
          </Typography>
        </Step>
      </Stepper>

      <div className="cuadro_form">
        <Input
          placeholder="Escribe tu numero de telefono:"
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
          placeholder="Descripcion de tu mueble:"
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
