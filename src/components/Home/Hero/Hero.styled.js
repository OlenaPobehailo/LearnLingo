import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-bottom: 24px;
`;

export const Main = styled.div`
  padding-left: 64px;
  padding-right: 100px;
`;

export const Title = styled.h1`
  margin-bottom: 32px;

  color: #121417;

  font-family: var(--medium);
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;

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
`;

export const Text = styled.p`
  width: 470px;
  margin-bottom: 64px;

  color: #121417;

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;

  background: #f4c550;
  color: #121417;

  font-family: var(--bold);
  font-size: 18px;
  line-height: 1.56;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;

export const Image = styled.img`
  width: 568px;
`;
