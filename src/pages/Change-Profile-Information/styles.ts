import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-height: 660px){
    height: 100%;
    margin-top: 50px;
  }
`;

export const ProfileInformation = styled.div`

`;

export const Bar = styled.div`
  margin-top: 30px;
  & hr {
    width: 700px;
  }

  & h1 {
    font-size: 18px;
  }

  @media screen and (max-width: 660px){
    & hr {
      width: 300px;
    }
  }
`;

export const Form = styled.div`
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
`;