import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = (props) => {
  const { name, img } = props;
  console.log(name);
  return (
    <div className=" d-flex justify-content-center col-md-6 col-lg-4 my-3">
      <div
        className="single-course bg-light card text-dark"
        style={{ width: '14rem', height: '14rem' }}
      >
        <div className="card-body ">
          <h4 className="card-title text-capitalize">{name}</h4>
        </div>

        <img
          src={img}
          alt="class"
          className="card-img-bottom course-img mt-2"
        />
        <Link to={'/courses/' + name} className="btn btn-warning course-btn">
          more info
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
