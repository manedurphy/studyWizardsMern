import React, { useEffect } from 'react';
import ReviewsSidebar from '../components/MidSection/ReviewsSidebar';
import NewNavbar from '../components/Navbar/NewNavbar';
import NewFooter from '../components/Footer/NewFooter';
import { sidebar, navInfo } from '../data/YelpReviews/YelpReviews';
import { errorFalse } from '../features/auth/auth';
import { useDispatch } from 'react-redux';

const YelpReviews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(errorFalse());
  }, []);
  return (
    <>
      <NewNavbar info={navInfo} />
      <ReviewsSidebar info={sidebar} />
      <NewFooter />
    </>
  );
};

export default YelpReviews;
