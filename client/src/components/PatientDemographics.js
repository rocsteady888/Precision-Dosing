import React, { useContext } from 'react';
import { PatientContext } from '../contexts/PatientContext';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Search from '@material-ui/icons/Search';

const PatientDemographics = props => {
    const [currentPatient] = useContext(PatientContext);
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    <FormControl>
                        <InputLabel htmlFor="input-with-icon-adornment">Patient Search</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </ListItem>
                <ListItem>
                    <ListItemText secondary="This information was last updated 05/19/2019 at 2:47am" />
                    <Button variant="primary" color="primary" >Update</Button>
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Age : " + currentPatient.age} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Sex : " + currentPatient.sex} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Weight : " + currentPatient.weight} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Height : " + currentPatient.height} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"BMI : " + currentPatient.bmi} />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" style={{ margin: '15px',}} >Current Medications</Typography>
            <List>
                {currentPatient.currentMedications.map(medication => {
                    return (
                        <React.Fragment>
                            <ListItem>
                                <ListItemText 
                                    primary={medication.genericName + ',  ' + medication.brandName + '™'} 
                                    secondary={'indication: ' + medication.indication}
                                />
                            </ListItem>
                            <ListItem>
                                {
                                    medication.precisionDosingAvailable
                                        ?
                                        <Button fullwidth style={{ color: 'white', background: 'linear-gradient(to right bottom, #ef6c00, #ff4081)' }}>
                                            Precision Dosing
                                        </Button>
                                        :
                                        null
                                } 
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}
                )}
            </List>
        </React.Fragment>
    )
}

export default PatientDemographics;