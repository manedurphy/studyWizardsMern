import React, { useEffect } from 'react';
import { FaLaptop, FaUserAlt, FaBookReader } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getTutors } from '../features/tutors/tutors';
import Spinner from '../components/Spinner/Spinner';
import NewNavbar from '../components/Navbar/NewNavbar';
import NoSidebar from '../components/MidSection/NoSidebar';

const Course = ({ match }) => {
  const dispatch = useDispatch();
  const { tutors, loading } = useSelector((state) => state.tutors);
  const info = {
    heading: match.params.id,
    subheading:
      match.params.id === 'mathematics'
        ? 'Study Wizards Tutors are “Mathemagicians” Who will Give your Child the Boost They Need'
        : match.params.id === 'science'
        ? 'Affordable Private Science Tutoring in San Jose and Silicon Valley'
        : 'Affordable Private Reading & Writing Tutoring in San Jose and Silicon Valley',
  };

  useEffect(() => {
    dispatch(getTutors());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <NewNavbar info={info} />
      <NoSidebar heading={`Meet Our ${match.params.id} Tutors`}>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              fontSize: '2rem',
              textTransform: 'capitalize',
            }}
          ></div>
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
    </>
  );
};

export default Course;
