import React from 'react';

import { ProfileInformation, Container } from './styles';
import { FaUserCircle, FaThList, FaCog, FaSignOutAlt, FaCity } from 'react-icons/fa';

const Sidebar: React.FC = () => {

  return(
    <Container>
      <ProfileInformation>
        <FaUserCircle className='user-picture' size={70} color="000"/>
        <p>Olá, Prefeito</p>
      </ProfileInformation>
      <a href="problems"> <FaThList className="list-icon" size={40} color="000" /> </a>
      <a href="new-problem"> <FaCity className="city-icon" size={40} color="000" /> </a>
      <a href="user-config"> <FaCog className="config-icon" size={40} color="000" /> </a>
      <a href="signout"> <FaSignOutAlt className="signout-icon"  size={40} color="000" /> </a>
    </Container>
  );

};

export default Sidebar;