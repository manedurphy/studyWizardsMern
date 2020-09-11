import React, { useEffect } from 'react';
import { FaLaptop, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getTutors } from '../features/tutors/tutors';
import Spinner from '../components/Spinner/Spinner';
import categoryData from '../data/categoryData/Categories';

const Course = ({ match }) => {
  const { tutors, loading } = useSelector((state) => state.tutors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutors());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div
        className="container my-5 text-center"
        style={{ border: '1px solid white' }}
      >
        <div style={{ border: '1px solid ' }} className="mb-4">
          <h1 className="display-1 mt-4 text-capitalize">{match.params.id}</h1>
          <h4>
            {categoryData.map((category) => {
              if (category.category === match.params.id) {
                return category.desc;
              }
            })}
          </h4>
        </div>
        {tutors.map((tutor) => {
          return (
            <div
              className="container  tutor-box"
              style={{ border: '1px solid ' }}
              key={tutor._id}
            >
              <div className="row single-tutor ">
                <div className="col-2">
                  <div className="tutor-img">
                    <img src={tutor.img} alt="dane" />
                  </div>
                </div>
                <div
                  className="col-7 text-left pt-2"
                  style={{ borderRight: '1px solid black' }}
                >
                  <h6>{tutor.tutor.name}</h6>
                  <p>{tutor.bio}</p>
                </div>
                <div className="col-3 text-left pt-2 subjects-container ">
                  <h6 style={{ textDecoration: 'underline' }}>My Subjects</h6>
                  <div className="container">
                    <div className="row " style={{ listStyleType: 'none' }}>
                      {tutor.subjects.map((subject, index) => (
                        <div key={index} className="col-6">
                          <li>{subject}</li>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="services-container">
                    {tutor.services.online && (
                      <>
                        {' '}
                        <FaLaptop /> Online Tutoring
                      </>
                    )}
                    <br />
                    {tutor.services.inPerson && (
                      <>
                        {' '}
                        <FaUserAlt /> In-person Tutoring
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Course;
