import React, { useState, createContext } from 'react'

export const PrecisionDosingContext = createContext({});

export const PrecisionDosingProvider = ({children}) => {
const [showDosing, setShowDosing] = useState(false)

return <PrecisionDosingContext.Provider value={ [showDosing, setShowDosing] }>
        {children}
    </PrecisionDosingContext.Provider>
}