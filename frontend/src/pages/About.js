import React from 'react';
import NewFooter from '../components/Footer/NewFooter';
import AboutSidebar from '../components/MidSection/AboutSidebar';
import NewNavbar from '../components/Navbar/NewNavbar';
import NavSidebar from '../components/Navbar/NavSidebar';
import { sidebar, navInfo } from '../data/About/About';

const About = () => {
  return (
    <>
      <NavSidebar />
      <NewNavbar info={navInfo} />
      <AboutSidebar info={sidebar} />
      <NewFooter />
    </>
  );
};

export default About;
