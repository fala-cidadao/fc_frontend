import React from 'react';

import { ProfileInformation, Container } from './styles';
import {
  FaUserCircle,
  FaThList,
  FaCog,
  FaSignOutAlt,
  FaCity
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <ProfileInformation>
        <FaUserCircle className='user-picture' size={70} color='000' />
        <p>Olá, Prefeito</p>
      </ProfileInformation>
      <NavLink to='problems' activeClassName='active'>
        {' '}
        <FaThList className='list-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink to='new-problem' activeClassName='active'>
        {' '}
        <FaCity className='city-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink to='user-config' activeClassName='active'>
        {' '}
        <FaCog className='config-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink exact to='/' onClick={() => localStorage.clear()}>
        {' '}
        <FaSignOutAlt className='signout-icon' size={40} color='000' />{' '}
      </NavLink>
    </Container>
  );
};

export default Sidebar;
