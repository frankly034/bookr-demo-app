import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignUpPage';

const App = () => (
    <Router>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage}/>
    </Router>
)

render(<App />, document.querySelector('#root'));
