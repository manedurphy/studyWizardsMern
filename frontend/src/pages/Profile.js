import React, { useEffect } from 'react';
import { getCurrentProfile } from '../features/tutors/profile';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import NewNavbar from '../components/Navbar/NewNavbar';
import NoSidebar from '../components/MidSection/NoSidebar';

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navInfo = {
    heading: 'Study Wizards Private Tutoring',
    subheading: 'Thank You For Your Efforts',
  };

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);
  return (
    <>
      <NewNavbar info={navInfo} />
      <NoSidebar heading="Your Profile">
        <div className="container ">
          <div className="row">
            {profile && (
              <>
                <div className="col-4">
                  <img src={profile.img} alt="tutor" className=" profile-img" />
                </div>
                <div className="col-8">
                  <h1 style={{ fontSize: '20px', marginBottom: '15px' }}>
                    {profile.tutor.name}
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
                    style={{ color: '#fff', marginBottom: '1rem' }}
                  >
                    Edit Profile
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </NoSidebar>
      {isAuthenticated && !profile && <Redirect to="/create-profile" />}
    </>
  );
};

export default Profile;
