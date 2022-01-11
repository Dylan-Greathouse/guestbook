import React from 'react'
import { useCustomHook } from '../../context/UserContext'
export const Header = () => {
    const { user } = useCustomHook()
    return (
        <header className='header'>
            {user ? (
        <p>
          Signing Guestbook as {user}
        </p>
      ) : (
        <p>Sign In</p>
      )}
        </header>
    )
}