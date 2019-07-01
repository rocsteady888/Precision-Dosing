import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
});

const PatientSearchModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };
  const { classes } = props;

    return (
      <div>
        <Button color='secondary' onClick={handleOpen}>Preview Changes</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              You are about to make changes to the patient's EHR
            </Typography>
            <Typography variant="" id="simple-modal-description">
              The patient is currently taking Rivaroxaban 20 mg once daily
            </Typography>
            <Typography variant="" id="simple-modal-description">
              You want to change the dose to 15 mg once daily
            </Typography>
            <Button color='secondary' onClick={handleClose}>Confirm</Button>
            <Button color='primary' onClick={handleClose}>Cancel</Button>
          </div>
        </Modal>
      </div>
    );
}

PatientSearchModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const PatientSearchModalWrapped = withStyles(styles)(PatientSearchModal);

export default PatientSearchModalWrapped;