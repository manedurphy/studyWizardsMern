import girlComputer from '../../assets/studyWizards/online-computer-girl.jpg';
import kidsWriting from '../../assets/studyWizards/kids-writing.jpeg';
import mathCalculator from '../../assets/studyWizards/math-calculator.jpg';

export const newHomePageElements = {
  intro: {
    tag: 'Our Mission',
    p1: '  Study Wizards Tutors Are Experienced, Caring, and Passionate!',
    p2: 'Affordable Private Tutoring In San Jose, Silicon Valley, and Online',
    p3:
      'Our Educators are Supportive Role Models Dedicated to Motivating Learning and Inspiring Students to Reach Their Potential',
    link: 'Meet Our Tutors',
  },
  body: {
    tag: 'Our Services',
    howItWorks: [
      {
        heading: 'Consultation',
        p:
          'We discuss your student’s needs and goals along with your educational concerns.',
        class: 'icon solid fa-handshake',
      },
      {
        heading: 'Careful Matching',
        p:
          "We carefully match an experienced tutor who will personalize tutoring to your student's unique learning needs.",
        class: 'icon solid fa-equals',
      },
      {
        heading: 'Follow Up',
        p:
          'We continuously monitor your student’s progress and provide you with feedback. We also welcome your input and observations.',
        class: 'icon solid fa-check',
      },
      {
        heading: 'Flexible Scheduling',
        p:
          ' Eget mattis at, laoreet vel et velit aliquam diam ante,aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.',
        class: 'icon solid fa-calendar',
      },
      {
        heading: 'Personalized Online Learning',
        p:
          'Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.',
        class: 'icon solid fa-laptop',
      },
      {
        heading: 'Qualified Experts Dedicated To Education',
        p:
          'Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.',
        class: 'icon solid fa-chalkboard-teacher',
      },
    ],
    links: [
      {
        path: '/contact-us',
        class: 'button style1 large',
        style: { background: '#60479c', color: 'white' },
        p: 'Get Started',
      },
      {
        path: '/about',
        class: 'button style2 large',
        style: null,
        p: 'More Info',
      },
    ],
  },
  highlights: {
    tag: 'The Highlights',
    images: [
      {
        img: girlComputer,
        link: 'Online Tutoring',
        p: 'Tutoring that fits the needs of you and your child',
        path: 'online-tutoring',
      },
      {
        img: kidsWriting,
        link: 'Reading & Writing',
        p:
          "Writing experts guaranteed to improve your child's communcation abilities",
        path: '/courses',
      },
      {
        img: mathCalculator,
        link: 'Math & Science',
        p: 'Passionate Math and Science tutors that will inspire your child',
        path: '/courses',
      },
    ],
  },
};
