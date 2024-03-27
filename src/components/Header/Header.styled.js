import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
  padding: 0 4%;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);

  z-index: 1;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  gap: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const AuthMenu = styled.ul``;
