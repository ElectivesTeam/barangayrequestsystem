import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@material-ui/core/Typography';

import Request from '../navigation/Requests.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0px 10px 0px',
    margin: '0px 20px 0px 20px'
  },
  step_label_root: {
    fontSize: '10px',
  }

}));

const steps = ['Select a document', 'Fill out the required information', 'Review requests'];

const HorizontalLinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNextStepper = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBackStepper = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className={classes.root}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps} >
                  <StepLabel  {...labelProps}>
                    <Typography variant='subtitle2'>{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </div>
      

      <Request handleNextStepper={handleNextStepper} handleBackStepper={handleBackStepper} />
    </>
    
  );
}

export default HorizontalLinearStepper
