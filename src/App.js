import React from 'react';

import { Home } from './views/Home/Home';
import { Display } from './views/Display/Display'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import Auth from './views/Auth/Auth'
import './App.css';

function App() {
  return (
    <>
  
      <Router>
        <Display>
            <Switch>
            <Route path='/login'>
              <Auth />
            </Route>
            <PrivateRoute path='/'>
              <Home />
            </PrivateRoute>
            </Switch>



        </Display>

      </Router>
  
    
    </>
  )
}

export default App;
