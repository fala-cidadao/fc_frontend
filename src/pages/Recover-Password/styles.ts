import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};

  & img {
    width: 300px;
    margin-bottom: 30px;
  }

  @media screen and (max-height: 640px) {
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .title {
    width: 700px;
    margin-bottom: 50px;
    text-align: center;
  }

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
    width: 400px;
    border-radius: 15px;
    font-size: 16px;
  }

  & input:focus {
    border: none;
    outline: none;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
  }

  & button {
    background: ${(props) => props.theme.colors.success};
    width: 300px;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.background};
    margin-top: 40px;
  }

  @media screen and (max-width: 660px) {
    & .title {
      width: 80%;
    }

    & input {
      width: 300px;
    }
  }
`;
