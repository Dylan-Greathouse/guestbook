import React from 'react'
import { Header } from '../../components/Display/Display' 


export const Display = ({ children }) => {
    return (
        <div>
        <Header />
        <main>{children}</main>

        </div>
    )
}