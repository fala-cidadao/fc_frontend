import React, { useState } from 'react';

import { Container, Bar, Form } from './styles';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';

const ChangeProfileInformation: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const user = JSON.parse(localStorage.getItem('user') || '');

  return (
    <Container>
      <div className='sidebar'>
      </div>
      <Form>
        <img className='user-picture' src={user.image} />
        <Bar>
          <h1 className='subtitle'>Alterar nome<hr/></h1>
        </Bar>
        <input
          className='input'
          placeholder='Insira seu novo nome'
          defaultValue={user.name}
        />
        <Bar>
          <h1 className='subtitle'>Alterar senha<hr/></h1>
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
    </Container>
  );

};

export default ChangeProfileInformation;