import React from 'react';
import LeftSidebar from '../components/MidSection/LeftSidebar';
import NewNavbar from '../components/Navbar/NewNavbar';
import fillerImg1 from '../assets/studyWizards/tutors/tutor1.png';
import fillerImg2 from '../assets/studyWizards/tutors/tutor2.png';
import fillerImg3 from '../assets/studyWizards/tutors/ProfilePictureCrop.jpg';
import NewFooter from '../components/Footer/NewFooter';
import { FaGooglePlus, FaYelp } from 'react-icons/fa';

const YelpReviews = () => {
  const sidebar = {
    img1: fillerImg1,
    img2: fillerImg2,
    img3: fillerImg3,
    tag: 'Reviews',
    mainHeading: 'Read What Others Are Saying About Us',
    mainSubheading:
      'Families Continue With Us Year After Year Because of Their Children’s Successes',
    heading1: 'Review from Dori B.',
    heading2: 'Review from Lynae C.',
    heading3: 'Sheila Rosenburg, Educational Consultant',
    btnHeadingLeft: 'Read More Reviews On Yelp',
    icon1: <FaYelp />,
    btnP1:
      'Study Wizards was such a great help for my sophomore this year. He was struggling in Math and English and we decided to look into tutoring. This was our first and only attempt and we are so happy with the service they have provided. Michael the owner, is great at taking an assessment of your child...',
    btnHeadingRight: 'Read More Reviews On Google',
    icon2: <FaGooglePlus />,
    leftHeading1: 'Our Tutors Love Working For Us',
    btnP2:
      'My daughter worked with both an English tutor and a math tutor to prepare for the ACT.  She felt more confident to take the test and enjoyed working with her tutors, Sharon and Peter.  She loved working with Sharon because she is very knowledgeable and made grammar fun...',
    leftHeading2: 'Read Our Blog',
    p1: `Study Wizards was nothing short of a miracle for our son. After watching our very bright student struggle with Math for years, we finally made the investment to support his academic success and we called Michael at Study Wizards. During that first phone call, Michael was knowledgeable and assuring, and we set up a plan to help our son with a great tutor, Jonathan. Jonathan worked with our son for almost a year, but the results began within the first few weeks. Overall, our son's understanding and grades have improved significantly, but most importantly is that within just a few short months our son's Level 10+ Math Anxiety was reduced to a Level 1. It was amazing. This has changed his life tremendously. Now our son can approach his Math homework with a calm spirit, and he isn't up at night worrying about upcoming Math tests. He recognizes his potential and he doesn't feel like an inferior student, even if he doesn't score as well as he'd like to. Subsequently, his quality of life has improved in ways we could have never anticipated. The tutoring he received from Study Wizards has completely changed his life in an area that was far-reaching and had plagued him for years. It was by far worth the investment that we were initially hesitant to make. All along the way Michael checked in with us regularly to make sure the process met our expectations, and he was flexible and eager to work out any kinks we might have - which we didn't. Our only regret is that we didn't do this earlier. As of this moment our son is doing well and he doesn't need additional help from Study Wizards. However, if that changes we will not hesitate to call Michael. We trust that he will provide another high quality tutor that will fit with our son's needs. Thank you Michael! `,
    p2:
      'This year tutor Dane tutored my son in Algebra 2 and Chemistry. It again was a great experience. Dane was really good at both subjects and my son benefited a lot from the extra instruction. Dane is extremely responsible, on time and easy to get a hold of. Thanks for another great year with Study Wizards!',
    p3: `My son has benefited from several gifted tutors recommended by Study Wizards. In his sophomore year he worked closely with Jon, who is a public high school teacher and who was very patient with my son and his unique personality. Jon was able to help my son across a range of subjects, monitored his grades and assignments, and helped him hone his organizational and study skills.
    At times Jon had to exercise great patience when my son was upset by some issue, such as problems with his girlfriend. Jon would help calm him down before getting down to business.
    Jon is hands on and collaborative in nature. It was a joy to see them working together -- I still remember Jon asking questions and providing tips while my son updated his essay on the computer. My son's grades improved greatly, and he even earned a $300 bonus for achieving my performance targets.`,
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

export default YelpReviews;
