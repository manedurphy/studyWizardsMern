import React from 'react';
import img from '../assets/themeImages/pic01.jpg';
import Intro from '../components/MidSection/Intro';
import Highlights from '../components/MidSection/Highlights';
import girlComputer from '../assets/studyWizards/online-computer-girl.jpg';
import kidsWriting from '../assets/studyWizards/kids-writing.jpeg';
import mathCalculator from '../assets/studyWizards/math-calculator.jpg';
import NewFooter from '../components/Footer/NewFooter';

const NewHome = () => {
  const intro = {
    heading: 'Our Mission',
    p1: '  Study Wizards Tutors Are Experienced, Caring, and Passionate!',
    p2: 'Affordable Private Tutoring In San Jose, Silicon Valley, and Online',
    p3:
      'Our Educators are Supportive Role Models Dedicated to Motivating Learning and Inspiring Students to Reach Their Potential',
    link: 'Meet Our Tutors',
  };

  const highlights = {
    heading: 'The Highlights',
    img1: girlComputer,
    img2: kidsWriting,
    img3: mathCalculator,
    desc1: 'Tutoring that fits the needs of you and your child',
    desc2:
      "Writing experts guaranteed to improve your child's communcation abilities",
    desc3: 'Passionate Math and Science tutors that will inspire your child',
  };

  return (
    <>
      {/* Intro */}
      <Intro info={intro} />
      {/* Main */}
      <section id="main" className="wrapper style2">
        <div className="title" style={{ color: '#60479c' }}>
          Our Services
        </div>
        <div className="container">
          {/* Images */}
          <a href="#" className="image featured">
            <img src={img} alt="" />
          </a>

          {/* Features */}
          <section id="features">
            <header className="style1">
              <h2 style={{ color: '#60479c' }}>
                We'll Find A Great Tutor For You!
              </h2>
              <p>How Study Wizards Will Work with You and Your Child</p>
            </header>
            <div className="feature-list">
              <div className="row">
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-handshake">Consultation</h3>
                    <p>
                      We discuss your student’s needs and goals along with your
                      educational concerns.
                    </p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-equals">Careful Matching</h3>
                    <p>
                      We carefully match an experienced tutor who will
                      personalize tutoring to your student's unique learning
                      needs.
                    </p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-check">Follow Up</h3>
                    <p>
                      We continuously monitor your student’s progress and
                      provide you with feedback. We also welcome your input and
                      observations.
                    </p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-calendar">
                      Flexible Scheduling
                    </h3>
                    <p>
                      Eget mattis at, laoreet vel et velit aliquam diam ante,
                      aliquet sit amet vulputate et magna feugiat laoreet vel
                      velit lorem.
                    </p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-laptop">
                      Personalized Online Learning
                    </h3>
                    <p>
                      Eget mattis at, laoreet vel et velit aliquam diam ante,
                      aliquet sit amet vulputate et magna feugiat laoreet vel
                      velit lorem.
                    </p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-chalkboard-teacher">
                      Qualified Experts Dedicated To Education
                    </h3>
                    <p>
                      Eget mattis at, laoreet vel et velit aliquam diam ante,
                      aliquet sit amet vulputate et magna feugiat laoreet vel
                      velit lorem.
                    </p>
                  </section>
                </div>
              </div>
            </div>
            <ul className="actions special">
              <li>
                <a
                  href="#"
                  className="button style1 large"
                  style={{ background: '#60479c', color: 'white' }}
                >
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="button style2 large">
                  More Info
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <Highlights info={highlights} />
      <NewFooter />
    </>
  );
};

export default NewHome;
