import React from 'react';

const NewFooter = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <>
      <section id="footer" className="wrapper">
        <div className="title">Contact Us</div>
        <div className="container">
          <header className="style1">
            <h2>Ready to Schedule a Consultation?</h2>
            <p>
              Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis
              nunc in aliquet.
              <br />
              Nam pharetra laoreet imperdiet volutpat etiam feugiat.
            </p>
          </header>
          <div className="row">
            <div className="col-6 col-12-medium">
              {/* Contact Form */}
              <section>
                <form method="post" action="#">
                  <div className="row gtr-50">
                    <div className="col-6 col-12-small">
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-6 col-12-small">
                      <input
                        type="text"
                        name="email"
                        id="contact-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="contact-message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li>
                          <input
                            type="submit"
                            className="style1"
                            value="Send"
                          />
                        </li>
                        <li>
                          <input
                            type="reset"
                            className="style2"
                            value="Reset"
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
                        >
                          yelp
                        </a>
                        <br />
                        <a
                          href="https://www.google.com/search?ei=BJJNX4jsOYLSmAXWzJawDg&q=study+wizards+tutoring+california+google+reviews&oq=study+wizards+tutoring+california+google+reviews&gs_lcp=CgZwc3ktYWIQA1DIMljQR2CsSWgDcAB4AIABWYgBlQeSAQIxMpgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwiI_s-K1sbrAhUCKaYKHVamBeYQ4dUDCA0&uact=5#lrd=0x808e3497e52fe473:0xddcb817cb831628,1,,,"
                          target="_blank"
                        >
                          google reviews
                        </a>
                        <br />
                        <a
                          href="https://www.facebook.com/StudyWizards"
                          target="_blank"
                        >
                          facebook.com/StudyWizards
                        </a>
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon solid fa-envelope">Email</h3>
                      <p>
                        <a href="#">danem7@gmail.com</a>
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
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewFooter;
