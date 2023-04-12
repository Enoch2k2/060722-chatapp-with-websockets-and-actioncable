import React, { useState } from 'react'
import { signup } from '../../actions/users';

import { useDispatch } from 'react-redux';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup({ username, password }))
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) } />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={ password } onChange={ e => setPassword(e.target.value) } />
        </div>

        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup