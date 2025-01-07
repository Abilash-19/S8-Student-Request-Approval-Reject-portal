import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from 'react-router-dom';  
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Router>  
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GoogleOAuthProvider>
);
