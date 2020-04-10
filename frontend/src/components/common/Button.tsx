import React from 'react'
import {DARK_HIGHLIGHT} from '../../assets/constants';

interface ButtonProps {
  component: JSX.Element,
  onClick: Function,
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {component, onClick} = this.props;
    return (
      <button className="reactButton" style={styles.buttonStyle} onClick={() => onClick()} >
        {component}
      </button>
    )
  }
}

export default Button;

const styles = {
  buttonStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    //border: 'none',
    marginTop: 0,
    paddingTop: 0,
  },
}
