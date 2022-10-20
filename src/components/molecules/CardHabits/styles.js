import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  height: 91px;
  background-color: var(--white);
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;

  h1 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: var( --text-historic);
    margin-bottom: 5px;
  }

  svg {
    height: 15px;
    width: 13px;
    color: var( --text-historic);
  }

  span {
    margin-right: 5px;
  }

  .divName{
    display: flex;
    justify-content: space-between;
  }
  
`;