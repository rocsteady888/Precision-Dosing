import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { UserContext } from './contexts/UserContext';

import Landing from './Landing'
import PermanentDrawer from './components/PermanentDrawer'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const FullWidthGrid = props => {
  const { classes } = props
  const [user] = useContext(UserContext)

  return (
    <div className={classes.root}>
    {
      user
      ?
      <PermanentDrawer />
      :
      <Landing />
    }
      
    </div>
  )
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullWidthGrid)