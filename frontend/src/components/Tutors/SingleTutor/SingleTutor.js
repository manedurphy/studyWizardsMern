import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SingleTutor = ({ name, img }) => {
  return (
    <div className="col-md-4 col-sm-6 card text-dark p-0">
      <div className="card-header">{name}</div>
      <div className="card-img-bottom">
        <img src={img} alt="tutor" style={{ width: '100%' }} />
      </div>
      <div className="card-footer bg-light d-flex justify-content-around">
        <h4 className="btn btn-outline-secondary">About me</h4>
        <a
          href="https://www.linkedin.com/in/danemurphy1996/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32}></FaLinkedin>
        </a>
      </div>
    </div>
  );
};

export default SingleTutor;
