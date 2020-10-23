import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};

  & .logo {
    width: 200px;
    margin-bottom: 50px;
  }

  & h2 {
    margin-top: 30px;
    text-align: center;
  }

  & .gif {
    max-width: 65%;
    min-width: 300px;
    border-radius: 80px 80px 160px 80px;
  }

  & p {
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (max-width: 660px){
    height: 100%;

    & .logo {
    margin-bottom: 0;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  
  & .gif-area, .core {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  & p {
    font-size: 12px;
    color: ${(props) => props.theme.colors.secondary};
  }

  & h1 {
    text-align: center;
  }

  & a {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
    margin-top: 10px;
  }

  & .login {
    background: ${(props) => props.theme.colors.success};
    width: 300px;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.background};
    padding: 5px 0 5px 0;
    text-align: center;
    font-size: 20px;
  }

  @media screen and (max-width: 660px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    & .core {
      margin-right: 0;
    }
    & .gif-area {
      margin: 10% 0;
    }
    & .gif {
      border-radius: 80px;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & .warning {
    display: flex;
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
    align-items: center;
  }

  & .icon-warning {
    margin-right: 10px;
  }

  & img {
    width: 200px;
  }

  & .platforms {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media screen and (max-width: 660px){
    & h2 {
      padding: 0 5%;
    }

    & .platforms {
      display: flex;
      flex-direction: column;
    }
  }
`;
