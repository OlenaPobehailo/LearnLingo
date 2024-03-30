import styled from "styled-components";

export const StyledInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 40px 120px;
  border-radius: 30px;

  border: 2px dashed #f4c550;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Value = styled.p`
  color: #121417;
  
  font-family: var(--medium);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
`;

export const Key = styled.p`
  width: 96px;

  font-family: var(--regular);
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
`;

