import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/search.scss';
import Search from './components/Search';

window.onload = () => {
  ReactDOM.render(<Search title="Title search" />, document.getElementById('main'));
};

