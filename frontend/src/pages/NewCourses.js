import React, { useEffect } from 'react';
import NewCoursesBody from '../components/MidSection/NewCoursesBody';
import NavSidebar from '../components/Navbar/NavSidebar';
import { newCoursesPageElements } from '../data/NewCourses/NewCourses';
import { errorFalse } from '../features/auth/auth';
import { useDispatch } from 'react-redux';

const NewCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(errorFalse());
  }, []);

  return (
    <>
      <NavSidebar />
      <NewCoursesBody info={newCoursesPageElements} />
    </>
  );
};

export default NewCourses;
