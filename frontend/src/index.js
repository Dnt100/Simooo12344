import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'

document.title = "Simo Raouf"

ReactDOM.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
