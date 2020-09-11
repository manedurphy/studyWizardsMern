import React from 'react';
import Banner from '../Banner/Banner';

const Hero = (props) => {
  const { heading, desc, btn1, btn2, id, courses } = props;

  return (
    <div id={id} className="view">
      <div className="container-fluid courses-banner">
        <div className="row justify-content-center">
          <div className="col-6">
            <Banner
              heading={heading}
              desc={desc}
              btn1={btn1}
              btn2={btn2}
              courses={courses}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
