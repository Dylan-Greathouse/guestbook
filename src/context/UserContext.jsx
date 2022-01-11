import React from 'react'
import { useContext, createContext, useState }from 'react'

    const UserContext = createContext()

    const UserProvider = ({ children }) => {
        const [user, setUser] = useState('')
        return (<UserContext.Provider value={{user, setUser}}>{ children }</UserContext.Provider>)
    }

    const useCustomHook = () => {
        const context = useContext(UserContext)
        
        if (context === undefined) {
            throw new Error('useCustomHook needs to be called inside of UserContext Provider')
        }
        return context
    }

   
export { UserProvider, useCustomHook }