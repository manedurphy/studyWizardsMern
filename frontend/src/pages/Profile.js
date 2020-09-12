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
          {profile && (
            <>
              <div className="col-4">
                <img src={profile.img} className=" profile-img" />
              </div>
              <div className="col-8">
                <h1 style={{ fontSize: '20px', marginBottom: '15px' }}>
                  Your Profile
                </h1>
                <h4>Bio</h4>
                <p>{profile.bio}</p>
                <hr />
                <div className="education-container">
                  <h4>Education</h4>
                  <p>{profile.education.school}</p>
                  <p>{profile.education.degree}</p>
                  <hr />
                </div>
                {profile && (
                  <>
                    <h4>Subjects</h4>
                    <ul className="profile-subject-list">
                      {profile.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                    <hr />
                  </>
                )}
                <Link
                  to="/edit-profile"
                  className="button"
                  style={{ color: '#fff' }}
                >
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
