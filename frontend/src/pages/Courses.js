import React from 'react';
import Hero from '../components/Hero/Hero';
import banner from '../data/bannerData/Banner';
import courses from '../data/coursesData/Courses';
import Footer from '../components/Footer/Footer';

const Courses = () => {
  const { heading, desc, btn1, btn2 } = banner.courses;
  return (
    <>
      <Hero
        heading={heading}
        desc={desc}
        btn1={btn1}
        btn2={btn2}
        id="intro2"
        courses={courses}
      />
      {/* <footer className="bg-dark">
        <h1 className="text-center text-light">courses</h1>
        <div className="spacer bg-light mb-5"></div>
        <div className="container text-center ">
          <div className="row d-flex justify-content-center ">
            {courses.map((item, index) => {
              const { name, category } = item;
              return (
                <div className="col-6" key={index}>
                  <h4 className="course-link">
                    <a href={`/courses/${category}`}>{name}</a>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </footer> */}
      <footer className="container-fluid bg-dark text-white text-center ">
        <h2 className="text-capitalize">our services</h2>
        <div className="spacer bg-light mb-5"></div>
        <Footer />
      </footer>
    </>
  );
};

export default Courses;
