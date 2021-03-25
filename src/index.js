import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BlogProvider } from './context/context';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <BlogProvider>
    <Router>
      <App />
    </Router>
  </BlogProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
