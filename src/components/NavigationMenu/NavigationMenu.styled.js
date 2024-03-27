import styled from "styled-components";

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
