import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import CV from './screens/CV';
import Projects from './screens/Projects';
import TechStack from './screens/TechStack';

import Navbar from './components/Navbar';
import Splash from './screens/Splash';
import {StoreState} from './store/storeTypes';
import Admin from './screens/Admin';

interface AppProps {
  isInitialized: boolean
}

class App extends React.Component<AppProps, {}> {
  render() {
    if (!this.props.isInitialized) {
      return <Splash />
    }
    return (
      <div className="App">
        <Router>
          <Navbar isAdmin={false}/>

          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
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
              <Home isAdmin={false}/>
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

const mapStateToProps = (state: StoreState) => {
  const {isInitialized} = state.cv;
  return {isInitialized};
};

export default connect(
  mapStateToProps,
  {},
)(App)

