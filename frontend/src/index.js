import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import './assets/sass/main.scss';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0Provider
          domain={'dev-z198i2bl.us.auth0.com'}
          clientId={'2XCHAaNwSCJzTTjrVksuI2Aj8GzUAEAR'}
          redirectUri={'http://localhost:3000/appointment'}
        >
          <App />
        </Auth0Provider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
