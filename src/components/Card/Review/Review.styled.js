import styled from "styled-components";

export const Reviewer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ReviewerAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: lightblue;
`;

export const ReviewerName = styled.div`
  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const ReviewerRating = styled.p`
  display: flex;
  gap: 8px;
  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
`;

export const ReviewComment = styled.p`
  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;
