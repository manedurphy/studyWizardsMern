import React, { useEffect, useState } from 'react';
import {
  getCurrentProfile,
  updateProfile,
} from '../../features/tutors/profile';
import { useSelector, useDispatch } from 'react-redux';

const EditProfile = ({ history }) => {
  const { profile } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    school: profile.education.school,
    degree: profile.education.degree,
    subjects: profile.subjects.join(' '),
    bio: profile.bio,
    imageUrl: profile.img,
    online: profile.services.online,
    person: profile.services.inPerson,
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
    const body = {
      education: {
        school: formData.school,
        degree: formData.degree,
      },
      subjects: formData.subjects.trim().split(' '),
      bio: formData.bio,
      img: formData.imageUrl,
      services: {
        online: formData.online,
        inPerson: formData.person,
      },
    };

    dispatch(updateProfile(body, history));
  };

  return (
    <>
      <div className="create-profile-form mx-auto text-center my-3 container">
        <h3 className="">Edit Your Profile</h3>
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              name="school"
              placeholder="School"
              onChange={changeHandler}
              value={formData.school}
            />
            <br />
            <small>
              enter the institution of your highest level of education
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={changeHandler}
              value={formData.degree}
            />
            <br />
            <small>e.g. Bachelor's Degree in Chemistry</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subjects"
              placeholder="subjects"
              onChange={changeHandler}
              value={formData.subjects}
            />
            <br />
            <small>
              enter each subject with a space in between and no commas
            </small>
          </div>
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
          <div className="form-group">
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
            <label htmlFor="online" className="pl-2">
              I can tutor online
            </label>
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="person"
              name="person"
              checked={formData.person}
              onChange={checkboxHandler}
            />
            <label htmlFor="online" className="pl-2">
              I can tutor in person
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
