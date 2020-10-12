import React from 'react';
import {FaCodeBranch, FaCode, FaUserSecret, FaFileAlt} from 'react-icons/fa';
import {TEXT_COLOR} from './assets/constants';

const styles: Record<string, React.CSSProperties> = {
  iconStyle: {
    color: TEXT_COLOR,
    backgroundColor: 'invisible',
    flex: 1,
  },
  headerStyle: {
    textAlign: 'center',
    wordWrap: 'break-word',
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  }
};

export const links = [
  {
    path: '/projects',
    title: <h2 style={styles.headerStyle}>Projects</h2>,
    icon: <FaCodeBranch size={'100%'} style={styles.iconStyle} />,
  },
  {
    path: "/techstack",
    title: <h2 style={styles.headerStyle}>Techs</h2>,
    icon: <FaCode size={'100%'} style={styles.iconStyle} />,
  },
  {
    path: "/cv",
    title: <h2 style={styles.headerStyle}>CV</h2>,
    icon: <FaFileAlt size={'100%'} style={styles.iconStyle} />,
  },
  {
    path: "/about",
    title: <h2 style={styles.headerStyle}>About</h2>,
    icon: <FaUserSecret size={'100%'} style={styles.iconStyle} />,
  },
  {
    path: "/admin",
    title: <h2 style={styles.headerStyle}>Admin</h2>,
    icon: <FaUserSecret size={'100%'} style={styles.iconStyle} />,
  },
];

