import React, { ChangeEvent, FormEvent, useState } from 'react';

import { store } from 'react-notifications-component';

import logo from '../../assets/Web/PNG/Fala.png';
import { Container, Form } from './styles';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../../service/api';

interface IParams {
  token: string;
}

const RecoverPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(
    false
  );

  const { token } = useParams<IParams>();
  const history = useHistory();

  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  function handleRecover() {
    if (password !== passwordConfirm) {
      store.addNotification({
        title: 'Falha',
        message: 'As duas senhas precisam ser idênticas.',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });
    } else {
      api.recoverPassword(password, token).then((res) => {
        if (res) history.push('/login');
      });
    }
  }

  return (
    <Container>
      <img alt='imagem' src={logo} />
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleRecover();
        }}
      >
        <h1 className='title'>
          Digite uma nova senha e volte a fazer parte da corrente em busca de
          cidades melhores!
        </h1>
        <div className='control'>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={showPassword ? 'text' : 'password'}
              placeholder='Insira sua nova senha'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className='icon is-small is-right'
            >
              <Icon
                icon={showPassword ? bxsHide : bxShow}
                style={{ color: '#545F6B, 100%', fontSize: '25px' }}
              />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirme sua nova senha'
              value={passwordConfirm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className='icon is-small is-right'
            >
              <Icon
                icon={showConfirmPassword ? bxsHide : bxShow}
                style={{ color: '#545F6B, 100%', fontSize: '25px' }}
              />
            </span>
          </p>
        </div>
        <button className='button'>Alterar Senha</button>
      </Form>
    </Container>
  );
};

export default RecoverPassword;
