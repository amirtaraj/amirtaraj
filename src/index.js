import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga4';

const trackingId = "G-JTX3BNF0T4"; // Replace with your GA4 Measurement ID
ReactGA.initialize(trackingId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Track the initial page view
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

reportWebVitals();
