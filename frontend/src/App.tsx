import React from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import CV from './screens/CV';
import Projects from './screens/Projects';
import TechStack from './screens/TechStack';

import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/techstack">
              <TechStack />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
