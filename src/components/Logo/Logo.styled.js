import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: var(--medium);
  font-size: 20px;

  & span {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
