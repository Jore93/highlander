import React from 'react'

interface ButtonProps {
  component: JSX.Element,
  link: string,
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {component, link} = this.props;
    return (
      <a href={link}>
        {component}
      </a>
    )
  }
}

export default Button;
