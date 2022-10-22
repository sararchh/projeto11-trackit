import styled from 'styled-components';

export const Container = styled.div`
  min-height: 94px;
  height: 94px;
  width: 340px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  background-color: var(--white);

  h1 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: var(--text-historic);
  }

  .cardInfo {
    margin-top: 8px;
  }

  svg {
    color: var(--white);
    width: 35px;
    height: 28px;
  } 

  
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: var(--text-historic);

  span {
    color: ${({ currentAndHighSequence }) => currentAndHighSequence ? 'var(--green)' : 'var(--text-historic)'};
  }
`;

export const ButtonConfirm = styled.button`
  height: 69px;
  width: 69px;

  background: ${({ confirmHabit, done }) => confirmHabit || done ? 'var(--green)' : 'var(--gray-200)'};
  border: 1px solid #E7E7E7;
  border-radius: 5px;
`