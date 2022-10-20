import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  min-height: 180px;
  height: 180px;
  
  background-color: var(--white);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  .marginInput {
    margin-left: 3px;
  }

  .buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;

    margin-top: 20px;
  }
`;

export const ButtonCancel = styled.button`
  font-size: 15.976px;
  line-height: 20px;

  margin-right: 20px;
  color: var(--blue-100);
`;

