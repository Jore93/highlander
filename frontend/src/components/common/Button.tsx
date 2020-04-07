import React from 'react'

interface ButtonProps {
  label: string,
  link: string,
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {label, link} = this.props;
    return (
      <a href={link}>
        {label}
      </a>
    )
  }
}

export default Button;
