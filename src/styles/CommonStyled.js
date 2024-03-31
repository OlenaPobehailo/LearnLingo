import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  margin: 0 auto;
  outline: 1px solid green;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const GreyWrapper = styled.div`
  background: #f8f8f8;
`;
