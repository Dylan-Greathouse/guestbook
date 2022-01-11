import React from 'react'

export const Guest = ({ guest: { name, message } }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
    )
}
export default Guest;