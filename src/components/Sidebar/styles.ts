import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  height: 100vh;
  background: #caf0c1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .active {
    display: flex;
    justify-content: center;
    width: 100%;
    border-left: 5px solid white;
    border-radius: 5px;
    padding: 10px 0;
  }

  @media screen and (max-width: 900px) {
    position: fixed;
    width: 100%;
    height: 0;
    padding: 70px 20px;
    border-radius: 0px 0px 0px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & FaThList {
      size: 100;
    }
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-top: 16px;
    font-size: 20px;
  }

  @media screen and (max-width: 900px) {
    & p {
      font-size: 16px;
      margin-top: 12px;
    }
  }
`;
