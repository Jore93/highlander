import React from 'react';

import AppContainer from './AppContainer';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AppContainer />
      </div>
    );
  }
}

export default App;
