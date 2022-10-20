import styled from 'styled-components';

export const Container = styled.div`
  span {
    display: flex;
  }
`;

export const Input = styled.input`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  background: var(--white);
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  color: var(--text);
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;

  padding: 7px;
  margin: 5px 0;

  &:disabled {
    background: var(--disabled);
    color: var(--text-disabled);
  }
`;
