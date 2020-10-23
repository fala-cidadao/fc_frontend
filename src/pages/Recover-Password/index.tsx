import React, { useState } from 'react';

import logo from '../../assets/Web/PNG/Fala.png';
import { Container, Form } from './styles';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';

const RecoverPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <Container>
      <img src={logo}/>
      <Form>
        <h1 className='title'>Digite uma nova senha e volte a fazer parte da 
        corrente em busca de cidades melhores!</h1>
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
        <button className='button'>Alterar Senha</button>
      </Form>
    </Container>
  );
};

export default RecoverPassword;