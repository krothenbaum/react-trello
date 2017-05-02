require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="BOARD!" listTitles={["1","2","3"]} />, document.getElementById('app'))
);