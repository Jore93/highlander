import React from 'react'
import {connect} from 'react-redux';

import {StoreState} from '../store/storeTypes';
import {readLanguages, readEducations, readPositions, readWorkhistories, setInitialisation} from '../actions/apiActions';
import LoadingView from '../components/LoadingView';

interface SplashInterface {
  readEducations: Function
  readLanguages: Function
  readPositions: Function
  readWorkhistories: Function
  setInitialisation: Function
}

class Splash extends React.Component<SplashInterface, {}> {
  state = {loading: true};
  componentDidMount() {
    this.initializeApp()
  }

  initializeApp = async () => {
    await this.props.readEducations();
    await this.props.readLanguages();
    await this.props.readPositions();
    await this.props.readWorkhistories();
    this.setState({loading: false});
  }

  render() {
    setInterval(() => {
      this.props.setInitialisation(true);
    }, 5000);
    return (
      <LoadingView />
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
    readEducations,
    readLanguages,
    readPositions,
    readWorkhistories,
    setInitialisation,
  },
)(Splash)

