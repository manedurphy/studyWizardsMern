import React from 'react';
import NewFooter from '../components/Footer/NewFooter';
import LeftSidebar from '../components/MidSection/LeftSidebar';
import michaelImg from '../assets/studyWizards/goldstein_pic.jpg';
import resenburgImg from '../assets/studyWizards/resenburg_pic.jpg';
import kahanImg from '../assets/studyWizards/kahan_pic.jpg';
import NewNavbar from '../components/Navbar/NewNavbar';

const About = () => {
  const sidebar = {
    img1: michaelImg,
    img2: kahanImg,
    img3: resenburgImg,
    tag: 'About Us',
    mainHeading: 'Get To Know Our Leadership Team',
    mainSubheading:
      'We Set High Standards for Ourselves to Help Your Child Reach Their Potential',
    heading1: 'Michael Goldstein, Academic Director and Founder',
    heading2: 'Tom Kahan, Co-Director',
    heading3: 'Sheila Rosenburg, Educational Consultant',
    leftHeading1: 'Our Leaders',
    leftHeading2: 'Read Our Blog',
    p1:
      'Mr. Goldstein has been a teacher and a longtime tutor himself, with a diverse background in education and business — both of which have been essential to the development and management of Study Wizards. Mr. Goldstein is dedicated and committed to working with families to ensure that tutoring helps their students succeed. He holds a Bachelor’s Degree in Political Science from UC Berkeley, where he was a California State Scholar and later attended Teachers College, Columbia University. Initially, he taught in New York City; and later, after returning to California, he led groups in the high-tech sector in both sales and recruitment. Mr. Goldstein also worked as a tutor, with a varied student population in the South Bay. Currently, besides managing Study Wizards, Mr. Goldstein is an excellent coach and mentor; providing both educational consulting services and training for Study Wizards tutors.',
    p2:
      'Mr. Kahan has been a high school history, civics, English and economics teacher and has also tutored math. As the Co-Director, he works with tutors, schools and community organizations. He holds a Bachelors of Arts Degree in History from California State University, East Bay.',
    p3:
      'Mrs. Rosenberg is a graduate of St. Johns University, Hofstra University, and State University of New York; her degrees and licenses from New York State include Elementary Education, Reading, Special Education, School Administration, and School Psychology. She has also actively participated in the Reading and Writing Workshop at Columbia University Teachers College. Mrs. Rosenberg has worked for more than 35 years developing her craft as an educator and teacher, and she has received several awards for her efforts. She began teaching in Manhattan and subsequently taught in elementary education at Syosset Schools, on Long Island, N.Y. Mrs. Rosenberg also worked with students at the League for the Hard of Hearing weekend program. After receiving her master’s degree as a Reading Specialist, Mrs. Rosenberg moved to Syosset’s Special Education Department, where she devoted her efforts to a wide range of programs, including starting both a high school Writing Lab and a resource room for a kindergarten program. Currently, Study Wizards has the benefit of Mrs. Rosenberg’s diverse experience; and she is available to discuss your student’s needs and the goals you have for your student.',
  };

  const navInfo = {
    heading: 'Study Wizards Private Tutoring',
    subheading: 'Personalized For Success',
  };
  return (
    <>
      <NewNavbar info={navInfo} />
      <LeftSidebar info={sidebar} />
      <NewFooter />
    </>
  );
};

export default About;
