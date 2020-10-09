import React from 'react';
import {FaCodeBranch, FaCode, FaUserSecret, FaFileAlt} from 'react-icons/fa';

const styles = {
  headerStyle: {
    textAlign: 'center',
    wordWrap: 'break-word',
  }
};

export const links = [
  {
    path: '/projects',
    title: <h2 style={styles.headerStyle}>Projects</h2>,
    icon: <FaCodeBranch size={'100%'} className='icon' />,
  },
  {
    path: "/techstack",
    title: <h2 style={styles.headerStyle}>Techs</h2>,
    icon: <FaCode size={'100%'} className="icon" />,
  },
  {
    path: "/cv",
    title: <h2 style={styles.headerStyle}>CV</h2>,
    icon: <FaFileAlt size={'100%'} className="icon" />,
  },
  {
    path: "/about",
    title: <h2 style={styles.headerStyle}>About</h2>,
    icon: <FaUserSecret size={'100%'} className="icon" />,
  },
];

