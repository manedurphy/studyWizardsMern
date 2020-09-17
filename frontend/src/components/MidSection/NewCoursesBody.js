import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = ({ info }) => {
  return (
    <>
      <section id="highlights" className="wrapper style3">
        <div className="title">{info.heading}</div>
        <div className="container">
          <div className="row aln-center">
            {info.links.map((el, index) => {
              return (
                <div className="col-4 col-12-medium" key={index}>
                  <section className="highlight">
                    <Link to={el.path} className="image featured">
                      <img src={el.img} alt="course" />
                    </Link>
                    <h3>
                      <Link to={el.path} style={{ color: '#60479c' }}>
                        {el.heading}
                      </Link>
                    </h3>
                    <ul className="actions">
                      <li>
                        <Link
                          to={el.path}
                          className="button style1"
                          style={{ background: '#60479c' }}
                        >
                          Learn More
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
