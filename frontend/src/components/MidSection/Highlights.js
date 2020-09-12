import React from 'react';

const Highlights = ({ info }) => {
  const { heading, img1, img2, img3, desc1, desc2, desc3 } = info;
  return (
    <section id="highlights" className="wrapper style3">
      <div className="title">{heading}</div>
      <div className="container">
        <div className="row aln-center">
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <img src={img1} alt="" />
              </a>
              <h3>
                <a href="#">Aliquam diam consequat</a>
              </h3>
              <p>{desc1}</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <img src={img2} alt="" />
              </a>
              <h3>
                <a href="#">Nisl adipiscing sed lorem</a>
              </h3>
              <p>{desc2}</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <img src={img3} alt="" />
              </a>
              <h3>
                <a href="#">Mattis tempus lorem</a>
              </h3>
              <p>{desc3}</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
