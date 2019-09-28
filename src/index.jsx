import React from 'react';
import { render } from 'react-dom';
import Header from './components/commons/Header';
import './style.css';

const App = () => <h1>Hello World</h1>;

render(<App />, document.querySelector('#root'));
