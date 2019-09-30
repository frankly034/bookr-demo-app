import React from 'react';
import { render } from 'react-dom';
import './style.css';
import LoginPage from './components/pages/LoginPage';

const App = () => (
  <LoginPage />
)

render(<App />, document.querySelector('#root'));
