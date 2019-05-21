import React from 'react';
import Dashboard from './Dashboard';
import { PatientProvider } from './contexts/PatientContext';
import './App.css';

function App() {
  return (
      <PatientProvider>
        <Dashboard />
      </PatientProvider>
  );
}

export default App;