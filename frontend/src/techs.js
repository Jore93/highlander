import React from 'react';
import {FaReact, FaNodeJs, FaJava, FaJedi, FaAws, FaGit, FaDocker, FaDashcube, FaLinux, FaGlobe, FaPython, FaRobot, FaFirefox, FaPhp, FaWindows, FaRaspberryPi} from 'react-icons/fa';
import {DiVisualstudio, DiScala, DiCode, DiDart, DiPhotoshop, DiMysql} from 'react-icons/di';
import {GiCircuitry} from 'react-icons/gi';

export const frontendTechs = [
  {
    name: 'Reactjs',
    icon: <FaReact size={'100%'} className='icon' />,
  },
  {
    name: 'React native',
    icon: <FaReact size={'100%'} className='icon' />,
  },
  {
    name: 'Dart/Flutter',
    icon: <DiDart size={'100%'} className='icon' />,
  },
];

export const backendTechs = [
  {
    name: 'Node.js',
    icon: <FaNodeJs size={'100%'} className='icon' />,
  },
  {
    name: 'Java',
    icon: <FaJava size={'100%'} className='icon' />,
  },
  {
    name: 'Scala',
    icon: <DiScala size={'100%'} className='icon' />,
  },
  {
    name: 'MySQL',
    icon: <DiMysql size={'100%'} className='icon' />,
  },
  {
    name: 'PHP',
    icon: <FaPhp size={'100%'} className='icon' />,
  },
];

export const testTechs = [
  {
    name: 'Python',
    icon: <FaPython size={'100%'} className='icon' />,
  },
  {
    name: 'Selenium',
    icon: <FaFirefox size={'100%'} className='icon' />,
  },
  {
    name: 'SikuliX',
    icon: <FaRobot size={'100%'} className='icon' />,
  },
  {
    name: 'RobotFramework',
    icon: <FaRobot size={'100%'} className='icon' />,
  },
]

export const platforms = [
  {
    name: 'AWS',
    icon: <FaAws size={'100%'} className='icon' />,
  },
  {
    name: 'Linux',
    icon: <FaLinux size={'100%'} className='icon' />,
  },
  {
    name: 'Windows',
    icon: <FaWindows size={'100%'} className='icon' />,
  },
  {
    name: 'Raspberry Pi',
    icon: <FaRaspberryPi size={'100%'} className='icon' />,
  },
];

export const embeddedTechs = [
  {
    name: 'C',
    icon: <GiCircuitry size={'100%'} className='icon' />,
  },
  {
    name: 'C++',
    icon: <GiCircuitry size={'100%'} className='icon' />,
  },
]

export const toolStack = [
  {
    name: 'Git',
    icon: <FaGit size={'100%'} className='icon' />,
  },
  {
    name: 'Docker',
    icon: <FaDocker size={'100%'} className='icon' />,
  },
  {
    name: 'VS Codium',
    icon: <DiVisualstudio size={'100%'} className='icon' />,
  },
  {
    name: 'Photoshop',
    icon: <DiPhotoshop size={'100%'} className='icon' />,
  },
]
