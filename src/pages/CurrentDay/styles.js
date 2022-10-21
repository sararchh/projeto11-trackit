import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 110px 20px;
  height: 100vh;

  overflow: scroll;

  background-color: var(--background);
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: var(--text-today);
    margin-bottom: 15px;
  }
`;

export const Title = styled.h3`
  color: var(--blue);
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
`;
