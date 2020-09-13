import React, { useEffect, useState } from 'react';
import { getCurrentProfile } from '../../features/tutors/profile';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createProfile } from '../../features/tutors/profile';
const CreateProfile = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    subjects: '',
    bio: '',
    imageUrl: '',
    online: false,
    person: false,
    honors: false,
  });

  const dispatch = useDispatch();
  const { profile, errors } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkboxHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    console.log(formData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const body =
    // {
    //   education: {
    //     school: formData.school,
    //     degree: formData.degree,
    //   },
    //   subjects: formData.subjects.trim().split(' '),
    //   bio: formData.bio,
    //   img: formData.imageUrl,
    //   services: {
    //     online: formData.online,
    //     inPerson: formData.person,
    //     honors: formData.honors,
    //   },
    // };
    dispatch(createProfile(formData));
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
          <h3 className="">Create Your Profile</h3>
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
              required
            />
            <small>
              enter the institution of your highest level of education
            </small>
          </div>
          <div className="form-group">
            <label>Your Major</label>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={changeHandler}
              required
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
              required
            />
            <small>
              enter each subject with a space in between and no commas
            </small>
          </div>
          <label>Your Profile Bio</label>
          <div className="form-group">
            <textarea
              type="text"
              name="bio"
              placeholder="Tell us about yourself"
              rows="10"
              cols="56"
              onChange={changeHandler}
              value={formData.bio}
              required
            />
          </div>
          <br />
          <div className="form-group" style={{ margin: '45px 0' }}>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              onChange={changeHandler}
              required
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
          <button type="submit" className="button" style={{ color: '#fff' }}>
            Submit
          </button>
        </form>
      </div>
      {profile && <Redirect to="/profile" />}
    </>
  );
};

export default CreateProfile;
