/* eslint-disable no-unused-vars */
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {render} from 'react-dom';
import Homepage from './homepage';


//TODO 4 more info: https://github.com/reactjs/react-router/blob/master/docs/guides/RouteConfiguration.md
render((
    <Router history={browserHistory}>
        <Route path="/" component={Homepage}>

        </Route>
    </Router>
), document.getElementById('app'));
