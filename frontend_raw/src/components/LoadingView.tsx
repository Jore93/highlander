import React from 'react';

import {ReactComponent as ReactLogo} from '../assets/graphics/logo.svg';
import styled, {keyframes} from 'styled-components';

import {TEXT_COLOR, BACKGROUND_COLOR} from '../assets/constants';


const slideVertical = keyframes`
from {
  stroke: ${BACKGROUND_COLOR};
  transform: translateY(-100%);
}
to {
  stroke: ${TEXT_COLOR};
  transform: translateY(0%);
}
`

const slideDiagonal = keyframes`
0% {
  stroke: ${BACKGROUND_COLOR};
  transform: translate(-50%, -50%);
}
20% {
  stroke: ${BACKGROUND_COLOR};
  transform: translate(-50%, -50%);
}
21% {
  stroke: ${TEXT_COLOR};
}
100% {
  stroke: ${TEXT_COLOR};
  transform: translate(0%, 0%);
}
`

const drawTriangle = keyframes`
0% {
  stroke: ${TEXT_COLOR};
  stroke-dashoffset: 100%;
}
20% {
  stroke-dashoffset: 100%;
}
100% {
  stroke: ${TEXT_COLOR};
  stroke-dashoffset: 0;
}
`

const StyledLogo = styled(ReactLogo)`
height:50rem;
width:50rem;
display:block;
margin:auto;
.diagonal{
  animation: ${slideDiagonal} 4s forwards;
}
.triangle{
  animation: ${drawTriangle} 4s linear forwards;
}
.vertical{
  animation: ${slideVertical} 2s forwards;
}
`

class LoadingView extends React.Component {
  render() {
    return (
      <div style={styles.logoContainerStyle}>
        <StyledLogo />
      </div>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  logoContainerStyle: {
    textAlign: 'center',
    fontFamily: 'typewriter',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
}
export default LoadingView;
