import React from 'react';
import Dashboard from './Dashboard';
import { PatientProvider } from './contexts/PatientContext';
import { PrecisionDosingProvider } from './contexts/PrecisionDosingContext';
import { MedicationProvider } from './contexts/MedicationContext';
import './App.css';

function App() {
  return (
      <PatientProvider>
        <PrecisionDosingProvider>
          <MedicationProvider>
            <Dashboard />
          </MedicationProvider>
        </PrecisionDosingProvider>
      </PatientProvider>
  );
}

export default App;