import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import EyeIcon from "../../assets/icons/eye-off.svg?react";

export const Title = styled.h2`
  margin-bottom: 16px;

  font-family: var(--medium);
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.text.primary};

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

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
  height: 54px;
  padding: 16px 18px;

  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;

  &::placeholder {
    color: ${(props) => props.theme.colors.text.primary};

    font-family: var(--regular);
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const StyledEyeIcon = styled(EyeIcon)`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  padding: 16px;
  border-radius: 12px;

  background-color: ${(props) => props.theme.colors.accent.primary};
  transition: background-color 0.3s ease;

  font-family: var(--bold);
  font-size: 18px;
  line-height: 1.56;
  color: ${(props) => props.theme.colors.text.primary};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accent.secondary};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${(props) => props.theme.colors.accent.primary};
  position: relative;
  top: -18px;
`;
