import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadBlog } from './store/Blog'

const store = configureStore()
store.dispatch(loadBlog())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
