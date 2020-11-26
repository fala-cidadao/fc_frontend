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