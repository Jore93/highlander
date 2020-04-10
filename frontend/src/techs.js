import React from 'react';
import {FaReact, FaNodeJs, FaJava, FaJedi, FaAws} from 'react-icons/fa';

export const frontendTechs = [
  {
    name: 'Reactjs',
    icon: <FaReact size={'100%'} className="icon" />,
  },
  {
    name: 'React native',
    icon: <FaReact size={'100%'} className="icon" />,
  }
];

export const backendTechs = [
  {
    name: 'Node.js',
    icon: <FaNodeJs size={'100%'} className="icon" />,
  },
  {
    name: 'Java',
    icon: <FaJava size={'100%'} className='icon' />,
  },
  {
    name: 'Scala',
    icon: <FaJedi size={'100%'} className='icon' />,
  },
];

export const cloudTechs = [
  {
    name: 'AWS',
    icon: <FaAws size={'100%'} className='icon' />,
  }
];
