import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IProblem } from '../../../@types/problems';
import { api } from '../../../service/api';
import { store } from 'react-notifications-component';

import {
  Container,
  InfoBox,
  StatusBox,
  ImagesBox,
  CommentariesBox
} from './styles';

import { Icon } from '@iconify/react';
import bxSend from '@iconify/icons-bx/bx-send';

interface IParam {
  id: string;
}

const SingleProblem: React.FC = () => {
  const [problem, setProblem] = useState<IProblem>({
    _id: '',
    title: '',
    createdAt: '',
    sector: '',
    author: '',
    status: '',
    comments: [],
    image: '',
    description: '',
    location: {
      address: '',
      city: '',
      state: '',
      district: ''
    }
  });
  const [comment, setComment] = useState<string>('');

  const { id } = useParams<IParam>();
  const history = useHistory();

  useEffect(() => {
    api
      .getProblem(id)
      .then((res) => {
        setProblem(res);
      })
      .catch(() => {
        history.push('/dashboard/problems');
      });
  }, []);

  function sendCommentary() {
    if (comment !== '') {
      const user = JSON.parse(localStorage.getItem('user') || '');
      api.addComment(comment, id, user.userId, user.role).then((res) => {
        setProblem(res);
      });
      setComment('');
    } else {
      store.addNotification({
        title: 'Falha',
        message: 'Não é permitido adicionar um comentário vazio.',
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
    }
  }

  return (
    <Container>
      <h1 className='title'>{problem.title}</h1>
      <StatusBox status={problem.status}>
        <span>
          <div />
          {problem.status}
        </span>
        <button className='button'>Alterar Status</button>
      </StatusBox>
      <InfoBox>
        <p>{problem.description}</p>
        <p>
          {problem.location.city}/{problem.location.state}
          <br />
          Bairro: {problem.location.district}
          <br />
          Rua: {problem.location.address}
        </p>
      </InfoBox>
      <h3 className='subtitle'>Imagens adicionadas pelo cidadão</h3>
      <ImagesBox>
        <img src={problem.image} alt='imagem' />
      </ImagesBox>
      <div className='field'>
        <p className='control has-icons-right'>
          <input
            className='input'
            type={'text'}
            placeholder='Inserir novo comentário.'
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
          />
          <span
            style={{ pointerEvents: 'all', cursor: 'pointer' }}
            className='icon is-small is-right'
            onClick={sendCommentary}
          >
            <Icon
              icon={bxSend}
              style={{ color: '#0B6E4F, 100%', fontSize: '30px' }}
            />
          </span>
        </p>
      </div>
      <CommentariesBox>
        {problem.comments.map((elem) => {
          return (
            <>
              <span>{elem.owner}</span>
              <p>{elem.text}</p>
            </>
          );
        })}
      </CommentariesBox>
    </Container>
  );
};

export default SingleProblem;
