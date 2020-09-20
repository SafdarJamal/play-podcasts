import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.scss';
import App from './App';
import 'focus-visible';
import smoothscroll from 'smoothscroll-polyfill';
import * as DarkTheme from './dark-theme';

DarkTheme.init();
smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
