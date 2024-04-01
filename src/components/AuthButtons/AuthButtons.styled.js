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

  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;

  background: #121417;
  color: #fff;

  font-family: var(--bold);
  line-height: 1.25;

  @media screen and (max-width: 768px) {
    width: fit-content;
    height: 40px;
    padding: 14px 39px;


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
  color: #121417;
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;

  background: #f4c550;
  color: #121417;

  font-family: var(--bold);
  line-height: 1.25;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;

export const Greeting = styled.span`
  color: #9FB7CE;
  font-family: var(--semibold);
  font-size: 16px;
  line-height: 1.25;

  
`;
