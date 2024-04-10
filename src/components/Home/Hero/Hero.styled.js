import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const Main = styled.div`
  padding-left: 5%;
  padding-right: 10%;

  @media screen and (min-width: 1440px) {
    padding-left: 64px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  color: ${(props) => props.theme.colors.text.primary};
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-family: var(--medium);

  & span {
    font-family: var(--italic);
    padding: 0 5px;
    display: inline-block;
    position: relative;
  }

  & span::after {
    content: "";
    background-color: #fbe9ba;
    position: absolute;
    top: 20%;
    bottom: 10%;
    left: 0;
    right: 0;
    border-radius: 10px;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    font-size: 48px;
  }
`;

export const Text = styled.p`
  margin-bottom: 32px;

  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 470px;
    margin-bottom: 64px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  margin-bottom: 32px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;

  background-color: ${(props) => props.theme.colors.accent.primary};
  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--bold);
  font-size: 18px;
  line-height: 1.56;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accent.secondary};
  }
`;
export const ImageWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 568px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
