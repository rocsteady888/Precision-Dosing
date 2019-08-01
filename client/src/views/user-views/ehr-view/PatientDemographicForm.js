import React, { Fragment } from "react";

import DosingGuidanceTable from "../../../components/tables/DosingGuidanceTable";
import DosingGuidanceSnackBar from "./DosingGuidanceSnackbar";
import KeyDemosForm from '../../../components/forms/KeyDemosForm'
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Medication", "Indication", "Key Demographics"];
}

const handleChange = name => event => {};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <Fragment>
          <TextField
            id="medicationName"
            label="Medication Name"
            onChange={handleChange}
            margin="normal"
          />
        </Fragment>
      );
    case 1:
      return (
        <TextField
          id="indication"
          label="Indication"
          onChange={handleChange}
          margin="normal"
        />
      );
    case 2:
      return (
        <KeyDemosForm />
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function PatientDemoForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Divider />
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
            <DosingGuidanceTable />
            <DosingGuidanceSnackBar />
          </div>
        ) : (
          <div>
            <Typography component={"span"} className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
