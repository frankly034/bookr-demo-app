import React from 'react';
import { render } from 'react-dom';
import './style.css';
import LoginPage from './components/pages/LoginPage';
import Header from './components/commons/Header';
import CreateBook from './components/pages/CreateBook';


const App = () => (
  <>
    <CreateBook />
  </>
  
)

render(<App />, document.querySelector('#root'));
