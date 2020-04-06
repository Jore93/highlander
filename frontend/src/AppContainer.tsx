/*
* Navigator for the application
*/

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Home from './screens/Home';
import Me from './screens/Me';
import CV from './screens/CV';

const AppContainer = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/me">Me</Link>
            </li>
          </ul>
        </nav>

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

      </div>
    </Router>
  );
}

export default AppContainer;
