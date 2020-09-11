import React from 'react';
// import { Link } from 'react-router-dom'; //make the buttons go to their respective links

const Banner = (props) => {
  const { heading, desc, btn1, btn2, courses } = props;
  return (
    <div className=" bg-dark text-center text-light">
      <h1 className="text-capitalize">{heading}</h1>
      <hr className="bg-light" />
      <p>{desc}</p>
      <div className="container course-container">
        <div className="row">
          {courses &&
            courses.map((item, index) => {
              return (
                <div className="col-6" key={index}>
                  <a href={`/courses/${item.category}`} className="course-link">
                    <h2>{item.name}</h2>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <div className="d-flex justify-content-around align-middle ">
        <button className="btn btn-secondary">{btn1}</button>
        <button className="btn btn-secondary">{btn2}</button>
      </div>
      <br></br>
    </div>
  );
};

export default Banner;
