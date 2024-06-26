import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Register = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 20px;

  border-radius: 12px;

  background: #121417;
  color: #fff;

  font-family: var(--bold);
  line-height: 1.25;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent.primary};
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    height: 40px;
    padding: 14px 39px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 39px;
    width: 166px;
    height: 48px;
  }
`;

export const Login = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 14px 5px;

  font-family: var(--bold);
  line-height: 1.25;
  background: transparent;
  color: ${(props) => props.theme.colors.text.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent.primary};
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 20px;

  border-radius: 12px;

  background-color: ${(props) => props.theme.colors.accent.primary};
  color: #121417;

  font-family: var(--bold);
  line-height: 1.25;
  transition: background-color 0.3s ease;

  @media screen and (min-width: 768px) {
    width: fit-content;
    height: 40px;
    padding: 14px 39px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 39px;
    width: 166px;
    height: 48px;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accent.secondary};
  }
`;

export const Greeting = styled.span`
  color: #9fb7ce;
  font-family: var(--semibold);
  font-size: 16px;
  line-height: 1.25;
`;
