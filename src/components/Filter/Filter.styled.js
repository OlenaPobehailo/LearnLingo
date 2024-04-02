import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 96px;
    margin-bottom: 32px;
  }
`;

export const Languages = styled.div`
  width: 221px;
`;

export const Levels = styled.div`
  width: 198px;
`;

export const Price = styled.div`
  width: 124px;
`;

export const Title = styled.div`
  margin-bottom: 8px;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;
