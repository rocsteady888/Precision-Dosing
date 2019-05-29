import React, { useState } from 'react';

export const MedicationContext = React.createContext({});

export const MedicationProvider = ({ children }) => {
  const [medication, setMedication] = useState('')
  return <MedicationContext.Provider value={ [medication, setMedication] }>
    {children}
  </MedicationContext.Provider>
}