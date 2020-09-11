import React from 'react';

const SubsTitle = (props) => {
  return (
    <div className="row ">
      <div className="col mx-auto">
        <div className="container-fluid mt-3 bg-light text-dark rounded">
          <div className="row">
            <div className="col">
              <h1 className="display-1 text-capitalize">{props.category}</h1>
              <h4>
                Study Wizards Tutors are “Mathemagicians” Who Will Give Your
                Child the Boost They Need
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsTitle;
