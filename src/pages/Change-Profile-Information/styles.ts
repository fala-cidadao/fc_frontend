import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & .sidebar {
    justify-content: center;
    height: 100%;
    position: fixed;
  }

  @media screen and (max-height: 500px){
    height: 100%;
    width: 100%;

    & .sidebar {
      height: 0;
    }
  }
`;

export const Bar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & hr {
    width: 650px;
  }

  & h1 {
    font-size: 18px;
  }

  @media screen and (max-width: 900px){
    & hr {
      width: 320px;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;

  & .control {
    margin: 5px;
    span {
      pointer-events: all !important;
      cursor: pointer;
    }
  }

  & input {
    padding: 10px;
    background: ${(props) => props.theme.colors.contrast};
    border: none;
    width: 300px;
    border-radius: 15px;
    font-size: 14px;
  }

  & input:focus {
    border: none;
    outline: none;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
  }

  & button {
    background: ${(props) => props.theme.colors.success};
    width: 300px;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.background};
    margin-top: 20px;
  }

  @media screen and (max-width: 900px){
    margin-left: 0;
  }

  @media screen and (max-height: 850px){
    margin-top: 300px;
  }
`;