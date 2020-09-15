import React, { useEffect } from 'react';
import LeftSidebar from '../components/MidSection/LeftSidebar';
import NewNavbar from '../components/Navbar/NewNavbar';
import NewFooter from '../components/Footer/NewFooter';
import { sidebar, navInfo } from '../data/YelpReviews/YelpReviews';

const YelpReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NewNavbar info={navInfo} />
      <LeftSidebar info={sidebar} />
      <NewFooter />
    </>
  );
};

export default YelpReviews;
