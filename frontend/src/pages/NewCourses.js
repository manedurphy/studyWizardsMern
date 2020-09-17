import React, { useEffect } from 'react';
import NewCoursesBody from '../components/MidSection/NewCoursesBody';
import NavSidebar from '../components/Navbar/NavSidebar';
import { info, paths } from '../data/NewCourses/NewCourses';
import { newCoursesPageElements } from '../data/NewCourses/NewCourses';

const NewCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavSidebar />
      <NewCoursesBody info={newCoursesPageElements} />
    </>
  );
};

export default NewCourses;
