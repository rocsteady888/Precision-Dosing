import React, { useState } from 'react';

export const PatientContext = React.createContext({});

export const PatientProvider = ({ children }) => {
    const [patient, setPatient] = useState({})
    return (
        <PatientContext.Provider value={ [patient, setPatient] }>
            {children}
        </PatientContext.Provider>
    )
}