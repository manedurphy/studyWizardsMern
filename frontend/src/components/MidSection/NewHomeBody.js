import React from 'react';
import img from '../../assets/themeImages/pic01.jpg';
import { Link } from 'react-router-dom';

const NewHomeBody = ({ info }) => {
  const { howItWorks, links, tag } = info;
  return (
    <section id="main" className="wrapper style2">
      <div className="title" style={{ color: '#60479c' }}>
        {tag}
      </div>
      <div className="container">
        <img src={img} alt="" className="image featured" />

        {/* Features */}
        <section id="features">
          <header className="style1">
            <h2 style={{ color: '#60479c' }}>
              We'll Find A Great Tutor For You!
            </h2>
            <p>How Study Wizards Will Work with You and Your Child</p>
          </header>
          <div className="feature-list">
            <div className="row">
              {howItWorks.map((el, index) => {
                return (
                  <div className="col-6 col-12-medium" key={index}>
                    <section>
                      <h3 className={el.class}>{el.heading}</h3>
                      <p>{el.p}</p>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="actions special">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={link.class}
                    style={link.style}
                  >
                    {link.p}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default NewHomeBody;
