import React from 'react'
import { useContext, createContext, useState } from 'react'

const GuestContext = createContext()

const GuestProvider = ({ children }) => {
  const [guests, setGuests] = useState([])

    return ( <GuestContext.Provider value={{ guests, setGuests }}>{ children }</GuestContext.Provider>)
}

const useGuests = () => {
  
  const context = useContext(GuestContext) 

  if (context === undefined) {
    throw new Error('useGuests must be inside of EntryContext Provider')
  }

  return context
}

export { GuestProvider, useGuests }