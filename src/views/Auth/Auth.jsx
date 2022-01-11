import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useCustomHook } from '../../context/UserContext';
import { useForm } from '../../hooks/UseForm';


export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const { setUser } = useCustomHook();
  const { formState, handleFormState } = useForm({ email: '', password: '' }); 
  
  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formState.email === process.env.REACT_APP_AUTH_USERNAME && formState.password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(formState.email);
      history.replace(from.pathname);
    } else {
      setError('Wrong username/password combination');
    }
  };

  return (
    <div>
      <form 
      onSubmit={handleLogin}>
        <label htmlFor="user-input">Email</label>
        <input
          name="email"
          id="user-input"
          type='email'
          value={formState.email}
          onChange={handleFormState}
        />
        <label htmlFor="password-input">Password</label>
        <input
          name="password"
          id="password"
          type='password'
          value={formState.password}
          onChange={handleFormState}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
      {error ? <p>{error}</p> : <></>}
    </div>
     );
}