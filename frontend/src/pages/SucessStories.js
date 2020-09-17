import React, { useEffect } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import SuccessStories from '../components/MidSection/SucessStories';
import { successPageInfo } from '../data/SuccessStories/SuccessStories';
import { errorFalse } from '../features/auth/auth';
import { useDispatch } from 'react-redux';

const SucessStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorFalse());
  });
  return (
    <>
      <SuccessStories info={successPageInfo} />
      <NewFooter />
    </>
  );
};

export default SucessStories;
