import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = ({ info, paths }) => {
  const {
    heading,
    img1,
    img2,
    img3,
    desc1,
    desc2,
    desc3,
    link1,
    link2,
    link3,
  } = info;

  const { path1, path2, path3 } = paths;

  return (
    <>
      <section id="highlights" className="wrapper style3">
        <div className="title">{heading}</div>
        <div className="container">
          <div className="row aln-center">
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <Link to={path1} className="image featured">
                  <img src={img1} alt="" />
                </Link>
                <h3>
                  <Link to={path1} style={{ color: '#60479c' }}>
                    {link1}
                  </Link>
                </h3>
                <p>{desc1}</p>
                <ul className="actions">
                  <li>
                    <Link
                      to={path1}
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Learn More
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <Link to={path2} className="image featured">
                  <img src={img2} alt="" />
                </Link>
                <h3>
                  <Link to={path2} style={{ color: '#60479c' }}>
                    {link2}
                  </Link>
                </h3>
                <p>{desc2}</p>
                <ul className="actions">
                  <li>
                    <Link
                      to={path2}
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Learn More
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <Link to={path3} className="image featured">
                  <img src={img3} alt="" />
                </Link>
                <h3>
                  <Link to={path3} style={{ color: '#60479c' }}>
                    {link3}
                  </Link>
                </h3>
                <p>{desc3}</p>
                <ul className="actions">
                  <li>
                    <Link
                      to={path3}
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Learn More
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
