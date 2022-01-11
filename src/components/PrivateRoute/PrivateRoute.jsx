import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useCustomHook } from '../../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useCustomHook();
    return (
     
    )
}