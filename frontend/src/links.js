import React from 'react';
import {FaCodeBranch, FaCode, FaUserSecret, FaFileAlt} from 'react-icons/fa';

export const links = [
  {
    path: '/projects',
    title: 'Projects',
    icon: <FaCodeBranch size={'100%'} className='icon' />,
  },
  {
    path: "/techstack",
    title: "Techs",
    icon: <FaCode size={'100%'} className="icon" />,
  },
  {
  path:"/cv",
  title:"CV",
  icon: <FaFileAlt size={'100%'} className="icon" />,
  },
  {
    path:"/about",
    title:"About",
    icon: <FaUserSecret size={'100%'} className="icon" />,
  },
]
