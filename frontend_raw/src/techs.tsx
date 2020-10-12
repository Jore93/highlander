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
import {TEXT_COLOR} from './assets/constants';


const styles: Record<string, React.CSSProperties> = {
  headerStyle: {
    textAlign: 'center',
    wordWrap: 'break-word',
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  }
};


export const frontendTechs = [
  {
    title: <h2 style={styles.headerStyle}>Reactjs</h2>,
    icon: <FaReact size={'100%'} className='icon' />,
    content: 'The page you are looking for is made with React.',
  },
  {
    title: <h2 style={styles.headerStyle}>React Native</h2>,
    icon: <FaReact size={'100%'} className='icon' />,
    content: 'Something about React Native',
  },
  {
    title: <h2 style={styles.headerStyle}>Flutter</h2>,
    icon: <DiDart size={'100%'} className='icon' />,
    content: 'Something about Flutter',
  },
];

export const backendTechs = [
  {
    title: <h2 style={styles.headerStyle}>Node.js</h2>,
    icon: <FaNodeJs size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Java</h2>,
    icon: <FaJava size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Scala</h2>,
    icon: <DiScala size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>MySQL</h2>,
    icon: <DiMysql size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>PHP</h2>,
    icon: <FaPhp size={'100%'} className='icon' />,
    content: '',
  },
];

export const testTechs = [
  {
    title: <h2 style={styles.headerStyle}>Python</h2>,
    icon: <FaPython size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Selenium</h2>,
    icon: <FaFirefox size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>SikuliX</h2>,
    icon: <FaRobot size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Robot&#8203;Framework</h2>,
    icon: <FaRobot size={'100%'} className='icon' />,
    content: '',
  },
]

export const platforms = [
  {
    title: <h2 style={styles.headerStyle}>AWS</h2>,
    icon: <FaAws size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Linux</h2>,
    icon: <FaLinux size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Windows</h2>,
    icon: <FaWindows size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Raspberry Pi</h2>,
    icon: <FaRaspberryPi size={'100%'} className='icon' />,
    content: '',
  },
];

export const embeddedTechs = [
  {
    title: <h2 style={styles.headerStyle}>C</h2>,
    icon: <GiCircuitry size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>C++</h2>,
    icon: <GiCircuitry size={'100%'} className='icon' />,
    content: '',
  },
]

export const toolStack = [
  {
    title: <h2 style={styles.headerStyle}>Git</h2>,
    icon: <FaGit size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Docker</h2>,
    icon: <FaDocker size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>VS Codium</h2>,
    icon: <DiVisualstudio size={'100%'} className='icon' />,
    content: '',
  },
  {
    title: <h2 style={styles.headerStyle}>Photoshop</h2>,
    icon: <DiPhotoshop size={'100%'} className='icon' />,
    content: '',
  },
]
