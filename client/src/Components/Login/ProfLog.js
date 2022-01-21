import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginProf } from '../../Redux/actions/auth';

const ProfLog = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const submitLogin = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
      dispatch(
        loginProf(
          {
            email: data.get("email"),
            password: data.get("password"),
          },
          history
        )
      );
    };
    return (
      <div>
        <h1>LOGIN PROF</h1>
        <form onSubmit={submitLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
          />
          <a href="/" className="link">
            Forgot your password?
          </a>
          <button className="btn">Login</button>
        </form>
      </div>
    );
}

export default ProfLog
