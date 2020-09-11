import React, { useState } from 'react';
import { FaRegEnvelope, FaRegUser, FaTag } from 'react-icons/fa';

const Form = (props) => {
  console.log(props);
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
    console.log(comments);
  };

  const handleSelectChange = (event) => {
    setTopic(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('comments', comments);
    localStorage.setItem('topic', topic);
  };

  return (
    <div className="container  mt-5">
      <div className="row justify-content-center">
        <div className="col-5 bg-dark text-light text-center">
          <h2>Tell Us More</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group"></div>
            <div className="input-group my-3 ">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FaRegEnvelope size={15} />
                </div>
              </div>
              <input
                required
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="your name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="input-group my-3 ">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FaRegUser />
                </div>
              </div>
              <input
                required
                type="email"
                className="form-control "
                value={comments}
                onChange={handleCommentsChange}
                placeholder="your email"
              />
            </div>

            <div className="input-group my-3 ">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FaTag />
                </div>
              </div>
              <input
                required
                className="form-control"
                value={localStorage.getItem('subject')}
                type="text"
                onChange={handleSelectChange}
              />
            </div>
            <div className="form-group ">
              <textarea
                required
                className="form-control"
                value={details}
                type="text"
                placeholder="Tell us more about your situation. How can we help?"
                onChange={handleDetailsChange}
              ></textarea>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
