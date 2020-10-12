import React from 'react'
import {IconBaseProps} from 'react-icons';

import TechModal from './TechModal';
import Card from './common/Card';

interface TechItemInterface {
  title: JSX.Element,
  content: string,
  icon: IconBaseProps,
}

class TechItem extends React.Component<TechItemInterface, {}> {
  state = {modalIsOpen: false};

  openModal: Function = (title: string) => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    return (
      <div onClick={this.openModal.bind(this, this.props.title)} >
        <TechModal title={this.props.title} content={this.props.content} icon={this.props.icon} isOpen={this.state.modalIsOpen} />
        <Card content={this.props.title} icon={this.props.icon} />
      </div>
    );
  }
}

export default TechItem;
