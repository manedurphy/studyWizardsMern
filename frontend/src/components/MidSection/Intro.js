import React from 'react';
import { Link } from 'react-router-dom';

const Intro = ({ info }) => {
  const { tag, p1, p2, p3, link } = info;
  return (
    <>
      <section id="intro" className="wrapper style1">
        <div className="title">{tag}</div>
        <div className="container">
          <p className="style1">{p1}</p>
          <p className="style2">{p2}</p>
          <p className="style3">{p3}</p>
          <ul className="actions">
            <li>
              <Link to="/all-tutors" className="button style3 large">
                {link}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Intro;
