import React, { useContext } from 'react';
import { PatientContext } from '../contexts/PatientContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

const PatientDemographics = props => {
    const [currentPatient, setCurrentPatient] = useContext(PatientContext);
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
                <Divider />
                <ListItem>
                    <ListItemText primary="Drug : Rivaroxaban (Xarelto)" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Indication : Reduces the risk of ischemic stroke in nonvalvular atrial fibrillation" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Inpatient Dose : 20 mg taken once daily" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Outpatient Dose : 20 mg taken once daily" />
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default PatientDemographics;