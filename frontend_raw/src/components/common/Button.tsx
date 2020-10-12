import React from 'react'
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../../assets/constants';

interface ButtonProps {
  component: JSX.Element,
  onClick: Function,
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {component, onClick} = this.props;
    return (
      <button style={styles.buttonStyle} onClick={() => onClick()} >
        {component}
      </button>
    )
  }
}

export default Button;

const styles: Record<string, React.CSSProperties> = {
  buttonStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    //border: 'none',
    marginTop: 0,
    paddingTop: 0,
    color: TEXT_COLOR,
    fontSize: 22,
    fontFamily: 'saucer',
    fontWeight: 'lighter',
  },
}
