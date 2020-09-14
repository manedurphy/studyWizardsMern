import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/auth';
import Dropdown from '../Dropdown/Dropdown';

const NewNavbar = ({ info }) => {
  const [dropdown, setDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { heading, subheading } = info;

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <section id="header" className="wrapper">
        <div id="logo">
          <h1>
            <Link to="/">{heading}</Link>
          </h1>
          <p>{subheading}</p>
        </div>
        <nav id="nav">
          <ul>
            <li className="current">
              <Link to="/">Home</Link>
            </li>
            <li
              className="opener"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/about">About Us</Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            )}
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
