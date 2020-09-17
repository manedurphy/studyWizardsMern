import React, { useEffect } from 'react';
import ReviewsSidebar from '../components/MidSection/ReviewsSidebar';
import NewFooter from '../components/Footer/NewFooter';
import { reviewsPageElements } from '../data/YelpReviews/YelpReviews';
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
      <ReviewsSidebar info={reviewsPageElements} />
      <NewFooter />
    </>
  );
};

export default YelpReviews;
