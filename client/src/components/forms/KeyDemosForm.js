import React, { useState, useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext";
import {
  TextField,
  Divider,
  Button,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

export default function KeyDemosForm() {
  const [currentPatient] = useContext(PatientContext);
  const [showPatient, setShowPatient] = useState(false);

  const handleChange = name => event => {};

  return (
    <form noValidate autoComplete="off">
      <InputLabel
        style={{ marginTop: "25px" }}
        htmlFor="input-with-icon-adornment"
      >
        Patient Search
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
      <Button color="primary" onClick={() => setShowPatient(true)}>Search</Button>
      <Divider style={{ marginTop: "25px" }} />
      {showPatient ? (
        <List>
          <ListItem>
            <ListItemText secondary="This information was last updated 06/30/2019 at 2:47pm" />
            <Button color="primary">Update</Button>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={currentPatient.firstName + " " + currentPatient.lastName}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Age : " + currentPatient.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Sex : " + currentPatient.sex} />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Race : " + currentPatient.race} />
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
      ) : (
        <>
          <Typography style={{ marginTop: "25px" }}>
            Or enter key demographics manually
          </Typography>
          <TextField
            id="age"
            label="Age"
            onChange={handleChange}
            margin="normal"
          />
          <br />
          <TextField
            id="weight"
            label="Weight"
            onChange={handleChange}
            margin="normal"
          />
          <br />
          <TextField
            id="serumCreatinine"
            label="Serum Creatinine"
            onChange={handleChange}
            margin="normal"
          />
        </>
      )}
    </form>
  );
}
