import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/Web/PNG/Fala.png';
import { api } from '../../service/api';
import { Container, Form } from './styles';

const RequestRecoverPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const history = useHistory();

  function handleRequest() {
    api.requestRecoverPassword(email).then((res) => {
      if (res) history.push('/');
    });
  }

  return (
    <Container>
      <img src={logo} />
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleRequest();
        }}
      >
        <h1 className='title'>
          Será enviado um link para o email informado, onde será possível
          inserir sua nova senha!
        </h1>
        <h1 className='subtitle'>
          Cuidado, esse link é temporário. Sendo assim, não deixe pra depois!
        </h1>
        <div className='control'>
          <input
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            type='email'
            className='input'
            placeholder='Insira seu email de cadastro'
          />
        </div>
        <button type='submit' className='button'>
          Solicitar
        </button>
      </Form>
    </Container>
  );
};

export default RequestRecoverPassword;
