import React from 'react';
import Dashboard from './Dashboard';
import { PatientProvider } from './contexts/PatientContext';
import { UserProvider } from './contexts/UserContext';
import { PrecisionDosingProvider } from './contexts/PrecisionDosingContext';
import { MedicationProvider } from './contexts/MedicationContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <PatientProvider>
        <PrecisionDosingProvider>
          <MedicationProvider>
            <Dashboard />
          </MedicationProvider>
        </PrecisionDosingProvider>
      </PatientProvider>
    </UserProvider>
  );
}

export default App;