import React, { useContext } from "react";

import { MedicationContext } from "../../../contexts/MedicationContext";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const MedicationList = () => {
  const [defaultMedications] = useContext(MedicationContext);
  return (
    <React.Fragment>
      <List>
        {defaultMedications.currentMedications.map(medication => {
          return (
            <div key={medication.id}>
              <ListItem>
                <ListItemText
                  primary={medication.genericName}
                  secondary={
                    medication.brandName
                      ? "Commonly known as: " + medication.brandName
                      : null
                  }
                />
                <ListItemText
                  primary={medication.frequency}
                />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default MedicationList;
