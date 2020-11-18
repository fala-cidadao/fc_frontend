import React from 'react';

import logo from '../../assets/Web/PNG/Fala.png';
import gif from '../../assets/Web/City - Gif Home.gif';
import playStoreImg from '../../assets/Web/PNG/playStore.png';
import appStoreImg from '../../assets/Web/PNG/appStore.png';
import { Container, Body, Bottom } from './styles';
import { FaExclamationCircle } from 'react-icons/fa';

const Home = () => {

  return (
    <Container>
      <img className='logo' src={logo}/>
      <Body>
        <div className='gif-area'>
          <img className='gif' src={gif}/>
          <p className='credits'>Animação de Paul Tkachenko</p>
        </div>
        <div className='core'>
          <h1 className='title'>Vamos juntos melhorar sua cidade?</h1>
          <a className='login' href="/login">Login</a>
          <a href="/register">Cadastre-se</a>
        </div>
      </Body>
      <Bottom>
        <h2 className='subtitle'>A idéia por trás desse sistema é ajudar gestores e cidadãos!</h2>
        <h2 className='warning'> <FaExclamationCircle className='icon-warning' size={50} color="DE5F61" />Esse site é apenas voltado para os administradores das cidades!</h2>
        <h2 className='subtitle'>Você, cidadão, é preciso realizar o download do aplicativo para o seu celular e fazer uso da nossa plataforma!</h2>
        <div className='platforms'>
          <img src={appStoreImg}/>
          <img src={playStoreImg}/>
        </div>
      </Bottom>
      <p>© Copyright 2020</p>
    </Container>
  );
};

export default Home;