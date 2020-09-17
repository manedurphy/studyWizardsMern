import React, { useEffect } from 'react';
import Intro from '../components/MidSection/Intro';
import HomeHighlights from '../components/MidSection/HomeHighlights';
import NewFooter from '../components/Footer/NewFooter';
import NewHomeBody from '../components/MidSection/NewHomeBody';
import { newHomePageElements } from '../data/NewHome/NewHome';
import { errorFalse } from '../features/auth/auth';
import { useDispatch } from 'react-redux';

const NewHome = () => {
  const { intro, body, highlights } = newHomePageElements;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(errorFalse());
  }, []);

  return (
    <>
      {/* Intro */}
      <Intro info={intro} />
      {/* Main */}
      <NewHomeBody info={body} />
      <HomeHighlights info={highlights} />
      <NewFooter />
    </>
  );
};

export default NewHome;
