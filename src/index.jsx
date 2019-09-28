import React from 'react';
import { render } from 'react-dom';
import Header from './components/commons/Header';
import './style.css';

const App = () => (<>
  <Header title='Bookr App' color='white' bgColor='red'/>
</>);

render(<App />, document.querySelector('#root'));

