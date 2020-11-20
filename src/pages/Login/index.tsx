import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Container, Form, OptionBox } from './styles';
import img from '../../assets/Web/PNG/city_buildings_two_color.png';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { api } from '../../service/api';
import { useHistory } from 'react-router-dom';
import { isLogged } from '../../utils/auth';

const Login: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    if (isLogged()) history.push('/dashboard');
  });

  function handleLogin() {
    setLoading(true);
    api.login(email, password).then((res) => {
      if (res) {
        history.push('/dashboard/problems');
      } else {
        setPassword('');
        setLoading(false);
      }
    });
  }

  return (
    <Container>
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (password && email) handleLogin();
        }}
      >
        <h1 className='title'>Realizar Login</h1>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insira o e-mail cadastrado'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Insira sua senha'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
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
        <button
          disabled={!email || !password}
          title={
            !email || !password ? 'Por favor preencha todos os campos' : ''
          }
          type='submit'
          className={`button ${loading ? 'is-loading' : ''}`}
        >
          Entrar
        </button>
        <OptionBox>
          <a>Sou cidadão!</a>
          <a href='/signup'>Realizar cadastro.</a>
        </OptionBox>
      </Form>
      <img alt='imagem' src={img}></img>
    </Container>
  );
};

export default Login;
