import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSomeIcon } from '@fortawesome/free-solid-svg-icons'; // Import an icon of your choice
import ReactDOM from 'react-dom/client';
import './index.css'
import Route from'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    
     <>
     <App/>
     </>

 </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
