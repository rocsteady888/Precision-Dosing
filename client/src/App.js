import React from 'react';
import Dashboard from './Dashboard';
import { PatientProvider } from './contexts/PatientContext';
import { MedicationProvider } from './contexts/MedicationContext';
import './App.css';

function App() {
  return (
      <PatientProvider>
        <MedicationProvider>
          <Dashboard />
        </MedicationProvider>
      </PatientProvider>
  );
}

export default App;