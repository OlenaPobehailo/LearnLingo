import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 28px;
  }

  @media (max-width: 480px) {
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: var(--regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121417;

  &:hover,
  &:focus {
    color: #f4c550;
  }

  &.active {
    font-weight: bold;
    color: #f4c550;
  }
`;
