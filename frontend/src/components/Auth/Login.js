import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/auth';
import { Redirect, Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="container  login">
        <h1 className="text-center">Log In</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <div className="mt-5 text-center">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </section>
      {isAuthenticated && <Redirect to="/profile" />}
    </>
  );
};

export default Login;
