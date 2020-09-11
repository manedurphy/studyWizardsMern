import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaFacebook,
  FaGooglePlus,
  FaYelp,
  FaUser,
  FaArrowCircleRight,
} from 'react-icons/fa';
import logo2 from '../../assets/images/main-logo.png';
import { useSelector } from 'react-redux';
import { logout } from '../../features/auth/auth';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <img src={logo2} alt="wizard" className="logo" />

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse row" id="navbarMenu">
        <ul className="navbar-nav mr-auto col-lg-6 col-md-9 justify-content-around">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/about" className="nav-link">
              about us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link">
              courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              contact us
            </Link>
          </li>
        </ul>
        <ul className="social-media ml-auto col-lg-2 col-md-3 d-none d-sm-none d-md-flex justify-content-around text-white">
          <li>
            <a
              href="https://www.facebook.com/Study-Wizards-Tutoring-572207589510910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <FaFacebook size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/search?q=study+wizards+tutoring+google+reviews&*&lrd=0x808e3497e52fe473:0xddcb817cb831628,3,5&cad=h#lrd=0x808e3497e52fe473:0xddcb817cb831628,1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <FaGooglePlus size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.yelp.com/biz/study-wizards-tutoring-san-jose-2?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <FaYelp size={22} />
            </a>
          </li>
          <li>
            <Link
              to={!isAuthenticated ? '/login' : '/profile'}
              className="login-btn text-light"
            >
              <FaUser size={22} />
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link
                to="/login"
                className="login-btn text-light"
                onClick={() => dispatch(logout())}
              >
                <FaArrowCircleRight size={22} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
