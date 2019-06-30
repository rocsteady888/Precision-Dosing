import React, { useContext } from "react";
import PropTypes from "prop-types";

import SideNav from "./SideNav";
import Medications from "./Medications";

import { PatientContext } from "../contexts/PatientContext";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 340;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

function PermanentDrawer(props) {
  const { classes } = props;
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
                <Typography variant="subheading" color="inherit" noWrap>
                  ID: {currentPatient.id}
                </Typography>
                <Typography variant="subheading" color="inherit" noWrap>
                  PCP: {currentPatient.pcp ? currentPatient.pcp : "none"}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subheading" color="inherit" noWrap>
                  Allergies:
                </Typography>
                <Typography variant="subheading" color="inherit" noWrap>
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
        <Medications />
      </main>
    </div>
  );
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawer);
