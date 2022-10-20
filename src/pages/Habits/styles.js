import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 110px 20px;
  height: 100vh;

  overflow: scroll;

  background-color: var(--background);
`;

export const Title = styled.p`
  color: var(--blue-100);
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
`;

export const Text = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: var(--text-historic);
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;