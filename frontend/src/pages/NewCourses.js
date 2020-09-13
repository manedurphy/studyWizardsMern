import React from 'react';
import Highlights from '../components/MidSection/Highlights';
import algImg from '../assets/studyWizards/course-images/alg2.webp';
import reading from '../assets/studyWizards/course-images/reading.jpeg';
import chem from '../assets/studyWizards/course-images/chem.jpeg';
import NewNavbar from '../components/Navbar/NewNavbar';

const NewCourses = () => {
  const info = {
    heading: 'Select An Area of Study',
    img1: algImg,
    img2: reading,
    img3: chem,
    link1: 'Mathematics',
    link2: 'Reading & Writing',
    link3: 'Science',
  };

  const paths = {
    path1: 'courses/mathematics',
    path2: 'courses/language',
    path3: 'courses/science',
  };

  const navInfo = {
    heading: 'Study Wizards Private Tutoring',
    subheading: 'Personalized For Success',
  };
  return (
    <>
      <NewNavbar info={navInfo} />
      <Highlights info={info} paths={paths} />
    </>
  );
};

export default NewCourses;
