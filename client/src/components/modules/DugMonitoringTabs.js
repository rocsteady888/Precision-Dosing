import React from 'react';
import DosingTable from './DosingTable';
import ReviewCard from './ReviewCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import pkpdImg from '../../images/Screen Shot 2019-05-19 at 7.44.39 PM.png';
import theraputicRangeImg from '../../images/Screen Shot 2019-05-19 at 7.09.10 PM.png';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Dosing Table" />
            <Tab label="PK / PD Charts" />
            <Tab label="Theraputic Range" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><DosingTable /></TabContainer>}
        {value === 1 && <TabContainer>
            <ReviewCard 
            title={"PK/PD Predictions"} 
            image={pkpdImg} 
            mediaTitle={"pkpd"} 
            />
          </TabContainer>
        }
        {value === 2 && <TabContainer>
            <ReviewCard
              title={"Theraputic Range"}
              image={theraputicRangeImg}
              mediaTitle={"theraputic range"}
            />
          </TabContainer>
        }
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);