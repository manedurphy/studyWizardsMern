import React from 'react';
import BarCharts from '../components/FusionCharts/BarCharts';

import NoSidebar from '../components/MidSection/NoSidebar';
import NewFooter from '../components/Footer/NewFooter';
import Trendline from '../components/FusionCharts/Trendline';
import PiChart from '../components/FusionCharts/PiChart';

class MyComponent extends React.Component {
  render() {
    return (
      <>
        <NoSidebar>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <BarCharts />
              </div>
              <div className="col-6 ">
                <PiChart />
              </div>
            </div>
            <div className="container" style={{ marginTop: '50px' }}>
              <Trendline />
            </div>
          </div>
        </NoSidebar>
        <NewFooter />
      </>
    );
  }
}

export default MyComponent;
