import React from 'react';
import { UserProvider } from './context/UserContext';
import { Home } from './views/Home/Home';
import { Display } from './views/Display/Display'
import './App.css';

function App() {
  return (
    <>
    <UserProvider>
      <Display>
        <Home />
      </Display>
    </UserProvider>
    
    </>
  )
}

export default App;
