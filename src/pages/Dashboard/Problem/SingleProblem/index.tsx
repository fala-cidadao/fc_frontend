import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IProblem } from '../../../../@types/problems';
import { api } from '../../../../service/api';
import { store } from 'react-notifications-component';

import { Container, InfoBox } from './styles';

import { StatusBox, ImagesBox, CommentariesBox } from '../common.styles';

import { Icon } from '@iconify/react';
import bxSend from '@iconify/icons-bx/bx-send';
import ImageModal from '../../../../components/ImageModal';

interface IParam {
  id: string;
}

const SingleProblem: React.FC = () => {
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
  const [image, setImage] = useState<string>('');
  const [showModal, ShowModal] = useState<boolean>(false);
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const { id } = useParams<IParam>();
  const history = useHistory();

  const statusList = ['Em andamento', 'Concluido', 'Em Espera', 'Em Analise'];

  useEffect(() => {
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

  async function handleChangeStatus() {
    if (!editStatus) {
      setEditStatus(!editStatus);
    } else {
      let newProblem = { ...problem };
      newProblem.status = status;
      api.updateProblem(id, newProblem).then((res) => {
        setProblem(res);
      });
      setEditStatus(false);
    }
  }

  return (
    <Container>
      <ImageModal showModal={ShowModal} image={image} show={showModal} />
      <h1 className='title'>{problem.title}</h1>
      <StatusBox status={problem.status}>
        {editStatus ? (
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setStatus(e.target.value)
            }
            value={status || statusList[0]}
          >
            {statusList.map((stat, i) => (
              <option key={i} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        ) : (
          <span>
            <div />
            {problem.status}
          </span>
        )}
        <button onClick={handleChangeStatus} className='button'>
          {editStatus ? 'Salvar' : 'Alterar Status'}
        </button>
      </StatusBox>
      <InfoBox>
        <p>{problem.description}</p>
      </InfoBox>
      {problem.userImages.length > 0 && (
        <h3 className='subtitle'>Imagens adicionadas pelo cidadão</h3>
      )}
      {problem.userImages.length > 0 && (
        <ImagesBox>
          {problem.userImages.map((image, index) => (
            <img
              onClick={() => {
                setImage(image);
                ShowModal(true);
              }}
              style={{ cursor: 'pointer' }}
              key={index}
              src={image}
              alt='problem'
            ></img>
          ))}
        </ImagesBox>
      )}
      {problem.adminImages.length > 0 && (
        <h3 className='subtitle'>Imagens adicionadas pelo admnistrador</h3>
      )}

      {problem.adminImages.length > 0 && (
        <ImagesBox>
          {problem.adminImages.map((image, index) => (
            <img
              onClick={() => {
                setImage(image);
                ShowModal(true);
              }}
              style={{ cursor: 'pointer' }}
              key={index}
              src={image}
              alt='problem'
            ></img>
          ))}
        </ImagesBox>
      )}
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
