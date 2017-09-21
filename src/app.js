import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Search from './components/Search';

window.onload = () => {
    ReactDOM.render(<Search/>, document.getElementById('main'));
};

