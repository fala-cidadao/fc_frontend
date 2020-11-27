import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IStatus extends HTMLAttributes<HTMLElement> {
  status: string;
}

interface IRole extends HTMLAttributes<HTMLElement> {
  role: string;
}

export const StatusBox = styled.div<IStatus>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  & div {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: inline-flex;
    margin-right: 10px;
    background-color: ${(props) =>
      props.status === 'Em andamento'
        ? 'blue'
        : props.status === 'Concluido'
        ? 'green'
        : props.status === 'Em Analise'
        ? 'red'
        : 'yellow'};
  }

  & span {
    color: ${(props) =>
      props.status === 'Em andamento'
        ? 'blue'
        : props.status === 'Concluido'
        ? 'green'
        : props.status === 'Em Analise'
        ? 'red'
        : 'yellow'};
  }

  & button {
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.primary};
  }

  & button:hover {
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.contrast};
  }
`;

export const ImagesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 15px;
  gap: 10px;
  flex-wrap: wrap;
  & img {
    width: 200px;
    height: 150px;
    border-radius: 5px;
    flex-basis: 30%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CommentariesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: 200px;
  overflow-y: auto;
  width: 100%;
`;

export const Comment = styled.div<IRole>`
  margin: 10px 0px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: Column;
  width: 100%;
  text-align: ${(props) => (props.role === 'admin' ? 'right' : 'left')};
  background-color: ${(props) =>
    props.role === 'admin' ? '#F6D55C' : '#ED553B'};
    color: ${(props) => (props.role === 'admin' ? 'black' : 'white')};
`;