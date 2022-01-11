import React from 'react';
import { UserProvider } from './context/UserContext';
import { Home } from './views/Home/Home';
import { Display } from './views/Display/Display'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import Auth from './views/Auth/Auth'
import './App.css';

function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Display>
       
            <Route path='/login'>
              <Auth />
            </Route>
            <PrivateRoute path='/'>
              <Home />
            </PrivateRoute>



        </Display>

      </Router>
    </UserProvider>
    
    </>
  )
}

export default App;
