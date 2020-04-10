import React from 'react'
import {IconBaseProps} from 'react-icons';

interface ModalInterface {
  title: string,
  content: string,
  icon: IconBaseProps,
}

class Modal extends React.Component<ModalInterface, {}> {
  render() {
    const {title, content, icon} = this.props;
    return (
      <div>
        {icon}
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Modal;
