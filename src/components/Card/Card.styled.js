import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const RightPart = styled.div`
  /* flex-grow: 1; */
  width: 968px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 8px;
`;

export const Languages = styled.p`
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

export const Heart = styled.svg``;

export const Book = styled.svg`
  align-self: center;
`;

export const Teacher = styled.p`
  margin-bottom: 32px;

  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
`;

export const TeacherInfo = styled.p``;

export const Experience = styled.p``;
