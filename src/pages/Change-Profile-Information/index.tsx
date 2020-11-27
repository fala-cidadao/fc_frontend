import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

import { Bar, Form } from './styles';
import { Icon } from '@iconify/react';
import bxShow from '@iconify/icons-bx/bx-show';
import bxsHide from '@iconify/icons-bx/bxs-hide';
import { api } from '../../service/api';
import { useHistory } from 'react-router-dom';
import { User } from '../../@types/user';
import { store } from 'react-notifications-component';
import FileBase64 from 'react-file-base64';

const ChangeProfileInformation: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(
    false
  );

  const local = JSON.parse(localStorage.getItem('user') || '');

  const [photo, setPhoto] = useState<string>('')
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
        setName(res.name);
        setPhoto(res.image);
      })
      .catch(() => {
        history.push('/dashboard/problems')
      });
  }, [local.userId]);

  function updateSucess(){
    return (
      store.addNotification({
        title: 'Sucesso',
        message: 'Alterações realizadas com sucesso.',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      })
    )
  }

  function updateFail(message){
    return(
      store.addNotification({
        title: 'Falha',
        message: message,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      })
    )
  }

  async function handleUpdate(newName, newPassword, confirmPassword) {
    if (newName !== ""){
      if (newPassword === confirmPassword){
        if (newPassword.length >= 8){
          const userNew = {
            image: photo,
            id: user.id,
            name: newName,
            email: user.email,
            password: newPassword,
            role: user.role,
            phone: user.phone,
            createdAt: user.createdAt
          }
      
          await api.updateUser(local.userId, userNew)

          window.location.reload();
          
          updateSucess();
        } else if (password === "") {
          const userNew = {
            image: photo,
            id: user.id,
            name: newName,
            email: user.email,
            password: user.password,
            role: user.role,
            phone: user.phone,
            createdAt: user.createdAt
          }
          
          await api.updateUser(local.userId, userNew)

          window.location.reload();

          updateSucess();
        } else {
          updateFail('Quantidade de caracteres insuficientes (minimo 8 caracteres)');
        }
      } else {
        updateFail('As senhas estão diferentes');
      }
    } else {
      updateFail('Nome de usuário nulo');
    }
  }

  function uploadFile(file) {
    console.log(file);
    console.log(file.base64);
    setPhoto(file.base64);
  }

  return (
        <Form>
          <div className='image-container'>
            <img alt='imagem' className='user-picture' src={user.image} />
            <FileBase64 multiple={false} onDone={(file) => uploadFile(file)} />
          </div>
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
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
        <button type='submit' onClick={() => handleUpdate(name, password, confirmPassword)} className='button'>Salvar</button>
      </Form>
  );
};

export default ChangeProfileInformation;
