import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaGit,
  FaDocker,
  FaLinux,
  FaPython,
  FaRobot,
  FaFirefox,
  FaPhp,
  FaWindows,
  FaRaspberryPi,
} from 'react-icons/fa';
import {
  DiVisualstudio,
  DiScala,
  DiDart,
  DiPhotoshop,
  DiMysql,
} from 'react-icons/di';
import {GiCircuitry} from 'react-icons/gi';

export const frontendTechs = [
  {
    title: 'Reactjs',
    icon: <FaReact size={'100%'} className='icon' />,
    content: 'The page you are looking for is made with React.',
  },
  {
    title: 'React Native',
    icon: <FaReact size={'100%'} className='icon' />,
    content: 'Something about React Native',
  },
  {
    title: 'Dart/Flutter',
    icon: <DiDart size={'100%'} className='icon' />,
    content: 'Something about Flutter',
  },
];

export const backendTechs = [
  {
    title: 'Node.js',
    icon: <FaNodeJs size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Java',
    icon: <FaJava size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Scala',
    icon: <DiScala size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'MySQL',
    icon: <DiMysql size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'PHP',
    icon: <FaPhp size={'100%'} className='icon' />,
    content: '',
  },
];

export const testTechs = [
  {
    title: 'Python',
    icon: <FaPython size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Selenium',
    icon: <FaFirefox size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'SikuliX',
    icon: <FaRobot size={'100%'} className='icon' />,
  content: '',
  },
  {
    title: 'RobotFramework',
    icon: <FaRobot size={'100%'} className='icon' />,
    content: '',
  },
]

export const platforms = [
  {
    title: 'AWS',
    icon: <FaAws size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Linux',
    icon: <FaLinux size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Windows',
    icon: <FaWindows size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Raspberry Pi',
    icon: <FaRaspberryPi size={'100%'} className='icon' />,
    content: '',
  },
];

export const embeddedTechs = [
  {
    title: 'C',
    icon: <GiCircuitry size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'C++',
    icon: <GiCircuitry size={'100%'} className='icon' />,
    content: '',
  },
]

export const toolStack = [
  {
    title: 'Git',
    icon: <FaGit size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Docker',
    icon: <FaDocker size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'VS Codium',
    icon: <DiVisualstudio size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: 'Photoshop',
    icon: <DiPhotoshop size={'100%'} className='icon' />,
    content: '',
  },
]
