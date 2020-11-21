import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  pointer-events: all;

  & .date {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
  }
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0 0;

  & h1 {
    font-size: 18px;
    color: black;
  }

  & h3 {
    color: black;
  }
`;
