import React, { useEffect } from 'react';
import AboutSidebar from '../components/MidSection/AboutSidebar';
import NewFooter from '../components/Footer/NewFooter';
import { useDispatch } from 'react-redux';
import { errorFalse } from '../features/auth/auth';
import { aboutPageElements } from '../data/About/About';

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(errorFalse());
  }, []);
  return (
    <>
      <AboutSidebar info={aboutPageElements} />
      <NewFooter />
    </>
  );
};

export default About;
