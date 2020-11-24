import React, { useState } from 'react';

import { Container, Form, OptionBox } from './styles';
import img from '../../assets/Web/PNG/city_buildings_two_color.png';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { NavLink } from 'react-router-dom';

const Signup: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <Form>
        <h1 className='title'>Realizar Cadastro</h1>
        <div className='control'>
          <input className='input' type='text' placeholder='Insira um nome' />
        </div>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Escolha seu estado'
          />
        </div>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Escolha a cidade que representa'
          />
        </div>
        <div className='control'>
          <input className='input' type='text' placeholder='Insira um email' />
        </div>
        <div>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Insira uma senha'
            />
            <span
              onClick={() => setShow((prev) => !prev)}
              className='icon is-small is-right'
            >
              <Icon
                icon={show ? bxsHide : bxShow}
                style={{ color: '#545F6B, 100%', fontSize: '25px' }}
              />
            </span>
          </p>
        </div>
        <div>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Confirme sua senha'
            />
            <span
              onClick={() => setShow((prev) => !prev)}
              className='icon is-small is-right'
            >
              <Icon
                icon={show ? bxsHide : bxShow}
                style={{ color: '#545F6B, 100%', fontSize: '25px' }}
              />
            </span>
          </p>
        </div>
        <button className='button'>Cadastrar</button>
        <OptionBox>
          <NavLink to='login'>Já tenho uma conta.</NavLink>
        </OptionBox>
      </Form>
      <img alt='imagem' src={img}></img>
    </Container>
  );
};

export default Signup;
