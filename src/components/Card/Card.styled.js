import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 24px;
  padding: 12px;

  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    width: 1184px;
    padding: 24px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
  padding: 14px;
  border: 3px solid #fbe9ba;
`;

export const RightPart = styled.div`
  /* flex-grow: 1; */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 968px;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */

  margin-bottom: 8px;

  & span {
    color: #38cd3e;
  }
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

export const Teacher = styled.p`
  margin-bottom: 32px;

  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
`;

export const TeacherInfoWrapper = styled.div`
  margin-bottom: 16px;
`;

export const TeacherInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
  color: #8a8a89;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  white-space: "nowrap";

  & span {
    color: #121417;
  }
`;

export const Languages = styled.ul`
  display: flex;
`;

export const ReadMoreButton = styled.button`
  margin-bottom: 32px;

  background-color: transparent;
  color: #121417;
  border: none;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Experience = styled.p`
  margin-bottom: 32px;

  font-family: var(--regular);
  color: #121417;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const BookLesson = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  padding: 16px 48px;
  min-width: 232px;
  height: 60px;

  background: #f4c550;
  color: #121417;

  font-family: var(--bold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;

export const Reviews = styled.ul`
  margin-bottom: 32px;
`;

// export const Review = styled.li`
//   margin-bottom: 32px;

// `;

export const Levels = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Level = styled.li`
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;

  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.143;

  &:first-child {
    background: #f4c550;
    border: 1px solid #f4c550;
  }
`;
