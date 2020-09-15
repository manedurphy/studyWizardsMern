import React, { useEffect } from 'react';
import LeftSidebar from '../MidSection/LeftSidebar';
import { sampleBlog, navInfo } from '../../data/Blog/Blog';
import NavSidebar from '../Navbar/NavSidebar';
import NewNavbar from '../Navbar/NewNavbar';
import NewFooter from '../Footer/NewFooter';

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavSidebar />
      <NewNavbar info={navInfo} />
      <LeftSidebar info={sampleBlog} />
      <NewFooter />
    </>
  );
};

export default BlogPost;
