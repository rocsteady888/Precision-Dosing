import React from 'react';

import Navbar from './components/navigation/Navbar';
import PatientDemoForm from './components/web-view/PatientDemoForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demoFormContainer: {
    marginTop: 50
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Navbar />
      <Grid container justify="center" alignItems="center" spacing={3} className={classes.demoFormContainer} >
        <Grid item xs={12} sm={6}>
          <PatientDemoForm />
        </Grid>
      </Grid>
    </div>
  );
}