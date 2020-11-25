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
  const user = JSON.parse(localStorage.getItem('user') || '');

  return (
    <Container>
      <ProfileInformation>
        <FaUserCircle className='user-picture' size={70} color='000' />
        <p>Olá, {user.name}</p>
      </ProfileInformation>
      <NavLink exact to='/dashboard/problems' activeClassName='active'>
        {' '}
        <FaThList className='list-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink to='/dashboard/map' activeClassName='active'>
        {' '}
        <FaCity className='city-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink to='/dashboard/user-config' activeClassName='active'>
        {' '}
        <FaCog className='config-icon' size={40} color='000' />{' '}
      </NavLink>
      <NavLink exact to='/' onClick={() => localStorage.clear()}>
        {' '}
        <FaSignOutAlt className='signout-icon' size={40} color='000' />{' '}
      </NavLink>
    </Container>
  );
}

export default Sidebar;
