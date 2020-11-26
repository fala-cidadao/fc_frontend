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
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-around;
  margin: 30px 0;
  width: 100%;
  p {
    word-wrap: break-word;
    width: 50%;
    margin-right: 10px;
  }

  div {
    width: 30%;
    input{
      padding: 50% 0;
      width: 100%;
      font-size: 1.25em;
      font-weight: 700;
      color: white;
      background-color: #CAF0C1;
      display: inline-block;
      border-style: dashed;
      border-color: black;
      border-width: 2px;
      border-radius: 20px;
    }
  }
`;