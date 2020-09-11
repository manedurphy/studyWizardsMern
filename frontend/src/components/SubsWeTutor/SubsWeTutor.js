import React from 'react';
import courses from '../../Context/CoursesContext/Courses';
import { Link } from 'react-router-dom';

const SubsWeTutor = ({ category, setShowModal }) => {
  const subjects = courses.filter((item) => item.category === category);

  return (
    <>
      <h2>subjects we tutor</h2>
      <p>Select a subject</p>
      <ul className="course-list">
        <div className="container" style={{ height: '400px' }}>
          <div className="row align-items-center" style={{ height: '100%' }}>
            {subjects.map((item, index) => {
              const { name } = item;

              return (
                <Link className="col-6" key={index} to={`/form`}>
                  <li
                    className="course-list-item btn btn-info"
                    style={{ width: '100%' }}
                    onClick={() => localStorage.setItem('subject', name)}
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </ul>
    </>
  );
};

export default SubsWeTutor;
