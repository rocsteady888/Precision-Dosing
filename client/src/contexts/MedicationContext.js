import React, { useState } from 'react';

export const MedicationContext = React.createContext({});

export const defaultMedications = {
  currentMedications: [
      {
          id: '1',
          genericName: 'acetaminophen',
          brandName: 'Tylenol',
          dose: 500,
          doseUnits: 'mg',
          medicationForm: 'tablet',
          route: 'oral',
          endDate: null,
          frequency: 'Take 500mg by mouth every 4(four) hours as needed for fever',
          precisionDosingAvailable: false,
      },
      {
          id: '4',
          genericName: 'aspirin',
          brandName: null,
          dose: 81,
          doseUnits: 'mg',
          medicationForm: 'chewable tablet',
          route: 'oral',
          endDate: null,
          frequency: 'Take 1 tablet (81 mg total) by mouth once daily',
          precisionDosingAvailable: false,
      },
      {
          id: '3',
          genericName: 'atorvastatin',
          brandName: 'Lipitor',
          dose: 80,
          doseUnits: 'mg',
          medicationForm: 'tablet',
          route: 'oral',
          endDate: null,
          frequency: 'Take 1 tablet (80 mg total) by mouth once daily',
          precisionDosingAvailable: false,
      },
      {
          id: '5',
          genericName: 'bupropion',
          brandName: 'Wellbutrin XL',
          dose: 150,
          doseUnits: 'mg',
          medicationForm: 'XL tablet',
          route: 'oral',
          endDate: null,
          frequency: 'Take 1 tablet (150 mg) by mouth every day',
          precisionDosingAvailable: false,
      },
      {
          id: '6',
          genericName: 'metformin',
          brandName: 'Glucophage',
          dose: 500,
          doseUnits: 'mg',
          medicationForm: 'tablet',
          route: 'oral',
          endDate: null,
          frequency: 'Take 2 tablets (1000 mg) by mouth twice daily',
          precisionDosingAvailable: false,
      },
  ],
  lastUpdated: '05/19/2019 at 2:47am'
}

export const MedicationProvider = ({ children }) => {
  const [medication, setMedication] = useState(defaultMedications)
  return <MedicationContext.Provider value={ [medication, setMedication] }>
    {children}
  </MedicationContext.Provider>
}