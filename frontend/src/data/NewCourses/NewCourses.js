import algImg from '../../assets/studyWizards/course-images/alg2.webp';
import reading from '../../assets/studyWizards/course-images/reading.jpeg';
import chem from '../../assets/studyWizards/course-images/chem.jpeg';

export const newCoursesPageElements = {
  heading: 'Select An Area of Study',
  links: [
    {
      img: algImg,
      heading: 'Mathematics',
      path: '/courses/mathematics',
    },
    {
      img: reading,
      heading: 'Reading & Writing',
      path: '/courses/language',
    },
    {
      img: chem,
      heading: 'Science',
      path: '/courses/science',
    },
  ],
};
