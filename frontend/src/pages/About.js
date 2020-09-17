import React, { useEffect } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import AboutSidebar from '../components/MidSection/AboutSidebar';
import { aboutPageElements } from '../data/About/About';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutSidebar info={aboutPageElements} />
      <NewFooter />
    </>
  );
};

export default About;
