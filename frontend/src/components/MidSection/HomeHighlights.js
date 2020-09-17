import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = ({ info }) => {
  const { tag, images } = info;
  return (
    <>
      <section id="highlights" className="wrapper style3">
        <div className="title">{tag}</div>
        <div className="container">
          <div className="row aln-center">
            {images.map((el, index) => {
              return (
                <div className="col-4 col-12-medium" key={index}>
                  <section className="highlight">
                    <Link to={el.path} className="image featured">
                      <img src={el.img} alt="link" />
                    </Link>
                    <h3>
                      <Link to={el.path} style={{ color: '#60479c' }}>
                        {el.link}
                      </Link>
                    </h3>
                    <p>{el.p}</p>
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
