import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--blue-100);
  border-radius: 4.63636px;

  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  color: var(--white);
`;
