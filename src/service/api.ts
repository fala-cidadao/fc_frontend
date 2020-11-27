import axios from 'axios';
import { store } from 'react-notifications-component';
import { IProblem } from '../@types/problems';
import { User } from '../@types/user';

let connection = axios.create({
  baseURL: 'https://es-fc-backend.herokuapp.com/'
});

export const api = {
  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection
        .post('auth/login', {
          email,
          password
        })
        .then((res) => {
          if (res.data.auth) {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            store.addNotification({
              title: 'Sucesso',
              message: 'Seja bem vindo ' + res.data.user.name,
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
            resolve(true);
          } else if (res.data.status === 404) {
            store.addNotification({
              title: 'Falha.',
              message: 'Usuário não encontrado, por favor reveja seus dados.',
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
            resolve(false);
          }
        })
        .catch(() => {
          store.addNotification({
            title: 'Falha',
            message: 'Falha ao tentar logar, por favor reveja seus dados.',
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
          resolve(false);
        });
    });
  },

  register(
    name: string,
    email: string,
    password: string,
    role: string,
    phone: string
  ): Promise<boolean> {
    console.log(name, email, password, role, phone)
    return new Promise((resolve, reject) => {
      connection
        .post('users', {
          name,
          email,
          password,
          role,
          phone
        })
        .then((res) => {

          store.addNotification({
            title: 'Cadastro realizado.',
            message: 'Sua conta foi criada com sucesso!',
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
          resolve(true);
        })
        .catch(() => {
          store.addNotification({
            title: 'Falha',
            message: 'Falha no cadastro, por favor tente novamente.',
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
          resolve(false);
        });
    });
  },

  listProblems(): Promise<IProblem[]> {
    return new Promise((resolve, reject) => {
      connection
        .get('problem')
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          store.addNotification({
            title: 'Falha',
            message:
              'Falha ao listar problemas, por favor tente novamente ou contate o suporte.',
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
          reject(err);
        });
    });
  },

  requestRecoverPassword(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection
        .post('auth/forgot', {
          email
        })
        .then(() => {
          store.addNotification({
            title: 'Sucesso',
            message:
              'Uma mensagem com os passos de como recuperar a senha foi enviada para seu e-mail.',
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
          resolve(true);
        })
        .catch((err) => {
          store.addNotification({
            title: 'Falha',
            message:
              'Falha ao listar problemas, por favor tente novamente ou contate o suporte.',
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
          reject(err);
        });
    });
  },

  recoverPassword(password: string, token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection
        .post(`rota/${token}`, {
          password
        })
        .then(() => {
          store.addNotification({
            title: 'Sucesso',
            message: 'Senha alterada com sucesso.',
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
          resolve(true);
        })
        .catch(() => {
          store.addNotification({
            title: 'Falha',
            message:
              'Falha ao alterar senha, por favor tente novamente ou contate o suporte.',
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
          resolve(false);
        });
    });
  },

  getProblem(id: string): Promise<IProblem> {
    console.log('id' + id);
    return new Promise((resolve, reject) => {
      connection
        .get(`problem/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          store.addNotification({
            title: 'Falha',
            message:
              'Falha ao recuperar problema, por favor tente novamente ou contate o suporte.',
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
          reject(err);
        });
    });
  },

  addComment(
    text: string,
    id: string,
    owner: string,
    role: string
  ): Promise<IProblem> {
    return new Promise((resolve, reject) => {
      connection
        .post(`problem/${id}/comment`, {
          owner,
          text,
          role,
          image: ''
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          store.addNotification({
            title: 'Falha',
            message:
              'Falha ao adicionar comentário, por favor tente novamente ou contate o suporte.',
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
          reject(err);
        });
    });
  },

  updateProblem(id: string, problem: IProblem): Promise<IProblem> {
    return new Promise((resolve) => {
      connection
        .put(`problem/${id}`, problem)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          store.addNotification({
            title: 'Fail',
            message: 'Algo deu errado',
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
        });
    });
  },

  getUser(id: string): Promise<User> {
    console.log('id: ' + id)
    return new Promise((resolve, reject) => {
      connection
        .get(`users/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err)
          store.addNotification({
            title: 'Falha',
            message: 'Falha ao recuperar usuário, por favor tente novamente ou contate o suporte.',
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
          reject(err);
        });
    });
  },

  updateUser(id: string, user: User): Promise<User>{
    console.log(user)
    return new Promise((resolve) => {
      connection
        .put(`users/${id}`, user)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          store.addNotification({
            title: 'Falha',
            message: 'Falha ao atualizar informações, por favor tente novamente ou contate o suporte.',
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
        });
    });
  }
};
