

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root= ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();


