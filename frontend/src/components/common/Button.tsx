import React from 'react'

interface ButtonProps {
  component: JSX.Element,
  onClick: Function,
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {component, onClick} = this.props;
    return (
      <button onClick={() => onClick()} className="reactButton">
        {component}
      </button>
    )
  }
}

export default Button;
