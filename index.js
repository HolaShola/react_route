import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

import Component_1 from './components/component_1';
import NotFound from './components/not_found';
import Component_2 from './components/component_2';
import Component_3 from './components/component_3';

function App() {
    return (
        <div>
            Hello hello
        </div>
    );
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="*" component={NotFound} />
    </Router>),
    document.querySelector('#root')
);