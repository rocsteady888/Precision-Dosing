import React, { useState } from "react";

export const PatientContext = React.createContext({});

export const defaultPatient = {
  id: "0001",
  firstName: "Paul",
  lastName: "Mckinney",
  dob: "04/01/1932",
  age: "87",
  sex: "Male",
  race: "white",
  weight: "210",
  height: "5'8",
  bmi: "39.1",
  lastUpdated: "05/19/2019 at 2:47am"
};

export const PatientProvider = ({ children }) => {
  const [currentPatient, setCurrentPatient] = useState(defaultPatient);
  return (
    <PatientContext.Provider value={[currentPatient, setCurrentPatient]}>
      {children}
    </PatientContext.Provider>
  );
};
