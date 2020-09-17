import React, { useEffect, useState } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import NoSidebar from '../components/MidSection/NoSidebar';
import Spinner from '../components/Spinner/Spinner';
import { FaLaptop, FaUserAlt, FaBookReader } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getTutors } from '../features/tutors/tutors';
import { errorFalse } from '../features/auth/auth';
import { Redirect } from 'react-router-dom';

const Course = ({ match }) => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([
    'mathematics',
    'language',
    'science',
  ]);
  const [courseExists, setCourseExists] = useState(true);
  const { tutors, loading } = useSelector((state) => state.tutors);

  useEffect(() => {
    if (courses.indexOf(match.params.id) === -1) {
      setCourseExists(false);
    }
    dispatch(errorFalse());
    dispatch(getTutors(match.params.id));
  }, []);

  return loading ? (
    <Spinner />
  ) : !courseExists ? (
    <Redirect to="/404/" />
  ) : (
    <>
      <NoSidebar heading={`Meet Our ${match.params.id} Tutors`}>
        <div>
          {tutors.map((tutor) => {
            return (
              <div key={tutor._id}>
                <div
                  className="container"
                  style={{ borderBottom: '1px solid ' }}
                >
                  <div className="row single-tutor ">
                    <div className="col-2">
                      <div className="tutor-img">
                        <img src={tutor.img} alt="dane" />
                      </div>
                    </div>
                    <div className="col-4 text-left pt-2">
                      <h6>{tutor.tutor.name}</h6>
                      <p>{tutor.bio}</p>
                    </div>
                    <div className="col-3 text-left pt-2 subjects-container ">
                      <h6 style={{ textDecoration: 'underline' }}>
                        My Subjects
                      </h6>
                      <div className="container">
                        {tutor.subjects.map((subject, index) => (
                          <div key={index} style={{ listStyleType: 'none' }}>
                            <li>{subject}</li>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-3 text-left pt-2 subjects-container ">
                      <h6 style={{ textDecoration: 'underline' }}>
                        My Services
                      </h6>
                      <div className="services-container">
                        {tutor.services.online && (
                          <>
                            <FaLaptop /> Online Tutoring
                            <br />
                          </>
                        )}
                        {tutor.services.inPerson && (
                          <>
                            <FaUserAlt /> In-person Tutoring
                            <br />
                          </>
                        )}
                        {tutor.services.honors && (
                          <>
                            <FaBookReader /> Honors/AP
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </NoSidebar>
      <NewFooter />
    </>
  );
};

export default Course;
