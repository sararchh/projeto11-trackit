import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  max-width: 375px;
  width: 375px;
  height: 70px;
  border-radius: 0px;

  background-color: var(--white);
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  p {
    color: var(--blue-100);
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
  }

  .CircularProgressbar {
    height: 91px;
    width: 91px;

    position: fixed;
    bottom: 10px;
    left: 145px;
  }
`;

