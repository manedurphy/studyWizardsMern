import michaelImg from '../../assets/studyWizards/goldstein_pic.jpg';
import resenburgImg from '../../assets/studyWizards/resenburg_pic.jpg';
import kahanImg from '../../assets/studyWizards/kahan_pic.jpg';
import { blogLinks } from '../Blog/Blog';

export const aboutPageElements = {
  tag: 'About Us',
  mainHeading: 'Get To Know Our Leadership Team',
  mainSubheading:
    'We Set High Standards for Ourselves to Help Your Child Reach Their Potential',
  body: [
    {
      heading: 'Michael Goldstein, Academic Director and Founder',
      p:
        'Mr. Goldstein has been a teacher and a longtime tutor himself, with a diverse background in education and business — both of which have been essential to the development and management of Study Wizards. Mr. Goldstein is dedicated and committed to working with families to ensure that tutoring helps their students succeed. He holds a Bachelor’s Degree in Political Science from UC Berkeley, where he was a California State Scholar and later attended Teachers College, Columbia University. Initially, he taught in New York City; and later, after returning to California, he led groups in the high-tech sector in both sales and recruitment. Mr. Goldstein also worked as a tutor, with a varied student population in the South Bay. Currently, besides managing Study Wizards, Mr. Goldstein is an excellent coach and mentor; providing both educational consulting services and training for Study Wizards tutors.',
    },
    {
      heading: 'Tom Kahan, Co-Director',
      p:
        'Mr. Kahan has been a high school history, civics, English and economics teacher and has also tutored math. As the Co-Director, he works with tutors, schools and community organizations. He holds a Bachelors of Arts Degree in History from California State University, East Bay.',
    },
    {
      heading: 'Sheila Rosenburg, Educational Consultant',
      p:
        'Mrs. Rosenberg is a graduate of St. Johns University, Hofstra University, and State University of New York; her degrees and licenses from New York State include Elementary Education, Reading, Special Education, School Administration, and School Psychology. She has also actively participated in the Reading and Writing Workshop at Columbia University Teachers College. Mrs. Rosenberg has worked for more than 35 years developing her craft as an educator and teacher, and she has received several awards for her efforts. She began teaching in Manhattan and subsequently taught in elementary education at Syosset Schools, on Long Island, N.Y. Mrs. Rosenberg also worked with students at the League for the Hard of Hearing weekend program. After receiving her master’s degree as a Reading Specialist, Mrs. Rosenberg moved to Syosset’s Special Education Department, where she devoted her efforts to a wide range of programs, including starting both a high school Writing Lab and a resource room for a kindergarten program. Currently, Study Wizards has the benefit of Mrs. Rosenberg’s diverse experience; and she is available to discuss your student’s needs and the goals you have for your student.',
    },
  ],
  left: [
    {
      heading: 'Read Our Blog',
      p:
        'Read about the strategies we implement in order to push our students towards success. We cover the importance of developing great study skills as well as stress managemnet and emotional wellness.',
      link: '/blog',
    },
    {
      heading: 'Our Leaders',
      images: [
        {
          img: michaelImg,
          heading: 'Meet Michael',
          p:
            'Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.',
        },
        {
          img: kahanImg,
          heading: 'Meet Tom',
          p:
            'Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.',
        },
        {
          img: resenburgImg,
          heading: 'Meet Sheila',
          p:
            'Duis odio diam, luctus et vulputate vitae, vehicula ac dolor. Pellentesque at urna eget tellus sed etiam.',
        },
      ],
    },
    {
      heading: 'Our Articles',
      blog: blogLinks,
    },
  ],
  btns: [
    {
      link: '/reviews',
      heading: 'What Others Say About Us',
      p: 'Read our most recent success stories from other parents in your area',
    },
    {
      link: '/tutor-reviews',
      heading: 'What Our Tutors Say About Us',
      p: 'Read about why our tutors love about working for Study Wizards',
    },
  ],
};
