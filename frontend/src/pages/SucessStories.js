import React, { useEffect } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import SuccessStories from '../components/MidSection/SucessStories';
import {
  successPageInfo,
  stories,
} from '../components/../data/SuccessStories/SuccessStories';
import { blogLinks, blogPostPageElements } from '../data/Blog/Blog';
import { errorFalse } from '../features/auth/auth';
import { useDispatch } from 'react-redux';

const SucessStories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorFalse());
  });
  return (
    <>
      <SuccessStories
        blogElements={blogPostPageElements}
        blogLinks={blogLinks}
        success={successPageInfo}
        stories={stories}
      />
      <NewFooter />
    </>
  );
};

export default SucessStories;
