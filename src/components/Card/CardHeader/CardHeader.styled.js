import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #8a8a89;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-right: 2px solid rgba(18, 20, 23, 0.2);

  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  line-height: 1.5;

  &:last-of-type {
    padding-right: 0;
    border: none;
    margin-right: 64px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heart = styled.svg`
  ${(props) =>
    props.isFavorite &&
    css`
      fill: red;
    `}
`;

export const Book = styled.svg`
  align-self: center;
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
