import styled from 'styled-components';
import bg from '../../assets/Web/PNG/bg.png';
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  & img {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  & button:disabled {
    color: ${(props) => props.theme.colors.success};
  }
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;

  & a {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
    margin-top: 15px;
  }
`;
