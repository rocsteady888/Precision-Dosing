import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

export default function DropDownMenu() {
  const [selectedMedication, setSelectedMedication] = React.useState({
    medication: ""
  });

  const availableMedications = [
    {
      id: "1",
      genericName: "amikacin",
      value: "Amikacin",
      brandNames: ["Amikin"]
    },
    {
      id: "2",
      genericName: "gentamicin",
      value: "Gentamicin",
      brandNames: ["Garamycin", "G-Mycin", "Jenamicin"]
    },
    {
      id: "3",
      genericName: "kanamycin",
      value: "Kanamycin",
      brandNames: ["Kantrex"]
    },
    {
      id: "4",
      genericName: "neomycin",
      brandNames: ["Mycifradin", "Myciguent"]
    },
    {
      id: "5",
      genericName: "netilmicin",
      brandNames: ["Netromycin"]
    },
    {
      id: "6",
      genericName: "paromomycin",
      brandNames: []
    },
    {
      id: "7",
      genericName: "streptomycin",
      brandNames: []
    },
    {
      id: "8",
      genericName: "tobramycin",
      brandNames: ["Nebcin"]
    }
  ];

  const handleChange = (e, { name, value }) => {
    setSelectedMedication(value);
    console.log(selectedMedication);
  };

  return (
    <FormControl style={{ minWidth: "150px" }}>
      <InputLabel htmlFor="select-medication">Select Medication</InputLabel>
      <Select
        value={selectedMedication}
        name="medication"
        onChange={handleChange}
      >
        {availableMedications.map(medication => (
          <MenuItem key={medication.id}>
            {medication.genericName.charAt(0).toUpperCase() +
              medication.genericName.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
