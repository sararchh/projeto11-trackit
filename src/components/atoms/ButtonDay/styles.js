import styled from 'styled-components';

export const Button = styled.button`
  width: 30px;
  height: 30px;

  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${({ daySelected }) => daySelected ? 'var(--white)' : 'var(--text)'} ;

  background-color: ${({ daySelected }) => daySelected && 'var(--day)'};

  border-radius: 5px;
  border: 1px solid #D4D4D4;
`;