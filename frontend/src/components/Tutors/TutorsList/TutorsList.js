import React from 'react';
import SingleTutor from '../SingleTutor/SingleTutor';
import tutors from '../../../data/tutorInfoData/Tutors';

const TutorsList = ({ category }) => {
  const filterTutors = tutors.filter((item) => {
    return item.subjects.indexOf(category.category) !== -1;
  });

  return (
    <div className="container tutors-list mt-5">
      <div className="row">
        {filterTutors.map((item, index) => (
          <SingleTutor key={index} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default TutorsList;
