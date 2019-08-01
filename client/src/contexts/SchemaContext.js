import React, { useState } from "react";

export const SchemaContext = React.createContext({});

export const defaultSchema = {
  medication: {
    aminoglycosideAntibiotics: {
      indications: {
        "anyOf": [
          {
            title: "gram negative infection",
            anyOf: [
              {
                title: "high dose extended interval",
                properties: []
              },
              {
                title: "conventional dosing",
                properties: []
              }
            ]
          },
          {
            title: "gram positive endocarditis",
            anyOf: [
              {
  
              }
            ]
          }
        ]
      }
    }
  }
};

export const SchemaProvider = ({ children }) => {
  const [currentSchema, setCurrentSchema] = useState(defaultSchema);
  return (
    <SchemaContext.Provider value={[currentSchema, setCurrentSchema]}>
      {children}
    </SchemaContext.Provider>
  );
};
