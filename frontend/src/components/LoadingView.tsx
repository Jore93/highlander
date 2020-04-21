import React from 'react';

import {ReactComponent as ReactLogo} from '../assets/graphics/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled(ReactLogo)`
height:25rem;
width:25rem;
display:block;
margin:auto;
`

class LoadingView extends React.Component {
  render() {
    return (
      <div className='Logo-container'>
        <StyledLogo />
      </div>
    );
  }
}

export default LoadingView;
