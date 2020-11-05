import React from 'react';

import logo from '../../assets/Web/PNG/Fala.png';
import { Container, Form } from './styles';

const RequestRecoverPassword: React.FC = () => {

  return (
    <Container>
      <img src={logo}/>
      <Form>
        <h1 className='title'>Será enviado um link para o email informado, onde
        será possível inserir sua nova senha!</h1>
        <h1 className='subtitle'>Cuidado, esse link é temporário. Sendo assim, não deixe pra depois!</h1>
        <div className='control'>
          <input
            className='input'
            placeholder='Insira seu email de cadastro'
          />
        </div>
        <button className='button'>Solicitar</button>
      </Form>
    </Container>
  );
};

export default RequestRecoverPassword;