/* eslint-disable no-unused-vars */
import React from 'react';
import {DefaultRoute, Route} from 'react-router';

import App from './app';
import Homepage from './homepage';

const routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Homepage} />
    </Route>
);

export default routes;
