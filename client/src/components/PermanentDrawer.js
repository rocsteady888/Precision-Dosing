import React, { useContext } from "react";

import SideNav from "./SideNav";
import MedicationTabs from "./MedicationTabs";

import { PatientContext } from "../contexts/PatientContext";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  card: {
    minWidth: 275,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginTop: 100,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function PermanentDrawer() {
  const classes = useStyles();
  const [currentPatient] = useContext(PatientContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography variant="h6" color="inherit" noWrap>
                EHR
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              xs={12}
            >
              <Grid item xs={2}>
                <Typography variant="h5" color="inherit" noWrap>
                  {currentPatient.lastName}, {currentPatient.firstName}
                </Typography>
                <Typography variant="h6" color="inherit" noWrap>
                  {currentPatient.sex}, {currentPatient.age} y.o.{" "}
                  {currentPatient.dob}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit" noWrap>
                  ID: {currentPatient.id}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit" noWrap>
                  PCP: {currentPatient.pcp ? currentPatient.pcp : "none"}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit" noWrap>
                  Allergies:
                </Typography>
                <Typography variant="subtitle1" color="inherit" noWrap>
                  {currentPatient.allergies ? currentPatient.allergies : "NKDA"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <SideNav />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MedicationTabs />
      </main>
    </div>
  );
}
export default PermanentDrawer;
