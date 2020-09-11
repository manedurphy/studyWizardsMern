import React, { useEffect } from 'react';
import { getCurrentProfile } from '../features/tutors/profile';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);
  return (
    <>
      <div className="container ">
        <div className="row">
          <h3 className="col-12 my-4 text-center">Your Profile</h3>
          {profile && (
            <>
              <div className="col-4">
                <img src={profile.img} className=" profile-img" />
              </div>
              <div className="col-8">
                <h4>Bio</h4>
                <p>{profile.bio}</p>
                <hr />
                <h4>Education</h4>
                <ul className="edu-list">
                  {' '}
                  <div className="edu-list-item">
                    <li>{profile.education.school}</li>
                  </div>
                  <div className="edu-list-item">
                    <li>{profile.education.degree}</li>
                  </div>
                  <hr />
                </ul>
                {profile && (
                  <>
                    <h4>Subjects</h4>
                    <ul className="profile-subject-list">
                      {profile.subjects.map((subject, index) => (
                        <li className="mx-1" key={index}>
                          {subject}
                        </li>
                      ))}
                    </ul>
                    <hr />
                  </>
                )}
                <Link to="/edit-profile" className="btn btn-secondary">
                  Edit Profile
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {isAuthenticated && !profile && <Redirect to="/create-profile" />}
    </>
  );
};

export default Profile;
