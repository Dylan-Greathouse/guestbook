import React from 'react';
import { useState } from 'react';
import { useGuests } from '../../context/GuestContext';
import { useCustomHook } from '../../context/UserContext';

export const GuestBook = () => {
    const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const { guests, setGuests } = useGuests()
    const { user, setUser } = useCustomHook('user')


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
  
  const msg = user ? `Thanks for the note ${user}.` : 'Please Sign the Book!'
  
      return (
  
        <>
        <h1>{msg}</h1>
        <form onSubmit={handleSubmit}>
  
        {user ? null : guestNameInput}
          <label htmlFor='guestEntry'>Guest Entry</label>
          <textarea id="guestEntry" value={guestEntry} placeholder="Your Note!" onChange={(e) => setGuestEntry(e.target.value)} />
          <button className="button" type="submit">
            Sign
          </button>
          {user && (
          <button>Not {user} ?
          </button>
            )}
            
  
        </form>
        </>
      )
}