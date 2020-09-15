import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/studyWizards/kate-logo.PNG';
import './NavSidebar.scss';

const NavSidebar = () => {
  const [click, setClick] = useState(false);

  const toggleNavSidebar = () => setClick(!click);
  return (
    <>
      <i className="fa fa-bars fa-2x burger" onClick={toggleNavSidebar}></i>
      <nav className={click ? 'nav-sidebar active' : 'nav-sidebar'}>
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="links-container">
          <ul>
            <li>
              <Link to="/" onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setClick(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" onClick={() => setClick(false)}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setClick(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="login" onClick={() => setClick(false)}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavSidebar;
