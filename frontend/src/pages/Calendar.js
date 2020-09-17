import React from 'react';
import NoSidebar from '../components/MidSection/NoSidebar';

const Calendar = () => {
  return (
    <>
      <NoSidebar heading="Book Your Consultation">
        <div className="calendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZGFuZW03QGdtYWlsLmNvbQ&amp;color=%237986CB&amp;mode=WEEK"
            style={{ border: 'solid 1px #777' }}
            width="1500"
            height="600"
            frameborder="0"
            scrolling="no"
            title="calendar"
          ></iframe>
        </div>
      </NoSidebar>
    </>
  );
};

export default Calendar;
