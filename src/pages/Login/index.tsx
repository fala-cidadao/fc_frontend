import React, { useState } from 'react';

import { Container, Form, OptionBox } from './styles';
import img from '../../assets/Web/PNG/city_buildings_two_color.png';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';

const Login: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <Form>
        <h1 className='title'>Realizar Login</h1>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insira o e-mail cadastrado'
          />
        </div>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Insira sua senha'
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
        <button className='button'>Entrar</button>
        <OptionBox>
          <a>Sou cidadão!</a>
          <a>Realizar cadastro.</a>
        </OptionBox>
      </Form>
      <img src={img}></img>
    </Container>
  );
};

export default Login;
