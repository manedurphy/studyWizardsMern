import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/auth';

const NewNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
      <section id="header" className="wrapper">
        <div id="logo">
          <h1>
            <Link to="/">Study Wizards Private Tutoring</Link>
          </h1>
          <p>Personalized For Success</p>
        </div>
        <nav id="nav">
          <ul>
            <li className="current">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to="/login" onClick={() => dispatch(logout())}>
                  Sign Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NewNavbar;
