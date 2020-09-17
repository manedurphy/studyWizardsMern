import React from 'react';
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

const SucessStories = () => {
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
