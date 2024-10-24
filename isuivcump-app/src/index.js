import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Application des styles globaux
import Auth from './components/auth'; 

ReactDOM.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>,
  document.getElementById('root')
);
