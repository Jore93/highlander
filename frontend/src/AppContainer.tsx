/*
* Navigator for the application
*/

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './screens/Home';
import Me from './screens/Me';
import CV from './screens/CV';

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/me">
          <Me />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppContainer;
