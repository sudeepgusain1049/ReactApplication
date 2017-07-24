'use strict';

import React, {Component} from 'react';
import {
    Router,
    Route,
    Link,
    IndexRoute,
    hashHistory,
    browserHistory
} from 'react-router'
import {HomeComponent} from './components/home-component';
import {AboutComponent} from './components/about-component';

// import createBrowserHistory from 'history/createBrowserHistory' const
// newHistory = createBrowserHistory();

console.log('App loaded');
class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/home" component={HomeComponent}/>
                <Route path="/About" component={AboutComponent}/>
                <Route path="/" component={HomeComponent}/>
            </Router >
        );
    }
}

export default App