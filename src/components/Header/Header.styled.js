import styled from "styled-components";

export const StyledHeader = styled.div`
  margin: 0 auto;
  height: 12vh;

  min-width: 320px;
  max-width: 100%;
  padding: 0 5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 128px;
  }

  a {
    line-height: 1.25;
    color: #121417;
  }
`;
