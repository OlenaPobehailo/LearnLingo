import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  gap: 48px;
  width: 1184px;
  padding: 24px;

  outline: 1px solid red;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 14px;
  border: 3px solid #fbe9ba;
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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heart = styled.svg``;

export const Book = styled.svg`
  align-self: center;
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
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
  gap: 8px;
  margin-bottom: 32px;
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
