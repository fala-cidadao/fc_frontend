import React, { useState, useEffect, FormEvent } from 'react';

import { Bar, Form } from './styles';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { api } from '../../service/api';
import { useHistory } from 'react-router-dom';
import { User } from '../../@types/user';

const ChangeProfileInformation: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(
    false
  );

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
  
  const history = useHistory()

  useEffect(() => {
    api
      .getUser(local.userId)
      .then((res) => {
        setUser(res)
      })
      .catch(() => {
        history.push('/dashboard/problems')
      });
  }, [local.userId]);

  return (
      <Form>
        <img alt='imagem' className='user-picture' src={user.image} />
        <Bar>
          <h1 className='subtitle'>
            Alterar nome
            <hr />
          </h1>
        </Bar>
        <input
          className='input'
          placeholder='Insira seu novo nome'
          defaultValue={user.name}
        />
        <Bar>
          <h1 className='subtitle'>
            Alterar senha
            <hr />
          </h1>
        </Bar>
        <div className='control'>
          <p className='control has-icons-right'>
            <input
              className='input'
              type={showPassword ? 'text' : 'password'}
              placeholder='Insira sua nova senha'
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
        <button className='button'>Salvar</button>
      </Form>
  );
};

export default ChangeProfileInformation;
