import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  margin: 0 auto;
  outline: 1px solid green;

  min-width: 320px;
  max-width: 100%;
  padding: 0 5vw;

  margin: 0 auto;

  /* @media screen and (min-width: 320px) {
    width: 320px;
  } */

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const GreyWrapper = styled.div`
  background: #f8f8f8;
`;
