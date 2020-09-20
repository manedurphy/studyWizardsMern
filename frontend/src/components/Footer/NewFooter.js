import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { FaYelp, FaGooglePlus, FaFacebook, FaFacebookF } from 'react-icons/fa';

const NewFooter = (props) => {
  let today = new Date();
  let year = today.getFullYear();
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const body = JSON.stringify(formData);
      e.preventDefault();
      const res = await axios.post('/api/auth/send', body, {
        headers: { 'Content-Type': 'application/json' },
      });
      setFormData({ ...formData, name: '', email: '', message: '' });
      setEmailSent(true);
      setResponseMsg(res.data.msg);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        alert(errors[0].msg);
      }
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <section id="footer" className="wrapper">
          <div className="title">Contact Us</div>
          <div className="container">
            <header className="style1">
              <h2>Ready to Schedule a Consultation?</h2>
              <p>
                Send us an email, or schedule an appointment on our Google
                Calendar
              </p>
              <br />
              <br />
              {props.btn && <div>{props.btn}</div>}
            </header>
            <div className="row">
              <div className="col-6 col-12-medium">
                {/* Contact Form */}
                <section>
                  <form onSubmit={handleSubmit}>
                    <div className="row gtr-50">
                      <div className="col-6 col-12-small">
                        <input
                          type="text"
                          name="name"
                          id="contact-name"
                          placeholder="Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6 col-12-small">
                        <input
                          type="text"
                          name="email"
                          id="contact-email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          id="contact-message"
                          placeholder={
                            !emailSent
                              ? 'Describe in detail the difficulties you or your child are experiencing. As an alternative you may schedule a consultation through Gmail by clicking the "Booking Appointment" button below!'
                              : responseMsg
                          }
                          required
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <input
                              type="submit"
                              className="style1"
                              value="Send"
                              style={{ background: '#60479c' }}
                            />
                          </li>
                          <li>
                            <input
                              type="button"
                              className="style2"
                              value="Book Appointment"
                              onClick={() => loginWithRedirect()}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
              <div className="col-6 col-12-medium">
                {/* Contact */}
                <section className="feature-list small">
                  <div className="row">
                    <div className="col-6 col-12-small">
                      <section>
                        <h3 className="icon solid fa-home">Mailing Address</h3>
                        <p>
                          Study Wizards Tutoring
                          <br />
                          1900 Camden Avenue
                          <br />
                          San Jose, CA 95124
                        </p>
                      </section>
                    </div>
                    <div className="col-6 col-12-small">
                      <section>
                        <h3 className="icon solid fa-comment">Social</h3>
                        <p>
                          <a
                            href="https://www.yelp.com/biz/study-wizards-tutoring-san-jose-2?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaYelp /> yelp
                          </a>
                          <br />
                          <a
                            href="https://www.google.com/search?ei=BJJNX4jsOYLSmAXWzJawDg&q=study+wizards+tutoring+california+google+reviews&oq=study+wizards+tutoring+california+google+reviews&gs_lcp=CgZwc3ktYWIQA1DIMljQR2CsSWgDcAB4AIABWYgBlQeSAQIxMpgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwiI_s-K1sbrAhUCKaYKHVamBeYQ4dUDCA0&uact=5#lrd=0x808e3497e52fe473:0xddcb817cb831628,1,,,"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGooglePlus /> google reviews
                          </a>
                          <br />
                          <a
                            href="https://www.facebook.com/StudyWizards"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF /> facebook
                          </a>
                        </p>
                      </section>
                    </div>
                    <div className="col-6 col-12-small">
                      <section>
                        <h3 className="icon solid fa-envelope">Email</h3>
                        <p>
                          <a href="https://www.gmail.com">
                            mgoldstein@studywizards.com
                          </a>
                        </p>
                      </section>
                    </div>
                    <div className="col-6 col-12-small">
                      <section>
                        <h3 className="icon solid fa-phone">Phone</h3>
                        <p>(408) 883-8660</p>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div id="copyright">
              <ul>
                <li>&copy; {year}.</li>
                <li>Study Wizards Tutoring, Inc. All Rights Reserved</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewFooter;
