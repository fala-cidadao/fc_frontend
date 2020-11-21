import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 150px;

  & input,
  & .field {
    width: 100%;
  }

  & input {
    background-color: ${(props) => props.theme.colors.contrast};
  }

  & .field span {
    color: ${(props) => props.theme.colors.success} !important;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 30px 0;
`;

interface IStatus extends HTMLAttributes<HTMLElement> {
  status: string;
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
      props.status === 'OnGoing' ? 'blue' : 'red'};
  }

  & span {
    color: ${(props) => (props.status === 'OnGoing' ? 'blue' : 'red')};
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
  & img {
    width: 200px;
    height: 150px;
    border-radius: 5px;
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
