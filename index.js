import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import Component_1 from './components/component_1';
import NotFound from './components/not_found';
import Component_2 from './components/component_2';
import Component_3 from './components/component_3';
import Repo from './components/repo';

function App(props) {
    return (
        <div>
            Hello hello
            <Link to="/component1">Component1</Link>
            <Link to="/component2">Component2</Link>
            <Link to="/component3">Component3</Link>
            {props.children}
        </div>
    );
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/comp1" component={Component_1} />
        <Route path="/comp2" component={Component_2} />
        <Route path="/comp3" component={Component_3} />
        <Route path="*" component={NotFound} />
    </Router>),
    document.querySelector('#root')
);