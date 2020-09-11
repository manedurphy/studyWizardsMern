import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import banner from '../data/bannerData/Banner';

const Home = () => {
  const { heading, desc, btn1, btn2 } = banner.welcome;
  return (
    <>
      <div id="intro" className="view">
        <div className="container-fluid welcome-banner">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-xl-5 col-md-8 ">
              <Banner heading={heading} desc={desc} btn1={btn1} btn2={btn2} />
            </div>
            <div className="col-xl-5 col-md-2"></div>
          </div>
        </div>
      </div>
      <footer className="container-fluid bg-dark text-white text-center ">
        <h2 className="text-capitalize">our services</h2>
        <div className="spacer bg-light mb-5"></div>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
