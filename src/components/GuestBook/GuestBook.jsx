import React from 'react';
import { useState } from 'react';
import { useGuests } from '../../context/GuestContext';
import { useCustomHook } from '../../context/UserContext';
import { useHistory } from 'react-router-dom'


export const GuestBook = () => {
    const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const { guests, setGuests } = useGuests()
    const { user, setUser } = useCustomHook('user')
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        updateName()
    }

    const updateName = () => {
        if (!guestEntry) {
            return (
                setUser(name), setGuests([...guests, { name, message: guestEntry }]), setGuestEntry('')
                )

        }
    }

    const handleClick = () => {
      setUser('');
      history.push('/login');
    
    }


    const guestNameInput = (
  
        <>
          <label htmlFor="guestName">Guest Name</label>
      
          <input
              className="input"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
        
      </>
    )
  
  const msg = user ? `Thanks ${user}!` : 'Sign the Book!'
  
      return (
  
        <>
        <h1>{msg}</h1>
        <form onSubmit={handleSubmit}>
  
        {user ? null : guestNameInput}
          <label htmlFor='guestEntry'>Guest Entry</label>
          <textarea id="guestEntry" value={guestEntry} placeholder="Write something, if you like..." onChange={(e) => setGuestEntry(e.target.value)} />
          <button className="button" type="submit">
            Sign
          </button>
          {user && (
          <button onClick={handleClick}>Not {user} ?
          </button>
            )}
            
  
        </form>
        </>
      )
}