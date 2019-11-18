import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './style.css';
import store from './store';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignUpPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
    </Router>
  </Provider>
);

render(<App />, document.querySelector('#root'));
