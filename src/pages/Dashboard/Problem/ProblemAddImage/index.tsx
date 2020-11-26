import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IProblem } from '../../../../@types/problems';
import { api } from '../../../../service/api';
import { store } from 'react-notifications-component';

import { StatusBox, ImagesBox, CommentariesBox } from '../common.styles';

import { Container, InfoBox } from './styles';

import { Icon } from '@iconify/react';
import bxSend from '@iconify/icons-bx/bx-send';
import FileBase64 from 'react-file-base64';

interface IParam {
  id: string;
}

const ProblemAddImage: React.FC = () => {
  const [problem, setProblem] = useState<IProblem>({
    _id: '',
    title: '',
    createdAt: '',
    category: '',
    author: '',
    status: '',
    comments: [],
    adminImages: [],
    userImages: [],
    description: '',
    location: {
      latitude: 0,
      longitude: 0
    }
  });
  const [comment, setComment] = useState<string>('');

  const { id } = useParams<IParam>();
  const history = useHistory();

  useEffect(() => {
    console.log(id);
    api
      .getProblem(id)
      .then((res) => {
        setProblem(res);
      })
      .catch(() => {
        history.push('/dashboard/problems');
      });
  }, [id]);

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

  function uploadFiles(files) {
    console.log(files.map((file) => file.base64));
    problem.adminImages = problem.adminImages.concat(
      files.map((file) => file.base64)
    );

    api.updateProblem(id, problem).then((problem) => {
      store.addNotification({
        title: 'Sucesso',
        message: 'Imagens enviadas com sucesso!',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });
      setProblem(problem);
    });
  }

  return (
    <Container>
      <h1 className='title'>{problem.title}</h1>
      <StatusBox status={problem.status}>
        <span>
          <div />
          {problem.status}
        </span>
      </StatusBox>
      <InfoBox>
        <p>{problem.description}</p>
        <div>
          <FileBase64 multiple={true} onDone={(files) => uploadFiles(files)} />
        </div>
      </InfoBox>
      <h3 className='subtitle'>Imagens adicionadas pelo cidadão</h3>
      <ImagesBox>
        {problem.userImages.map((image, index) => (
          <img key={index} src={image} alt='problem'></img>
        ))}
      </ImagesBox>

      <h3 className='subtitle'>Imagens adicionadas pelo admnistrador</h3>
      <ImagesBox>
        {problem.adminImages.map((image, index) => (
          <img key={index} src={image} alt='solved'></img>
        ))}
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
        {problem.comments.map((elem, index) => {
          return (
            <div key={index}>
              <span>{elem.owner}</span>
              <p>{elem.text}</p>
            </div>
          );
        })}
      </CommentariesBox>
    </Container>
  );
};

export default ProblemAddImage;
