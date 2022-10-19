import styled from 'styled-components';


export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  max-width: 375px;
  width: 375px;
  height: 70px;
  
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    font-family: 'Playball', cursive;
    line-height: 49px;
    color: var(--white);
  }

  img {
    height: 51px;
    width: 51px;

    background-size: cover;
    object-fit: cover;
    border-radius: 98.5px;
  }
`;
