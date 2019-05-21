import React, { useState } from 'react';

export const PatientContext = React.createContext({});

export const defaultPatient = {
        mrn: '1',
        age: '87',
        sex: 'M',
        weight: '210',
        height: "5'8",
        bmi: '39.1',
}

export const PatientProvider = ({ children }) => {
    const [currentPatient, setCurrentPatient] = useState(defaultPatient);
    return <PatientContext.Provider value={ [currentPatient, setCurrentPatient] }>
            { children }
        </PatientContext.Provider>
}