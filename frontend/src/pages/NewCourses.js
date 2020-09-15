import React from 'react';
import Highlights from '../components/MidSection/Highlights';
import NewNavbar from '../components/Navbar/NewNavbar';
import NavSidebar from '../components/Navbar/NavSidebar';
import { info, paths, navInfo } from '../data/NewCourses/NewCourses';

const NewCourses = () => {
  return (
    <>
      <NavSidebar />
      <NewNavbar info={navInfo} />
      <Highlights info={info} paths={paths} />
    </>
  );
};

export default NewCourses;
