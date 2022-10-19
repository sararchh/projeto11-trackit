import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  width: 375px;

  height: 100vh;
  background-color: ${({ background }) => background ? background : 'var(--background)'};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;