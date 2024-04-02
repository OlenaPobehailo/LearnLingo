import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 16px;

  font-family: var(--medium);
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    font-size: 36px;

  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    font-size: 40px;
  }
`;

export const Text = styled.h2`
  margin-bottom: 40px;

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.375;
  color: rgba(18, 20, 23, 0.8);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 54px;
  margin-bottom: 18px;
  padding: 16px 18px;

  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;

  &:last-child {
    margin-bottom: 40px;
  }

  &::placeholder {
    color: #121417;

    font-family: var(--regular);
    font-size: 16px;
    line-height: 1.375;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  padding: 16px;
  border-radius: 12px;

  background: #f4c550;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;
