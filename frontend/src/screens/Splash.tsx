import React from 'react'
import {connect} from 'react-redux';

import {StoreState} from '../store/storeTypes';
import {fetchLanguages, fetchEducations, fetchPositions, fetchWorkhistory, setInitialisation} from '../actions/cvActions';

interface SplashInterface {
  fetchEducations: Function
  fetchLanguages: Function
  fetchPositions: Function
  fetchWorkhistory: Function
  setInitialisation: Function
}

class Splash extends React.Component<SplashInterface, {}> {
  componentDidMount() {
    this.initializeApp()
  }

  initializeApp = async () => {
    await this.props.fetchEducations();
    await this.props.fetchLanguages();
    await this.props.fetchPositions();
    await this.props.fetchWorkhistory();
    this.props.setInitialisation(true);
  }

  render() {
    return (
      <div>
        <h1 style={{color: 'white'}}>SPLASH</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState)=> {
  const {
    isInitialized,
    education,
    languages,
    positions,
    workhistory,
  } = state.cv;
  return {isInitialized, education, languages, positions, workhistory};
};

export default connect(
  mapStateToProps,
  {
    fetchEducations,
    fetchLanguages,
    fetchPositions,
    fetchWorkhistory,
    setInitialisation,
  },
)(Splash)

