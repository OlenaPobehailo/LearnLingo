import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  padding: 0 4%;

  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25); */
  z-index: 1;

  a {
    line-height: 1.25;
    color: #121417;
  }

`;
