import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

global.jQuery = require('jquery');
require('bootstrap-loader');

const json = require('./resume.json');

ReactDOM.render(
  <App jsonObj={json}/>,
  document.getElementById('root')
);
