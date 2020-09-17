import React, { useEffect } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import NewNavbar from '../components/Navbar/NewNavbar';
import NavSidebar from '../components/Navbar/NavSidebar';
import SuccessStories from '../components/MidSection/SucessStories';
import { navInfo } from '../data/Navbar/Navbar';
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
      <NavSidebar />
      <NewNavbar info={navInfo} />
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
