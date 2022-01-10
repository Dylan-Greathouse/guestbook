import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomHook } from '../../context/UserContext';

export default function Login() {
  const history = useNavigate();
  const location = useLocation();
  const { setUser } = useCustomHook();
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      userInput === process.env.AUTH_USERNAME && passwordInput === process.env.AUTH_PASSWORD
    ) {
      setUser(userInput);
      history.replace(from);
    } else {
      setError('Wrong username/password combination');
    }
  };

  return (
    <div>
      <form 
      onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="user-input">Email</label>
        <input
          name="user-input"
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <label htmlFor="password-input">Password</label>
        <input
          name="password"
          id="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
      {error ? <p>{error}</p> : <></>}
    </div>
     );
}