import React, { useState } from 'react';
import { register } from '../../features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom';

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { errors, isAuthenticated } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = { name, email, password, password2 };
    dispatch(register(body, history));
  };

  return (
    <>
      <div className="container register">
        <h1 className="text-center ">Tutor Registration</h1>
        {errors.length > 0 &&
          errors.map((item, index) => {
            return (
              <div className="user-message-error" key={index}>
                {item.msg}
              </div>
            );
          })}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => changeHandler(e)}
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
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-control"
              placeholder="Confirm password"
              value={password2}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <div className="mt-5">
            <p>
              Have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
      {isAuthenticated && <Redirect to="/" />}
    </>
  );
};

export default withRouter(Register);
