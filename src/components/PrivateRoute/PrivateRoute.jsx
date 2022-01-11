import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useCustomHook } from '../../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useCustomHook();
    return (
        <>
        <Route {...rest} render={( privateRouteProps ) => 
            user ? children : <Redirect to={{pathname:'/login', 
            state: { from: privateRouteProps.location } }} /> } />
        </>
    )
}