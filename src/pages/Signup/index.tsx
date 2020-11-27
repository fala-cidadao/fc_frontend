import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';

import { Container, Form, OptionBox } from './styles';
import img from '../../assets/Web/PNG/city_buildings_two_color.png';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { NavLink, useHistory } from 'react-router-dom';
import { isLogged } from '../../utils/auth';
import { api } from '../../service/api';

const Signup: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLogged()) history.push('/dashboard');
  });

  function handleRegister() {
    setLoading(true);
    if (email && name && phone && password === confirmPassword) {
      api
        .register(name, email, password, 'admin', phone)
        .then(() => {
          history.push('/login');

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Container>
      <Form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleRegister();
        }}
      >
        <h1 className='title'>Realizar Cadastro</h1>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insira um nome'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insira um email'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insira um telefone'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />
        </div>
        <div>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Insira uma senha'
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
        <div>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Confirme sua senha'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
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
          disabled={!email || !password || !confirmPassword || !phone}
          type='submit'
          className={`button ${loading ? 'is-loading' : ''}`}
        >
          Cadastrar
        </button>
        <OptionBox>
          <NavLink to='login'>Já tenho uma conta.</NavLink>
        </OptionBox>
      </Form>
      <img alt='imagem' src={img}></img>
    </Container>
  );
};

export default Signup;
