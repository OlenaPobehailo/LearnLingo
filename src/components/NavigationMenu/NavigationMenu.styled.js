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
