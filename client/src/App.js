import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./views/content/Dashboard";
import DetailedView from "./views/user-views/ehr-view/DetailedView";
import { PatientProvider } from "./contexts/PatientContext";
import { UserProvider } from "./contexts/UserContext";
import { PrecisionDosingProvider } from "./contexts/PrecisionDosingContext";
import { MedicationProvider } from "./contexts/MedicationContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <PatientProvider>
          <PrecisionDosingProvider>
            <MedicationProvider>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/detailed-view" component={DetailedView} />
            </MedicationProvider>
          </PrecisionDosingProvider>
        </PatientProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
