import React from 'react';
import './NavSidebar.scss';

const NavSidebar = () => {
  return (
    <>
      <i className="fa fa-bars fa-2x burger"></i>
      <nav className="nav-sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavSidebar;
