import styled from "styled-components";

export const StyledInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  margin: 30px;
  gap: 30px;
  border-radius: 30px;

  border: 2px dashed #f4c550;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 120px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Value = styled.p`
  color: #121417;

  font-size: 16px;
  font-family: var(--medium);
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const Key = styled.p`
  width: 96px;

  font-size: 12px;
  font-family: var(--regular);
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
