import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import api from "./api";
require('dotenv').config();


ReactDOM.render(<App />, document.getElementById('root'));