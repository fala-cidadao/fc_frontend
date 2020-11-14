import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 70px;

  .bell {
    background-color: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.success};
    width: 45px;
    height: 45px;
    padding: 5px;
    border-radius: 7px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-left: 15px;
  color: black;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0 0;
`;

export const Select = styled.select`
  border: none;
  background: none;
  font-size: 16px;
`;
