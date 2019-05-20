import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

const PatientDemographics = () => {
    return (
        <React.Fragment>
            <List>
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
                <ListItem>
                    <ListItemText secondary="This information was last updated 05/19/2019 at 2:47am from the CDW" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Age : 87" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Sex : M" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Weight : 5'8" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Height : 210" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="BMI : 25" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Drug : Rivaroxaban (Xarelto)" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Indication : Reduces the risk of stroke in nonvalvular atrial fibrillation" />
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