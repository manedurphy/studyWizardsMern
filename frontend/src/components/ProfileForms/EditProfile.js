import React, { useEffect, useState } from 'react';
import {
  getCurrentProfile,
  updateProfile,
} from '../../features/tutors/profile';
import { useSelector, useDispatch } from 'react-redux';

const EditProfile = ({ history }) => {
  const { profile, errors } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    school: profile.education.school,
    degree: profile.education.degree,
    subjects: profile.subjects.join(' '),
    bio: profile.bio,
    imageUrl: profile.img,
    online: profile.services.online,
    person: profile.services.inPerson,
    honors: profile.services.honors,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkboxHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData, history));
  };

  return (
    <>
      <div className="create-profile-form mx-auto text-center my-3 container">
        <div
          className="div"
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2rem',
            marginTop: '2rem',
          }}
        >
          <h3 style={{ marginBottom: '15px' }}>Edit Your Profile</h3>
        </div>
        {errors.length > 0 &&
          errors.map((item, index) => {
            return (
              <div className="user-message-error" key={index}>
                {item.msg}
              </div>
            );
          })}
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>Name of Higher Education Institution</label>
            <input
              type="text"
              name="school"
              placeholder="School"
              onChange={changeHandler}
              value={formData.school}
            />
            <small>e.g. San Jose State University</small>
          </div>
          <div className="form-group">
            <label>Your Major</label>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={changeHandler}
              value={formData.degree}
            />
            <small>e.g. Bachelor's Degree in Chemistry</small>
          </div>
          <div className="form-group">
            <label>Subjects You Can Tutor</label>
            <input
              type="text"
              name="subjects"
              placeholder="subjects"
              onChange={changeHandler}
              value={formData.subjects}
            />
            <small>
              enter each subject with a space in between and no commas
            </small>
          </div>
          <br />
          <div className="form-group">
            <textarea
              type="text"
              name="bio"
              placeholder="Tell us about yourself"
              rows="10"
              cols="56"
              onChange={changeHandler}
              value={formData.bio}
            />
          </div>
          <div className="form-group" style={{ margin: '45px 0' }}>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              onChange={changeHandler}
              value={formData.imageUrl}
            />
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="online"
              name="online"
              checked={formData.online}
              onChange={checkboxHandler}
            />
            <label htmlFor="online">I can tutor online</label>
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="person"
              name="person"
              checked={formData.person}
              onChange={checkboxHandler}
            />
            <label htmlFor="person">I can tutor in person</label>
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="honors"
              name="honors"
              checked={formData.honors}
              onChange={checkboxHandler}
            />
            <label htmlFor="honors">I can tutor honors and AP courses</label>
          </div>
          <button type="submit" style={{ color: '#fff' }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
