import React, { useState, useEffect } from 'react';

import { ProfileInformation, Container } from './styles';
import {
  FaThList,
  FaCog,
  FaSignOutAlt,
  FaCity
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { User } from '../../@types/user';
import { api } from '../../service/api';

const Sidebar: React.FC = () => {
  const local = JSON.parse(localStorage.getItem('user') || '');

  const [user, setUser] = useState<User>({
    image: "",
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    createdAt: ""
  })

  useEffect(() => {
    api
      .getUser(local.userId)
      .then((res) => {
        setUser(res)
      });
  }, [local.userId]);

  return (
    <Container>
      <ProfileInformation>
        <img className='user-picture' src={user.image} />
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
      <NavLink to={`/dashboard/user-config/${local.userId}`} activeClassName='active'>
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
