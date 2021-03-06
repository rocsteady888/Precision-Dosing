import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const action = (
  <React.Fragment>
    <Button color="secondary" size="small" component={Link} to="/detailed-view">
      Learn More
    </Button>
  </React.Fragment>
);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1)
  }
}));

export default function DosingGuidance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent
        className={classes.snackbar}
        message={
          "Dosing guidance recommends 20 mg taken once daily for this patient based on BMI and Creatinine Clearance."
        }
        action={action}
      />
    </div>
  );
}
